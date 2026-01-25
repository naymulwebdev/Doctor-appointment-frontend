//17: 28

import { RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Shared/Header/Header";
import router from "./route/Route/Route";

function App({ children }) {
  return <RouterProvider router={router}>{children}</RouterProvider>;
}

export default App;
