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
        discountedTotal: number;
        quantity: number;
        total: number;
    };

    export type CartsServerResponse<T> = {
        carts: T[];
        total: number;
        skip: number;
        limit: number;
    };

    export type CartType = {
        id: number;
        products: ProductType[];
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

    export type AuthType = {
        id: number;
        username: string;
        password: string;
        expiresInMins: number;
        email: string;
        firstName: string;
        lastName: string;
        gender: string;
        image: string;
        token: string;
        refreshToken: string;
    };
}
