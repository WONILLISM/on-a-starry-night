import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthLayout from "./components/layout/AuthLayout";
import SocketProvider from "./contexts/SocketContext";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import ChatRoom from "./pages/ChatRoom";
import ThemeConfig from "./themes";
import Main from "./pages/Main";
import MainLayout from "./components/layout/Main";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/chat",
        element: <SocketProvider />,
        children: [
          {
            path: "",
            element: <Chat />,
          },
          {
            path: ":id",
            element: <ChatRoom />,
          },
        ],
      },
    ],
  },
  {
    path: "/app",
    element: <MainLayout />,
    children: [{ path: "main", element: <Main /> }],
  },
]);

const App = () => (
  <ThemeConfig>
    <RouterProvider router={router} />
  </ThemeConfig>
);

export default App;
