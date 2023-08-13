import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Services from "./Pages/Services/Services";
import About from "./Pages/About/About";
import AppLayout from "./AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Services /> },
        { path: "/about", element: <About /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
