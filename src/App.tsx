import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Contact from './Pages/Contact';
import About from './Pages/About/about';
import Home from './Pages/Home';
import { Shop } from './Pages/ShopPage/shop';
import Bridalset from './Pages/categories/bridalset';
import Engagementring from './Pages/categories/Engagementring';
import Wedding from './Pages/categories/wedding';
import Eternalring from './Pages/categories/eternalring';
import ProductPage from './Pages/product/product';
import CheckoutPage from './Pages/checkout/checkoutPage';
import CardPayment from './Pages/payment/cardPayment';
import MomoPay from './Pages/payment/momoPay';
import { Contact } from './Pages/Contact/contact';
import { Faq } from './Pages/FAQ/faq';
import Register from './Pages/registerUser/register';
import LoginUser from './Pages/Login/login';
import Forgotpassword from './Pages/password/forgotpassword';
import ResetPassword from './Pages/password/resetPassword';


const App: React.FC = () => {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/bridalset" element={<Bridalset />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/engagement" element={<Engagementring />} />
          <Route path="/eternal" element={<Eternalring />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/payment/card" element={<CardPayment />} />
          <Route path="/payment/momo" element={<MomoPay />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />

        </Routes>
      </BrowserRouter>
    
  );
};

export default App;
