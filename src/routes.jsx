import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Fixtures from "./components/Fixtures";
import TeamList from "./components/TeamList";
import Login from "./components/Login";
import Signup from "./components/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/fixtures",
        element: <Fixtures />,
      },
      {
        path: "/teamlist",
        element: <TeamList />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
