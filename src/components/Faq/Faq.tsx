import React from 'react';
import Question from '../Question/Question.tsx';
import { questions } from '../../data/questions.ts';
import styles from './styles.module.css';

const Faq: React.FC = () => {
    return (
        <section className={styles.section} id="faq">
            <h2 className={styles.title}>FAQ</h2>
            {questions.map((question) => (
                <Question key={question.id} question={question} />
            ))}
        </section>
    );
};

export default Faq;
