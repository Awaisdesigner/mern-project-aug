import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
// import NewNav from './components/newnavbar/NewNav'; 
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import Cart from './components/cart/Cart';
import BuyNow from './components/buynow/BuyNow';
// import Card from './components/card/Card'; 
import './App.css';



function App() {
  return (
    <>
      <Navbar />
      {/* <NewNav /> */}
      {/* <Card />  */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/getproductsone/:id" element={<Cart />} />
        <Route exact path="/buynow" element={<BuyNow />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
