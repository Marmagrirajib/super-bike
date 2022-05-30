
// import './App.css';

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Share/Navbar";
import Login from "./Pages/Login/Login";
import Portfolio from "./Pages/Portfolio/Portfolio";
import PartDetails from "./Pages/PartDetails/PartDetails";
import Register from "./Pages/Login/Register";
import RequiredAuth from "./Pages/Login/RequiredAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Orders from "./Pages/Dashboard/Orders";
import Review from "./Pages/Dashboard/Review";
import Profile from "./Pages/Dashboard/Profile";
import Blog from "./Pages/Blog/Blog";
import NotFound from "./Pages/Share/NotFound";
import UserCollection from "./Pages/Dashboard/userCollection";
import AllOrder from "./Pages/Dashboard/AllOrder";
import AddItem from "./Pages/Dashboard/AddItem";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/partDetails/:toolId" element={<RequiredAuth><PartDetails></PartDetails></RequiredAuth>}></Route>
        
        <Route path="/dashboard" element={<RequiredAuth><Dashboard></Dashboard></RequiredAuth>}>

          <Route index element={<Orders></Orders>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
          <Route path="allorder" element={<AllOrder></AllOrder>}></Route>
          <Route path="additem" element={<AddItem></AddItem>}></Route>
          <Route path="user" element={<UserCollection></UserCollection>}
          >
            
          </Route>
        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
