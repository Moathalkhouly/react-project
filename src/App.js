import { Fragment } from "react";
import Header from "./Header/Nav";
import Product from "./Product/Product";
import Footer from "./Footer/Footer";
import Feedback from "./Feedback/Feedback";
import Home from "./Home/Home";
import AddPost from "./AddPost/AddPost";
import { Route, Routes, Link } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import CardProduct from "./CardProduct/CardProduct";
import ProuductDetails from "./Detaials/ProuductDetails";
function App() {
  return (
    <Fragment>
     <Header/> 
    {/* <SignUp/>  */}
 
    <Routes>
     <Route path="products" element={<Product />}></Route>
     <Route path="products/:productId" element={< ProuductDetails/>}></Route>
      <Route path="/" element={<Home />}></Route> 
     <Route path="Feedback" element={<Feedback />}></Route>
     <Route path="Feedback/Add" element={<AddPost />}></Route>
     
   </Routes>
    <Footer/>
 

   </Fragment>
  );
}

export default App;
