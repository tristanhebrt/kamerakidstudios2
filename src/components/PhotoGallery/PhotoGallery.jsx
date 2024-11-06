import React, { useState, useEffect } from 'react';
import ImageModal from './ImageModal';
import ImageStack from './ImageStack'; // Import your ImageStack component
import styles from './PhotoGallery.module.css';

// Import images directly
import photographyImages from '/assets/photos/photography/index.js';
import coverArtImages from '/assets/photos/coverArt/index.js';

const imageSources = {
    photography: photographyImages, // Assuming you have an array of image paths here
    coverArt: coverArtImages, // Same here
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
