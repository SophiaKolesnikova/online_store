import React from 'react';
import styles from './styles.module.css';
import Question from '../Question/Question.tsx';
import { questions } from '../../data/questions.ts';

const Faq: React.FC = () => {
    return (
        <div className={styles.section}>
            <h2 className={styles.title}>FAQ</h2>
            {questions.map((question) => (
                <Question key={question.id} question={question} />
            ))}
        </div>
    );
};

export default Faq;
