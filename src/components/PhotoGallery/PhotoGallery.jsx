import React, { useState, useEffect } from 'react';
import ImageModal from './ImageModal';
import ImageStack from './ImageStack'; // Import your ImageStack component
import styles from './PhotoGallery.module.css';

const imageSources = {
    photography: Array.from({ length: 30 }, (_, index) => `../assets/photos/photography/${index + 1}.webp`),
    coverArt: Array.from({ length: 8 }, (_, index) => `../assets/photos/coverArt/${index + 1}.webp`),
};

const PhotoGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleImageClick = (src) => {
        setSelectedImage(src);
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
        setSelectedImage(null);
    };

    useEffect(() => {
        if (isModalVisible) {
            document.body.classList.add(styles.noScroll);
        } else {
            document.body.classList.remove(styles.noScroll);
        }
        return () => {
            document.body.classList.remove(styles.noScroll);
        };
    }, [isModalVisible]);

    return (
        <div className={styles.photoGalleryContainer}>
            {Object.entries(imageSources).map(([category, images]) => (
                <div key={category}>
                    <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                    <div className={styles.photoContainer}>
                        <ImageStack images={images} onImageClick={handleImageClick} /> {/* Use ImageStack here */}
                    </div>
                </div>
            ))}
            <ImageModal 
                selectedImage={selectedImage} 
                isModalVisible={isModalVisible} 
                onClose={handleCloseModal} 
            />
        </div>
    );
};

export default PhotoGallery;
