import React, { useState, useEffect } from 'react';
import ImageModal from './ImageModal';
import styles from './PhotoGallery.module.css';

const imageSources = {
    // showcase: Array.from({ length: 8 }, (_, index) => `../assets/photos/showcase/${index + 1}.webp`),
    photography: Array.from({ length: 30 }, (_, index) => `../assets/photos/photography/${index + 1}.webp`),
    coverArt: Array.from({ length: 8 }, (_, index) => `../assets/photos/coverArt/${index + 1}.webp`),
};

const PhotoGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState('');

    const handleImageClick = (src) => {
        setSelectedImage(src);
        setIsModalVisible(true);
        setBackgroundImage(src); // Set the background image
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
        setSelectedImage(null);
        setBackgroundImage(''); // Reset background image
    };

    useEffect(() => {
        if (isModalVisible) {
            // Disable scrolling
            document.body.classList.add(styles.noScroll);
        } else {
            // Enable scrolling
            document.body.classList.remove(styles.noScroll);
        }

        // Cleanup function to ensure scrolling is enabled when the component unmounts
        return () => {
            document.body.classList.remove(styles.noScroll);
        };
    }, [isModalVisible]);

    return (
        <div 
            className={styles.photoGalleryContainer} 
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {Object.entries(imageSources).map(([category, images]) => (
                <div key={category}>
                    <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                    <div className={styles.photoContainer}>
                        {images.map((src, index) => (
                            <img 
                                src={src} 
                                alt={`${category.charAt(0).toUpperCase() + category.slice(1)} Image ${index + 1}`} 
                                key={index} 
                                loading="lazy" 
                                onError={(e) => { e.target.src = '../assets/placeholder.webp'; }} 
                                onClick={() => handleImageClick(src)} 
                            />
                        ))}
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
