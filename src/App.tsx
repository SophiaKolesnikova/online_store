import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import ProductCard from './pages/ProductCard/ProductCard.tsx';
import Cart from './pages/Cart/Cart.tsx';
import NotFound from './pages/NotFound/NotFound.tsx';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductCard />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
