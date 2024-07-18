import React, { useState } from 'react';
import styles from './styles.module.css';
import Button from '../Button/Button.tsx';
import ProductCard from '../ProductCard/ProductCard.tsx';
import { data as products } from '../../data/product.ts';
import Title from '../Title/Title.tsx';
import useFilter from '../../hooks.ts';
import { ProductType } from 'app/types';

const Catalog: React.FC = () => {
    const [visibleCards, setVisibleCards] = useState(6);
    const { filteredData, filterData } = useFilter(products);
    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useState<ProductType[]>([]);

    const addToCart = (product: ProductType) => {
        setCart([...cart, product]);
    };

    const handleShowMore = () => {
        setVisibleCards(visibleCards + 3);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        filterData(e.target.value);
    };

    return (
        <div className={styles.container} id="catalog">
            <Title text="Catalog" />
            <div className={styles.search}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Search by title"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <Button text="Search" />
            </div>
            <div className={styles.list}>
                {searchTerm
                    ? filteredData
                          ?.slice(0, visibleCards)
                          .map((product) => (
                              <ProductCard
                                  key={product.id}
                                  product={product}
                                  addToCart={addToCart}
                              />
                          ))
                    : null}
                {!searchTerm
                    ? products
                          ?.slice(0, visibleCards)
                          .map((product) => (
                              <ProductCard
                                  key={product.id}
                                  product={product}
                                  addToCart={addToCart}
                              />
                          ))
                    : null}
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
