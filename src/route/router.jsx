import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Three from "../pages/Three";
import Cylinder from "../pages/Cylinder";
import Phone from "../pages/Phone";
import PhoneMockup2 from "../pages/PhoneMockup2";
import PhoneMockup3 from "../pages/PhoneMockup3";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<PhoneMockup2 />
  },
  {
    path: "/three",
    element:<Three />
  },
  {
    path:"/cylinder",
    element:<Cylinder />
  },{
    path:"/phone-mockup",
    element:<Phone />
  },{
    // path:"/phone-mockup-2",
    // element:<PhoneMockup2 />
  },{
    path:"/phone-mockup-3",
    element:<PhoneMockup3 />
  }
]);