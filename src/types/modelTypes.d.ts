declare module 'app/types' {
    export type ProductListType = {
        id: string;
        title: string;
        image: string;
        price: string;
    };

    export type QuestionListType = {
        id: string;
        question: string;
        answer: string;
    };
}
