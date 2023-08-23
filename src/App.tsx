import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthLayout from "./components/layout/AuthLayout";
import SocketProvider from "./contexts/SocketContext";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import ChatRoom from "./pages/ChatRoom";
import ThemeConfig from "./theme";

const router = createBrowserRouter([
  {
    path: "/",
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
  { path: "/", element: <></> },
]);

const App = () => (
  <ThemeConfig>
    <RouterProvider router={router} />
  </ThemeConfig>
);

export default App;
