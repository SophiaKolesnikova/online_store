import React from 'react';
import { ProductType } from 'app/types';
import styles from './styles.module.css';
import { useLocation } from 'react-router-dom';
import Button from '../Button/Button.tsx';
import Title from '../Title/Title.tsx';
import { images } from '../../data/images.ts';

interface IProductDetailsProps {
    product?: ProductType;
}

const ProductDetails: React.FC<IProductDetailsProps> = () => {
    const { state } = useLocation();

    return (
        <div className={styles.container}>
            <Title text={` Product ${state.product?.id} `} />
            <div className={styles.content}>
                <div className={styles.images}>
                    <img src="../../../public/Group%2071.svg" alt="product" />
                    <div className={styles.img}>
                        {images?.map((image) => (
                            <img
                                src={image.image}
                                alt="product"
                                key={image.id}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.wrapper}>
                        <h2 className={styles.title}>{state.product?.title}</h2>
                        <div className={styles.sku}>
                            <span className={styles.label}>SKU ID</span>
                            <span className={styles.id}>
                                000{state.product?.id}
                            </span>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <p className={styles.category}>Rating</p>
                        <span className={styles.text}>
                            {state.product?.rating && (
                                <img
                                    src="../../../public/Star%201.svg"
                                    style={{ paddingTop: '3px' }}
                                    alt="star"
                                />
                            )}
                        </span>
                    </div>
                    <div className={styles.description}>
                        <p className={styles.category}>Base price</p>
                        <span className={styles.text}>
                            {state.product?.basePrice}
                        </span>
                    </div>
                    <div className={styles.description}>
                        <p className={styles.category}>Discount percentage </p>
                        <span className={styles.text}>
                            {state.product?.discountPercentage}%
                        </span>
                    </div>
                    <div className={styles.description}>
                        <p className={styles.category}>Discount price</p>
                        <span className={styles.text}>
                            {state.product?.discountPrice}
                        </span>
                    </div>
                    <div className={styles.description}>
                        <p className={styles.category}>Stock</p>
                        <span className={styles.text}>
                            {state.product?.stock}
                        </span>
                    </div>
                    <div className={styles.description}>
                        <p className={styles.category}>Brand</p>
                        <span className={styles.text}>
                            {state.product?.brand}
                        </span>
                    </div>
                    <div className={styles.description}>
                        <p className={styles.category}>Category</p>
                        <span className={styles.text}>
                            {state.product?.category}
                        </span>
                    </div>
                    <div className={styles.description}>
                        <p className={styles.category}>Description</p>
                        <span className={styles.text}>
                            {state.product?.description}
                        </span>
                    </div>
                    <div className={styles.button}>
                        <Button text="Add to cart" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
