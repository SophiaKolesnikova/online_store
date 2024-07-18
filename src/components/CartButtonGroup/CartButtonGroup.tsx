import React, { useState } from 'react';
import { useUpdateCartMutation } from '../../store/api/carts.api.ts';
import { setUpdateCart } from '../../store/cartsSlice.ts';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import Button from '../Atoms/Button/Button.tsx';
import QuantityProduct from '../QuantityProduct/QuantityProduct.tsx';
import { ProductType } from 'app/types';
import styles from './styles.module.css';

interface CartButtonGroupProps {
    product?: ProductType;
}

const CartButtonGroup: React.FC<CartButtonGroupProps> = ({ product }) => {
    const [updateToCart, { data: updatedCartData }] = useUpdateCartMutation();
    const { cart, isLoading } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    const [quantity, setQuantity] = useState<number>(product?.quantity || 0);

    console.log(updatedCartData, 'updatedCartData');

    const handleAddToCart = () => {
        const newQuantity = 1;
        setQuantity(newQuantity);
        changeCart(newQuantity);
    };

    const handleIncrease = () => {
        setQuantity((prevQuantity) => {
            const newQuantity = prevQuantity + 1;
            changeCart(newQuantity);
            return newQuantity;
        });
    };

    const handleDecrease = () => {
        setQuantity((prevQuantity) => {
            const newQuantity = prevQuantity > 1 ? prevQuantity - 1 : 0;
            changeCart(newQuantity);
            return newQuantity;
        });
    };

    const changeCart = (newQuantity: number) => {
        if (!isLoading && cart) {
            const cartId = cart[0].id;
            updateToCart({
                cartId: cartId,
                quantity: newQuantity,
                id: product?.id,
            }).then(() => {
                if (updatedCartData) {
                    dispatch(setUpdateCart(updatedCartData));
                }
            });
        }
    };

    return (
        <div className={styles.actions}>
            {quantity === 0 && !product?.quantity ? (
                <Button
                    size={'small'}
                    variant={'default'}
                    type={'button'}
                    icon="../../../public/cart-button.svg"
                    onClick={handleAddToCart}
                />
            ) : (
                <>
                    <Button
                        size={'small'}
                        variant={'default'}
                        type={'button'}
                        icon={'../../../public/minus.svg'}
                        onClick={handleDecrease}
                        disabled={quantity === 1}
                    />
                    <QuantityProduct quantity={quantity} />
                    <Button
                        size={'small'}
                        variant={'default'}
                        type={'button'}
                        icon={'../../../public/plus.svg'}
                        onClick={handleIncrease}
                        disabled={product?.stock === quantity}
                    />
                </>
            )}
        </div>
    );
};

export default CartButtonGroup;
