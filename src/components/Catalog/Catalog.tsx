import React, { useCallback, useEffect, useState } from 'react';
import Button from '../Atoms/Button/Button.tsx';
import Title from '../Atoms/Title/Title.tsx';
import { ProductType } from 'app/types';
import { useGetProductsQuery } from '../../store/api/products.api.ts';
import ProductCard from '../ProductCard/ProductCard.tsx';
import { useDebounce } from '../../hooks/debounce.ts';
import styles from './styles.module.css';
import FormGroup from '../Molecules/FormGroup/FormGroup.tsx';
import TextField from '../Atoms/TextField/TextField.tsx';

const Catalog: React.FC = () => {
    const [skip, setSkip] = useState(0);
    const limit = 9;
    const [searchTerm, setSearchTerm] = useState('');
    const debounce = useDebounce(searchTerm);
    const {
        isError: getProductsError,
        isLoading: getProductsLoading,
        data: products,
    } = useGetProductsQuery({
        skip,
        limit,
        search: debounce,
    });

    const [productsList, setProductsList] = useState<ProductType[]>([]);

    const filteredResults = products?.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        return filteredResults;
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
        <section className={styles.container} id="catalog">
            <Title size={'large'} variant={'secondary'}>
                Catalog
            </Title>
            <FormGroup
                onSubmit={onSubmit}
                gap={'small'}
                padding={'none'}
                direction={'row'}
            >
                <TextField
                    type={'text'}
                    variant={'primary'}
                    height={'large'}
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder={'Search by title'}
                />
                <Button size={'large'} variant={'primary'} type={'button'}>
                    Search
                </Button>
            </FormGroup>
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
                    ? productsList.map((product, index) => (
                          <ProductCard
                              key={product.id + index}
                              product={product}
                          />
                      ))
                    : null}
            </div>
            <div className={styles.list}>
                {filteredResults && filteredResults.length > 0 && searchTerm
                    ? filteredResults.map((product, index) => (
                          <ProductCard
                              key={product.id + index}
                              product={product}
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
            {products && products.length > 0 && !filteredResults ? (
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
        </section>
    );
};

export default Catalog;
