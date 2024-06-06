import React, { useState } from 'react';
import styles from './styles.module.css';
import Button from '../Button/Button.tsx';
import ProductCard from '../ProductCard/ProductCard.tsx';
import { data as products } from '../../data/product.ts';

const Catalog: React.FC = () => {
    const [visibleCards, setVisibleCards] = useState(9);

    const handleShowMore = () => {
        setVisibleCards(visibleCards + 3);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Catalog</h1>
            <div className={styles.search}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Search by title"
                />
                <Button text="Search" />
            </div>
            <div className={styles.list}>
                {products
                    ?.slice(0, visibleCards)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
            {visibleCards < products.length && (
                <div className={styles.show}>
                    <Button text="Show more" onClick={handleShowMore} />
                </div>
            )}
        </div>
    );
};

export default Catalog;
