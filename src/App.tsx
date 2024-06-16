import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import OneProduct from './pages/OneProduct/OneProduct.tsx';
import Cart from './pages/Cart/Cart.tsx';
import NotFound from './pages/NotFound/NotFound.tsx';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:productId" element={<OneProduct />} />
                <Route path="/cart/:userId" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
