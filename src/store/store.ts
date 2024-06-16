import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './api/products.api.ts';
import { cartsApi } from './api/carts.api.ts';
import { setupListeners } from '@reduxjs/toolkit/query';
import cartsSlice from './cartsSlice.ts';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        [cartsApi.reducerPath]: cartsApi.reducer,
        carts: cartsSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            productsApi.middleware,
            cartsApi.middleware
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
