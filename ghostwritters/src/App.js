import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HomePage, {loader as homeLoader} from "./pages/HomePage.tsx";
import Signup, {loader as authLoader} from "./pages/Signup.tsx";
import Login from "./pages/Login.tsx";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/">
    <Route index element={<HomePage />} loader={homeLoader} />
    <Route path="login" element={<Login />} loader={authLoader} />
    <Route path="signup" element={<Signup />} loader={authLoader} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
