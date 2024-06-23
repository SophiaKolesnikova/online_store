import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { cartsApi } from './api/carts.api.ts';
import { CartType } from 'app/types';

export type CartState = {
    cart: CartType[];
    isLoading: boolean;
    isError: null | SerializedError;
    totalQuantity: number;
};

const initialState: CartState = {
    cart: [],
    isLoading: false,
    isError: null,
    totalQuantity: 0,
};

const cartsSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setUpdateCart: (state, action) => {
            if (
                !action.payload ||
                !action.payload.cartId ||
                !action.payload.id
            ) {
                return;
            }

            const cartIndex = state.cart.findIndex(
                (cart) => cart.id === action.payload.cartId
            );

            if (cartIndex !== -1) {
                const updatedProducts = state.cart[cartIndex].products.map(
                    (product) =>
                        product.id === action.payload.id
                            ? { ...product, quantity: action.payload.quantity }
                            : product
                );

                const updatedCart = {
                    ...state.cart[cartIndex],
                    products: updatedProducts,
                };

                const newCartArray = state.cart.map((cartItem, index) =>
                    index === cartIndex ? updatedCart : cartItem
                );

                const totalQuantity = newCartArray.reduce((total, cartItem) => {
                    return (
                        total +
                        cartItem.products.reduce(
                            (sum, product) => sum + product.quantity,
                            0
                        )
                    );
                }, 0);

                return {
                    ...state,
                    cart: newCartArray,
                    totalQuantity,
                };
            }
        },

        removeProduct: (state, action) => {
            if (!action.payload || !action.payload.productId) {
                return;
            }

            const cartIndex = state.cart.findIndex(
                (cart) => cart.id === action.payload.cartId
            );

            if (cartIndex !== -1) {
                const updatedProducts = state.cart[cartIndex].products.filter(
                    (product) => product.id !== action.payload.productId
                );

                const updatedCart = {
                    ...state.cart[cartIndex],
                    products: updatedProducts,
                };

                const newCartArray = state.cart.map((cartItem, index) =>
                    index === cartIndex ? updatedCart : cartItem
                );

                const totalQuantity = newCartArray.reduce((total, cartItem) => {
                    return (
                        total +
                        cartItem.products.reduce(
                            (sum, product) => sum + product.quantity,
                            0
                        )
                    );
                }, 0);

                const totalCost = newCartArray.reduce((total, cartItem) => {
                    return (
                        total +
                        cartItem.products.reduce(
                            (sum, product) => sum + product.discountedTotal,
                            0
                        )
                    );
                }, 0);

                return {
                    ...state,
                    cart: newCartArray,
                    totalQuantity,
                    totalCost,
                };
            }
        },

        isLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        isError: (state, action) => {
            state.isError = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(cartsApi.endpoints.getCarts.matchPending, (state) => {
                state.isLoading = true;
            })
            .addMatcher(
                cartsApi.endpoints.getCarts.matchFulfilled,
                (state, action) => {
                    state.isLoading = false;
                    state.cart = action.payload;
                }
            )
            .addMatcher(
                cartsApi.endpoints.getCarts.matchRejected,
                (state, action) => {
                    state.isLoading = false;
                    state.isError = action.error;
                }
            );
        builder
            .addMatcher(cartsApi.endpoints.updateCart.matchPending, (state) => {
                state.isLoading = true;
            })
            .addMatcher(
                cartsApi.endpoints.updateCart.matchFulfilled,
                (state, action) => {
                    state.isLoading = false;

                    cartsSlice.caseReducers.setUpdateCart(state, action);
                }
            )
            .addMatcher(
                cartsApi.endpoints.updateCart.matchRejected,
                (state, action) => {
                    state.isLoading = false;
                    state.isError = action.error;
                }
            );
    },
});

export const { isLoading, isError, setUpdateCart, removeProduct } =
    cartsSlice.actions;
export default cartsSlice.reducer;
