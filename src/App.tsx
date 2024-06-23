import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import OneProduct from './pages/OneProduct/OneProduct.tsx';
import Cart from './pages/Cart/Cart.tsx';
import NotFound from './pages/NotFound/NotFound.tsx';
import Login from './pages/Login/Login.tsx';
import AuthWrapper from './components/AuthWrapper/AuthWrapper.tsx';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/"
                    element={
                        <AuthWrapper>
                            <Home />
                        </AuthWrapper>
                    }
                />
                <Route path="/products/:productId" element={<OneProduct />} />
                <Route path="/cart/:userId" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
