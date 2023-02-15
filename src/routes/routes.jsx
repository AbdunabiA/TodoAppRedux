import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Protected from "../components/Protected";
import Todos from "../pages/Todos";
import Authenticated from "../components/Authenticated";
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import NewTodo from "../pages/NewTodo";
import TodoInfo from "../pages/TodoInfo";
import TodosLayout from "../layouts/TodosLayout";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Navigate to={"/todos"} replace />} />
      <Route element={<Protected />}>
        <Route
          path="/todos"
          element={<TodosLayout />}
          errorElement={<ErrorPage />}
        >
          <Route index element={<Todos />} />
          <Route path=":id" element={<TodoInfo />} />
          <Route path="new" element={<NewTodo />} />
        </Route>
      </Route>

      <Route
        path="/sign-in"
        element={
          <Authenticated>
            <SignIn />
          </Authenticated>
        }
        errorElement={<ErrorPage />}
      />
      <Route
        path="/sign-up"
        element={
          <Authenticated>
            <SignUp />
          </Authenticated>
        }
        errorElement={<ErrorPage />}
      />
    </Route>
  )
);