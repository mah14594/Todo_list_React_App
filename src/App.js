import { lazy, Suspense } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";

const Main = lazy(() => import("./Pages/Main"));
const Login = lazy(() => import("./Pages/Login"));
export default function App() {
  return (
    <Suspense fallback={<p className="text-center col-12">Loading...</p>}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" exact>
            <Login></Login>
          </Redirect>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/Main/:Id">
          <Main></Main>
        </Route>
        <Route path="*">
          <h1 className="text-center col-12 mx-auto">Page not Found!</h1>
          <Link to="/login" className="col-12 mx-auto text-center">
            Back to login
          </Link>
        </Route>
      </Switch>
    </Suspense>
  );
}
