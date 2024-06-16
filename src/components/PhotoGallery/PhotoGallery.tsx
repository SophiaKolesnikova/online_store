import React, { useState } from 'react';
import styles from './styles.module.css';

interface IPhotoGalleryProps {
    photos: string[];
}

const PhotoGallery: React.FC<IPhotoGalleryProps> = ({ photos }) => {
    const [selectedPhoto, setSelectedPhoto] = useState(photos[0]);
    const [activePhoto, setActivePhoto] = useState<number | null>(null);

    const handlePhotoClick = (index: number) => {
        setActivePhoto(index);
    };

    return (
        <div className={styles.gallery}>
            <div className={styles.mainPhoto}>
                <img
                    className={styles.mainImg}
                    src={selectedPhoto}
                    alt="Selected"
                />
            </div>
            <div className={styles.wrapper}>
                {photos?.map((photo, index) => (
                    <div
                        key={index}
                        className={styles.photo}
                        onClick={() => {
                            setSelectedPhoto(photo);
                            handlePhotoClick(index);
                        }}
                    >
                        <img
                            className={
                                activePhoto === index
                                    ? `${styles.photoActive}`
                                    : ``
                            }
                            src={photo}
                            alt={`Photo ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoGallery;
