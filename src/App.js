import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Inbox from "./pages/Inbox";
import UnRead from "./pages/UnRead";
import Read from "./pages/Read";
import Favorites from "./pages/Favoites";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Inbox />,
        },
        {
          path: "unread",
          element: <UnRead />,
        },
        {
          path: "read",
          element: <Read />,
        },
        {
          path: "favorites",
          element: <Favorites />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
