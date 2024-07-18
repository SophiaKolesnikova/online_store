import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { cartsApi } from './api/carts.api.ts';
import { CartType } from 'app/types';

export type CartState = {
    carts: CartType[];
    isLoading: boolean;
    isError: null | SerializedError;
};

const initialState: CartState = {
    carts: [],
    isLoading: false,
    isError: null,
};

const cartsSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        setCarts: (state, action) => {
            state.carts = action.payload;
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
            .addMatcher(
                cartsApi.endpoints.getCarts.matchPending,
                (state, action) => {
                    cartsSlice.caseReducers.setCarts(state, action);
                    state.isLoading = true;
                }
            )
            .addMatcher(
                cartsApi.endpoints.getCarts.matchFulfilled,
                (state, action) => {
                    state.isLoading = false;
                    cartsSlice.caseReducers.setCarts(state, action);
                }
            )
            .addMatcher(
                cartsApi.endpoints.getCarts.matchRejected,
                (state, action) => {
                    state.isLoading = false;
                    state.isError = action.error;
                }
            );
    },
});

export const { setCarts, isLoading, isError } = cartsSlice.actions;
export default cartsSlice.reducer;
