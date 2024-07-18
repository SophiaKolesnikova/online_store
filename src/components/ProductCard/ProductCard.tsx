import React, { useState } from 'react';
import { ProductType } from 'app/types';
import { Link } from 'react-router-dom';
import QuantityProduct from '../QuantityProduct/QuantityProduct.tsx';
import Button from '../Atoms/Button/Button.tsx';
import styles from './styles.module.css';

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
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
    };

    const handleAddToCart = (product: ProductType, quantity: number) => {
        addToCart(product, quantity);
        console.log(product, quantity);
    };

    return (
        <div className={styles.card}>
            <Link key={product.id} to={`/products/${product.id}`}>
                <div className={styles.wrapper}>
                    <img
                        src={product.images[0]}
                        className={styles.image}
                        alt="product"
                    />
                </div>
            </Link>
            <div className={styles.info}>
                <div className={styles.description}>
                    <Link to={'#'} className={styles.title}>
                        {product.title}
                    </Link>
                    <p className={styles.price}>{product.price}</p>
                </div>
                {!isShowBtnGroup && (
                    <div className={styles.action}>
                        <Button
                            size={'small'}
                            variant={'default'}
                            type={'button'}
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
                        <Button
                            size={'small'}
                            variant={'default'}
                            type={'button'}
                            icon={'../../../public/minus.svg'}
                            onClick={handleDecreaseQuantity}
                        />
                        <QuantityProduct quantity={quantity} />
                        <Button
                            size={'small'}
                            variant={'default'}
                            type={'button'}
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
