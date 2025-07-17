import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/Home";
import Three from "../pages/Three";
import Cylinder from "../pages/Cylinder";
import Phone from "../pages/Phone";
import PhoneMockup2 from "../pages/PhoneMockup2";
import PhoneMockup3 from "../pages/PhoneMockup3";
import CopyHome from "../pages/CopyHome";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
// import Screen3 from "../screens/Screen3";
// import Screen4 from "../CopyScreen/Screen5";
import Screen3 from "../CopyScreen/Screen3";
import Screen5 from "../CopyScreen/Screen5";
import Screen4 from "../CopyScreen/Screen4";
// import Screen4 from "../screens/Screen4";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<CopyHome />
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
    path:"/phone-mockup-2",
    element:<PhoneMockup2 />
  },{
    path:"/phone-mockup-3",
    element:<PhoneMockup3 />
  },
  {
    path: "/screen1",
    element: <Screen1 />
  },
  {
    path: "/screen2",
    element: <Screen2 />
  },
  {
    path: "/screen3",
    element: <Screen3 />
  },
  {
    path: "/screen4",
    element: <Screen4 />
  },
  
  {
    path: "/screen5",
    element: <Screen5 />
  }
  
]);