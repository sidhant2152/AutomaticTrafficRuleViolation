import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/Layout/RootLayout";
import HomePage from "./Pages/Home/Home";
import AboutPage from "./Pages/About/About";
import CheckChallan from "./Pages/Challan/CheckChallan";
import ModelList from "./Pages/Model-Brief/ModelList";
import Model1 from "./Pages/Models/Model1";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/challan", element: <CheckChallan /> },
        { path: "/models", element: <ModelList /> },
        { path: "/:model", element: <Model1 /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
