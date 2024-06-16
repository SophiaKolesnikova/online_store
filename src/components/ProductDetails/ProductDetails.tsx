import React, { useMemo } from 'react';
import Button from '../Atoms/Button/Button.tsx';
import Title from '../Atoms/Title/Title.tsx';
import PhotoGallery from '../PhotoGallery/PhotoGallery.tsx';
import { useGetOneProductQuery } from '../../store/api/products.api.ts';
import styles from './styles.module.css';

interface IProductDetailsProps {
    id: string | undefined;
}

const ProductDetails: React.FC<IProductDetailsProps> = ({ id }) => {
    const productId = Number(id);

    const {
        isError: getProductError,
        isLoading: getProductLoading,
        data: product,
    } = useGetOneProductQuery(productId);

    const basePrice = product?.price;
    const discountPercentage = product?.discountPercentage;
    const rating = product?.rating;

    const resultPrice = () => {
        if (basePrice && discountPercentage) {
            return (basePrice - (basePrice * discountPercentage) / 100).toFixed(
                2
            );
        }
    };

    const discountPrice = useMemo(
        () => resultPrice(),
        [basePrice, discountPercentage]
    );

    const imagesStar = Array.from(
        { length: Math.round(rating!) },
        (_, index) => (
            <img
                key={index}
                src={`../../../public/Star%201.svg`}
                alt={`Star image`}
            />
        )
    );

    return (
        <div className={styles.container}>
            <Title
                size={'large'}
                variant={'secondary'}
            >{` Product ${productId} `}</Title>
            {getProductLoading && (
                <p
                    style={{
                        textAlign: 'center',
                        color: 'black',
                        fontSize: '18px',
                    }}
                >
                    Loading...
                </p>
            )}
            {getProductError && (
                <p
                    style={{
                        textAlign: 'center',
                        color: 'red',
                        fontSize: '18px',
                    }}
                >
                    Something wrong...
                </p>
            )}
            {product ? (
                <div className={styles.content}>
                    <PhotoGallery photos={product.images} />
                    <div className={styles.info}>
                        <div className={styles.wrapper}>
                            <h2 className={styles.title}>{product.title}</h2>
                            <div className={styles.sku}>
                                <span className={styles.label}>SKU ID</span>
                                <span className={styles.id}>
                                    000{productId}
                                </span>
                            </div>
                        </div>
                        <div className={styles.description}>
                            <p className={styles.category}>Rating</p>
                            <span className={styles.rating}>
                                {rating ? imagesStar : null}
                            </span>
                        </div>
                        <div className={styles.description}>
                            <p className={styles.category}>Base price</p>
                            <span className={styles.text}>{product.price}</span>
                        </div>
                        <div className={styles.description}>
                            <p className={styles.category}>
                                Discount percentage
                            </p>
                            <span className={styles.text}>
                                {product.discountPercentage}%
                            </span>
                        </div>
                        <div className={styles.description}>
                            <p className={styles.category}>Discount price</p>
                            <span className={styles.text}>{discountPrice}</span>
                        </div>
                        <div className={styles.description}>
                            <p className={styles.category}>Stock</p>
                            <span className={styles.text}>{product.stock}</span>
                        </div>
                        <div className={styles.description}>
                            <p className={styles.category}>Brand</p>
                            <span className={styles.text}>{product.brand}</span>
                        </div>
                        <div className={styles.description}>
                            <p className={styles.category}>Category</p>
                            <span className={styles.text}>
                                {product.category}
                            </span>
                        </div>
                        <div className={styles.description}>
                            <p className={styles.category}>Description</p>
                            <span className={styles.text}>
                                {product.description}
                            </span>
                        </div>
                        <div className={styles.button}>
                            <Button
                                size={'large'}
                                variant={'primary'}
                                type={'button'}
                            >
                                Add to cart
                            </Button>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default ProductDetails;
