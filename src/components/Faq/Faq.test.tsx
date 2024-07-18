import '@testing-library/jest-dom';
import { QuestionListType } from 'app/types';

describe('questionsMapper function', () => {
    function questionsMapper(questions: QuestionListType[]) {
        return questions.map((question) => ({
            id: question.id,
            question: question.question,
            answer: question.answer,
        }));
    }

    test('correctly maps questions data', () => {
        const questions = [
            {
                id: '1',
                question: 'Question 1',
                answer: 'Long answer to the first question',
            },
            {
                id: '2',
                question: 'Question 2',
                answer: 'Long answer to the second question',
            },
        ];
        const expectedOutput = [
            {
                id: '1',
                question: 'Question 1',
                answer: 'Long answer to the first question',
            },
            {
                id: '2',
                question: 'Question 2',
                answer: 'Long answer to the second question',
            },
        ];
        expect(questionsMapper(questions)).toEqual(expectedOutput);
    });

    test('handle incorrect data', () => {
        const incorrectData: any[] = [
            {
                id: '1',
                question: 1,
                answer: 'Long answer to the first question',
            },
            {
                id: '2',
                question: 'Question 2',
                answer: null,
            },
            {
                id: '3',
                question: undefined,
                answer: 'Long answer to the third question',
            },
            {
                id: 4,
                question: 'Question 4',
                answer: 'Long answer',
            },
        ];

        expect(() => {
            questionsMapper(incorrectData);
        }).not.toThrow();
    });

    test('handle empty questions array', () => {
        const emptyQuestions: QuestionListType[] = [];
        expect(questionsMapper(emptyQuestions)).toEqual([]);
    });
});
