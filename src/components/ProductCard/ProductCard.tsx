import React, { useState } from 'react';
import styles from './styles.module.css';
import { ProductType } from 'app/types';
import SmallButton from '../SmallButton/SmallButton.tsx';
import { Link, useNavigate } from 'react-router-dom';
import QuantityProduct from '../QuantityProduct/QuantityProduct.tsx';

interface IProductCardProps {
    product: ProductType;
    addToCart: (product: ProductType, quantity: number) => void;
}

const ProductCard: React.FC<IProductCardProps> = ({ product, addToCart }) => {
    const [quantity, setQuantity] = useState(1);
    const [isShowBtnGroup, setIsShowBtnGroup] = useState(false);

    const handleShowButtonGroup = () => {
        setIsShowBtnGroup(!isShowBtnGroup);
    };

    const handleIncreaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecreaseQuantity = () => {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
    };

    const navigate = useNavigate();

    const toProductDetails = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        navigate(`/product/${product?.id}`, { state: { product } });
    };

    const handleAddToCart = (product: ProductType, quantity: number) => {
        addToCart(product, quantity);
        console.log(product, quantity);
    };

    return (
        <div className={styles.card}>
            {/*<Link to={`/product/${product?.id}`}>*/}
            <img
                src={product?.image}
                className={styles.image}
                alt="product"
                onClick={toProductDetails}
            />
            {/*</Link>*/}
            <div className={styles.info}>
                <div className={styles.description}>
                    <Link to={'#'} className={styles.title}>
                        {product?.title}
                    </Link>
                    <p className={styles.price}>{product?.price}</p>
                </div>
                {!isShowBtnGroup && (
                    <div className={styles.action}>
                        <SmallButton
                            icon="../../../public/cart-button.svg"
                            onClick={() => {
                                handleShowButtonGroup();
                                handleAddToCart(product, quantity);
                            }}
                        />
                    </div>
                )}

                {isShowBtnGroup && (
                    <div className={styles.action}>
                        <SmallButton
                            icon={'../../../public/minus.svg'}
                            onClick={handleDecreaseQuantity}
                        />
                        <QuantityProduct quantity={quantity} />
                        <SmallButton
                            icon={'../../../public/plus.svg'}
                            onClick={handleIncreaseQuantity}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
