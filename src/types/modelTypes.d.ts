declare module 'app/types' {
    export type ProductsServerResponse<T> = {
        products: T[];
        total: number;
        skip: number;
        limit: number;
    };

    export type ProductType = {
        id: number;
        title: string;
        description: string;
        category: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        tags: string[];
        brand: string;
        sku: string;
        weight: number;
        dimensions: Dimensions;
        warrantyInformation: string;
        shippingInformation: string;
        availabilityStatus: string;
        reviews: Review[];
        returnPolicy: string;
        minimumOrderQuantity: number;
        meta: Meta;
        images: string[];
        thumbnail: string;
    };

    export type CartsServerResponse<T> = {
        carts: T[];
        total: number;
        skip: number;
        limit: number;
    };

    export type CartType = {
        id: number;
        products: ProductCartType[];
        total: number;
        discountedTotal: number;
        userId: number;
        totalProducts: number;
        totalQuantity: number;
    };

    export type QuestionListType = {
        id: string;
        question: string;
        answer: string;
    };

    export type ProductCartType = {
        id: number;
        title: string;
        price: number;
        quantity: number;
        total: number;
        discountPercentage: number;
        discountedTotal: number;
        thumbnail: string;
    };
}
