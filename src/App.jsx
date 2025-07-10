import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromChildren,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/header/Home";
import About from "./components/header/About";
import Country from "./components/header/Country";
import Contact from "./components/header/Contact";
import ErrorPage from "./components/header/ErrorPAge";
import CountryDetails from "./components/UI/CountryDetails";

{
  /* Create Router For Navigaton */
}
const router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route element={<Layout />} errorElement={<ErrorPage />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/country" element={<Country />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/country/:id" element={<CountryDetails />} />
      </Route>
    </>
  ),
  {
    basename: "/Country-Atlas" 
  }
);


const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
