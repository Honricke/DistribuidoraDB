import { createBrowserRouter } from "react-router-dom";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Consulta from "./pages/Consulta";

const router = createBrowserRouter([
  {
    path: "/buy",
    element: <Buy />,
  },
  {
    path: "/sell",
    element: <Sell />,
  },
  {
    path: "/",
    element: <Consulta />,
  },
]);

export default router;
