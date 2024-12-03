import "./App.css";

// step 1 import 4 things
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Rootlayout from "./layouts/Rootlayout";
import { Home, About, Contact, Posts, Error } from "./pages";
// step 2 create router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Posts" element={<Posts />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <h1>App</h1>
    </div>
  );
}

export default App;
