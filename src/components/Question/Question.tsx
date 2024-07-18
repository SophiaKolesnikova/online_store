import React, { useState } from 'react';
import styles from './styles.module.css';
import { QuestionListType } from 'app/types';

interface IQuestionProps {
    question?: QuestionListType;
}

const Question: React.FC<IQuestionProps> = ({ question }) => {
    const [isShowAnswer, setIsShowAnswer] = useState(false);

    const handleShowMore = () => {
        setIsShowAnswer(!isShowAnswer);
    };

    return (
        <div className={styles.box}>
            <div className={styles.info}>
                <p className={styles.question}>{question?.question}</p>
                <button onClick={handleShowMore} className={styles.button}>
                    <img
                        src={
                            isShowAnswer
                                ? '../../../public/Vector.svg'
                                : '../../../public/+.svg'
                        }
                        alt="show"
                    />
                </button>
            </div>
            {isShowAnswer && (
                <p className={styles.answer}>{question?.answer}</p>
            )}
        </div>
    );
};

export default Question;
