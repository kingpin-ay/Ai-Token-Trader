import Layout from "@/layouts/Layout";
import ProtectedRouteLayout from "@/layouts/ProtectedRouteLayout";
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
    <Route>
      <Route path="/" element={<ProtectedRouteLayout />}>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="tester" element={<Tester />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

export default RoutingTable;
