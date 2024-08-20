import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/Layout/RootLayout";
import HomePage from "./Pages/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: <RootLayout />,
      children: [{ path: "/", element: <HomePage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
