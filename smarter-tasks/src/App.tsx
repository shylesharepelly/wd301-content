import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskListPage from "./pages/TaskListPage";
import Layout from "./Layout";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import Signin from "./pages/Signin";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./pages/NotFound";
import Signup from "./pages/signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
  },
  {
    path:"/signup",
    element: <Signup/>
  },
 
  {
    path: "/signin",
    element:<Signin/>
  },
 
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "tasks",
        element: <TaskListPage />,
      },
      {
        path: "tasks/:id",
        element: <TaskDetailsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
