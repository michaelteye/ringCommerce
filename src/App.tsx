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
        </Routes>
      </BrowserRouter>
    
  );
};

export default App;
