import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialID = { id: "" };

const initialTasksState = {
  TodoTasks: [],
  DoneTasks: [],
  status: null,
  id: "",
};
const IDslice = createSlice({
  name: "id",
  initialState: initialID,
  reducers: {
    setID(state, action) {
      state.id = action.payload.id;
    },
  },
});
const TasksSlice = createSlice({
  name: "Tasks",
  initialState: initialTasksState,
  reducers: {
    AddnewTask(state, action) {
      state.TodoTasks.push({
        id: action.payload.id,
        title: action.payload.title,
      });
    },

    RemoveTask(state, action) {
      if (state.DoneTasks.length > 0) {
        const updateDoneTasks = state.DoneTasks.filter((item) => {
          return item.id !== action.payload;
        });
        state.DoneTasks = updateDoneTasks;
      }
      if (state.TodoTasks.length > 0) {
        const updateTodoTasks = state.TodoTasks.filter((item) => {
          return item.id !== action.payload;
        });
        state.TodoTasks = updateTodoTasks;
      }
    },
    AddDoneTask(state, action) {
      state.isCompleted = true;
      state.DoneTasks.push({
        id: action.payload.id,
        title: action.payload.title,
      });
      const updateTodoTasks = state.TodoTasks.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.TodoTasks = updateTodoTasks;
      state.isCompleted = true;
    },
    showStatus(state, action) {
      state.status = action.payload.status;
    },
    fetchTasks(state, action) {
      state.TodoTasks = action.payload.todotasks;
      state.DoneTasks = action.payload.donetasks;
    },
  },
});

const Store = configureStore({
  reducer: {
    TasksReducer: TasksSlice.reducer,
    IDreducer: IDslice.reducer,
  },
});

export const SendTasks = (Tasks, Listname, ID) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://todolistapp-e0b8f-default-rtdb.firebaseio.com/${ID}/${Listname}.json`,
        {
          method: "PUT",
          body: JSON.stringify(Tasks),
        }
      );
      if (!response.ok) {
        throw new Error("Sending Todo Tasks Data failed.");
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        TasksActions.showStatus(
          "Error in sending data to database please try again!"
        )
      );
    }
  };
};
export const FetchTasks = (ID) => {
  return async (dispatch) => {
    const Todoresponse = await fetch(
      `https://todolistapp-e0b8f-default-rtdb.firebaseio.com/${ID}/TodoTasks.json`
    );
    const Doneresponse = await fetch(
      `https://todolistapp-e0b8f-default-rtdb.firebaseio.com/${ID}/DoneTasks.json`
    );
    if (!Todoresponse.ok || !Doneresponse.ok) {
      throw new Error("error fetching data");
    }

    try {
      const tododata = await Todoresponse.json();
      const donedata = await Doneresponse.json();
      console.log(tododata);
      console.log(donedata);
      let todolist = [];
      let donelist = [];
      for (const key in tododata) {
        todolist.push({ id: tododata[key].id, title: tododata[key].title });
      }
      for (const key in donedata) {
        donelist.push({ id: donedata[key].id, title: donedata[key].title });
      }
      dispatch(
        TasksActions.fetchTasks({ todotasks: todolist, donetasks: donelist })
      );
    } catch (error) {
      dispatch(TasksActions.showStatus("Error in fetching data"));
    }
  };
};
export const TasksActions = TasksSlice.actions;
export const IDActions = IDslice.actions;
export default Store;
