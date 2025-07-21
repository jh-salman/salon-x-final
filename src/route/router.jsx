import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/Home";
import Three from "../pages/Three";
import Cylinder from "../pages/Cylinder";
import Phone from "../pages/Phone";
import PhoneMockup2 from "../pages/PhoneMockup2";
import PhoneMockup3 from "../pages/PhoneMockup3";

import Home from "../presentation/screen/Home";
import Screen1 from "../presentation/screen/Screen1";
import Screen2 from "../presentation/screen/Screen2";
// import Screen4 from "../screens/Screen4";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>
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
  // {
  //   path: "/screen3",
  //   element: <Screen3 />
  // },
  // {
  //   path: "/screen4",
  //   element: <Screen4 />
  // },
  
  // {
  //   path: "/screen5",
  //   element: <Screen5 />
  // }
  
]);