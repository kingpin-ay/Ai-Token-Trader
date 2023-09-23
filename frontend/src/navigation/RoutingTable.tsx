import Layout from "@/layouts/Layout";
import ProtectedRouteLayout from "@/layouts/ProtectedRouteLayout";
import About from "@/pages/About";
import Contacts from "@/pages/Contacts";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Tester from "@/pages/Tester";
import ErrorPage from "@/pages/ErrorPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SignUp from "@/pages/SignUp";

const RoutingTable = createBrowserRouter(
  createRoutesFromElements(
    <Route  errorElement={<ErrorPage />}>
      <Route path="/" element={<ProtectedRouteLayout />}>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="tester" element={<Tester />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>
  )
);

export default RoutingTable;
