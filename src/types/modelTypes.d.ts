declare module 'app/types' {
    export type ProductType = {
        id: string;
        title: string;
        image: string;
        price: string;
        rating: string;
        basePrice: number;
        discountPercentage: string;
        discountPrice: number;
        stock: number;
        brand: string;
        category: string;
        description: string;
    };

    export type QuestionListType = {
        id: string;
        question: string;
        answer: string;
    };
}
