import Layout from "@/Layout";
import About from "@/pages/About";
import Contacts from "@/pages/Contacts";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Tester from "@/pages/Tester";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const RoutingTable = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="tester" element={<Tester />} />
      <Route path="Login" element={<Login />} />
      <Route path="contacts" element={<Contacts />} />
    </Route>
  )
);

export default RoutingTable;
