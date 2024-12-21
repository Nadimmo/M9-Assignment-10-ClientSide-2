import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/Home/Home";
import AllSpot from "../components/All_Turist_Sport/AllSpot";
import AddSpot from "../components/AddSpot/AddSpot";
import MyList from "../components/MyList/MyList";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ViewDetails from "../components/ViewDetails/ViewDetails";
import Bangladesh from "../countrySpot/Bangladesh/Bangladesh";
import Malaysia from "../countrySpot/Malaysia/Malaysia";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Update from "../components/Update/Update";
import Details from "../countrySpot/Bangladesh/Details";
import MalaysiaD from "../countrySpot/Malaysia/MalaysiaD";
import Indonasia from "../countrySpot/Indonasia/Indonasia";
import IndonasiaD from "../countrySpot/Indonasia/IndonasiaD";
import Vietnam from "../countrySpot/Vietnam/Vietnam";
import VietnamD from "../countrySpot/Vietnam/VietnamD";
import Combodia from "../countrySpot/Combodia/Combodia";
import CombodiaD from "../countrySpot/Combodia/CombodiaD";
import Thailand from "../countrySpot/Thailand/Thailand";
import ThailandD from "../countrySpot/Thailand/ThailandD";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () =>fetch('https://assignment-server-10-phi.vercel.app/cartes')
        },
        {
            path: '/allSpot',
            element: <AllSpot></AllSpot>,
            loader: () =>fetch('https://assignment-server-10-phi.vercel.app/cartes')
        },
        {
            path: '/addSpot',
            element: <AddSpot></AddSpot>
        },
        {
            path: '/myList',
            element: <MyList></MyList>,
            loader: () =>fetch('https://assignment-server-10-phi.vercel.app/cartes')
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/view/:id',
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute> ,
          loader: ({params})=> fetch(` https://assignment-server-10-phi.vercel.app/cartes/${params.id}`)
        },
        {
          path: '/update/:id',
          element: <Update></Update>,
          loader: ({params})=> fetch(`https://assignment-server-10-phi.vercel.app/cartes/${params.id}`)
        },
        {
          path:'/bd',
          element: <Bangladesh></Bangladesh>,
          loader: ()=> fetch(`../tourist.json`)
        },
        {
          path: '/details/:id',
          element: <Details></Details>,
          loader: ()=> fetch(`../tourist.json`)
        },
        {
          path:'/malaysia',
          element: <Malaysia></Malaysia>,
          loader: ()=> fetch('../malaysia.json')
        },
        {
          path:'/malaysiaD/:id',
          element: <MalaysiaD></MalaysiaD>,
          loader: ()=> fetch('../malaysia.json')
        },
        {
          path:'/indonasia',
          element: <Indonasia></Indonasia>,
          loader: ()=> fetch('../indronasia.json')
        },
        {
          path:'/indonasiaD/:id',
          element: <IndonasiaD></IndonasiaD>,
          loader: ()=> fetch('../malaysia.json')
        },
        {
          path:'/vietnam',
          element: <Vietnam></Vietnam>,
          loader: ()=> fetch('../viatnam.json')
        },
        {
          path:'/vietnamD/:id',
          element: <VietnamD></VietnamD>,
          loader: ()=> fetch('../viatnam.json')
        },
        {
          path:'/combodia',
          element: <Combodia></Combodia>,
          loader: ()=> fetch('../cambodia.json')
        },
        {
          path:'/combodiaD/:id',
          element: <CombodiaD></CombodiaD>,
          loader: ()=> fetch('../cambodia.json')
        },
        {
          path:'/thailand',
          element: <Thailand></Thailand>,
          loader: ()=> fetch('../thailadn.json')
        },
        {
          path:'/thailandD/:id',
          element: <ThailandD></ThailandD>,
          loader: ()=> fetch('../thailadn.json')
        },
      ]
    },
  ]);



export default router;