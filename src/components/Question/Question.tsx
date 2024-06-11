import React, { useState } from 'react';
import { QuestionListType } from 'app/types';
import styles from './styles.module.css';

interface IQuestionProps {
    question?: QuestionListType;
}

const Question: React.FC<IQuestionProps> = ({ question }) => {
    const [isRotated, setIsRotated] = useState(false);
    const [isShowAnswer, setIsShowAnswer] = useState(false);

    const handleShowMore = () => {
        setIsShowAnswer(!isShowAnswer);
    };

    const handleIconClick = () => {
        setIsRotated(!isRotated);
    };

    return (
        <div className={styles.box}>
            <div className={styles.info}>
                <p className={styles.question}>{question?.question}</p>
                <button onClick={handleShowMore} className={styles.button}>
                    <img
                        onClick={handleIconClick}
                        className={
                            isRotated ? `${styles.icon}` : `${styles.rotated}`
                        }
                        src="../../../public/Vector.svg"
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
