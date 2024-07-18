import React, { useCallback, useEffect, useState } from 'react';
import Button from '../Atoms/Button/Button.tsx';
import Title from '../Atoms/Title/Title.tsx';
import { ProductType } from 'app/types';
import {
    useGetProductsQuery,
    useSearchProductsQuery,
} from '../../store/api/products.api.ts';
import ProductCard from '../ProductCard/ProductCard.tsx';
import { useDebounce } from '../../hooks/debounce.ts';
import { useAppDispatch } from '../../store/hooks.ts';
import { useGetCartsQuery } from '../../store/api/carts.api.ts';
import { setCarts } from '../../store/cartsSlice.ts';
import styles from './styles.module.css';

const Catalog: React.FC = () => {
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(9);
    const {
        isError: getProductsError,
        isLoading: getProductsLoading,
        data: products,
    } = useGetProductsQuery({ skip, limit });
    console.log(products);

    const userId = 134;
    const { data } = useGetCartsQuery(userId);
    const dispatch = useAppDispatch();
    const [productsList, setProductsList] = useState<ProductType[]>([]);
    const [cart, setCart] = useState<ProductType[]>([]);

    const [searchTerm, setSearchTerm] = useState('');
    const debounce = useDebounce(searchTerm);

    const {
        data: searchProducts,
        isLoading: searchProductsLoading,
        isError: searchProductsError,
    } = useSearchProductsQuery(debounce, {
        skip: debounce.length < 2,
    });

    useEffect(() => {
        dispatch(setCarts(data));
    }, [dispatch, data]);

    const filteredResults = searchProducts?.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        return filteredResults;
    };

    const addToCart = (product: ProductType) => {
        setCart([...cart, product]);
    };

    const handleShowMore = useCallback(() => {
        if (skip + limit < 50) {
            setSkip((prevSkip) => prevSkip + limit);
        }
    }, [limit]);

    useEffect(() => {
        if (products && products.length > 0) {
            setProductsList((prevState) => [...prevState, ...products]);
        }
    }, [products]);

    return (
        <div className={styles.container} id="catalog">
            <Title size={'large'} variant={'secondary'}>
                Catalog
            </Title>
            {/*<FormGroup>*/}
            {/*    <TextField*/}
            {/*        type={'text'}*/}
            {/*        variant={'primary'}*/}
            {/*        value={searchTerm}*/}
            {/*        onChange={handleSearch}*/}
            {/*        placeholder={'Search by title'}*/}
            {/*    />*/}
            {/*    <Button size={'large'} variant={'primary'} type={'button'}>*/}
            {/*        Search*/}
            {/*    </Button>*/}
            {/*</FormGroup>*/}
            <form className={styles.search} onSubmit={onSubmit}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Search by title"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <Button size={'large'} variant={'primary'} type={'button'}>
                    Search
                </Button>
            </form>
            {getProductsLoading && (
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
            {getProductsError && (
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
            <div className={styles.list}>
                {productsList && productsList.length > 0 && !searchTerm
                    ? productsList.map((product) => (
                          <ProductCard
                              key={product.id}
                              product={product}
                              addToCart={addToCart}
                          />
                      ))
                    : null}
            </div>
            {searchProductsLoading && (
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
            {searchProductsError && (
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
            <div className={styles.list}>
                {filteredResults && filteredResults.length > 0 && searchTerm
                    ? filteredResults.map((product) => (
                          <ProductCard
                              key={product.id}
                              product={product}
                              addToCart={addToCart}
                          />
                      ))
                    : null}
            </div>
            {filteredResults?.length === 0 ? (
                <p
                    style={{
                        textAlign: 'center',
                        color: 'black',
                        fontSize: '18px',
                    }}
                >
                    There is no results.
                </p>
            ) : null}
            {products && products.length > 0 ? (
                <div className={styles.show}>
                    <Button
                        size={'large'}
                        variant={'primary'}
                        type={'button'}
                        disabled={getProductsLoading}
                        onClick={handleShowMore}
                    >
                        Show more
                    </Button>
                </div>
            ) : null}
        </div>
    );
};

export default Catalog;
