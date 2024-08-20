import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/Layout/RootLayout";
import HomePage from "./Pages/Home/Home";
import AboutPage from "./Pages/About/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
