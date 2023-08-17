import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthLayout from "./components/layout/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./pages/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/chat", element: <Chat /> },
    ],
  },
  { path: "/", element: <></> },
]);

const App = () => <RouterProvider router={router} />;

export default App;
