import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styles from './PhotoGallery.module.css';

const ImageStack = ({ images, onImageClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null); // Ref to store the interval ID
    let startX = 0;
    let endX = 0;

    // Function to handle swiping
    const handleSwipe = (direction) => {
        if (direction === 'left') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        } else if (direction === 'right') {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        }
        resetAutoSwipe(); // Reset the auto-swipe timer on manual swipe
    };

    // Reset the auto-swipe interval
    const resetAutoSwipe = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current); // Clear existing interval
        }
        intervalRef.current = setInterval(() => {
            handleSwipe('left'); // Change this to 'right' if you want to swipe in the opposite direction
        }, 3000); // 3000 milliseconds = 3 seconds
    };

    // Handle touch start
    const handleTouchStart = (e) => {
        startX = e.changedTouches[0].clientX;
    };

    // Handle touch end
    const handleTouchEnd = (e) => {
        endX = e.changedTouches[0].clientX;
        const distance = endX - startX;
        if (Math.abs(distance) > 50) {
            handleSwipe(distance < 0 ? 'left' : 'right');
        }
    };

    // Handle mouse down
    const handleMouseDown = (e) => {
        startX = e.clientX; // Capture mouse start position
        document.addEventListener('mousemove', handleMouseMove); // Add mouse move listener
        document.addEventListener('mouseup', handleMouseUp); // Add mouse up listener
    };

    // Handle mouse move
    const handleMouseMove = (e) => {
        endX = e.clientX; // Capture mouse end position
    };

    // Handle mouse up
    const handleMouseUp = () => {
        const distance = endX - startX;
        if (Math.abs(distance) > 50) {
            handleSwipe(distance < 0 ? 'left' : 'right');
        }
        document.removeEventListener('mousemove', handleMouseMove); // Clean up mouse move listener
        document.removeEventListener('mouseup', handleMouseUp); // Clean up mouse up listener
    };

    // Set the auto-swipe interval on mount and reset it whenever currentIndex changes
    useEffect(() => {
        resetAutoSwipe(); // Start the auto-swipe timer on mount

        // Clear interval on component unmount
        return () => clearInterval(intervalRef.current);
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div
            className={styles.image_stack}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown} // Mouse down event for desktop swiping
            style={{ touchAction: 'pan-y' }} // Allow vertical scrolling while detecting horizontal swipes
        >
            {images.length === 0 && <div>No images to display</div>}
            {images.map((image, index) => {
                const isCurrent = index === currentIndex;
                const isNext = index === (currentIndex + 1) % images.length; // Next image in the stack
                const isPrev = index === (currentIndex - 1 + images.length) % images.length; // Previous image in the stack

                return (
                    <motion.div
                        key={index}
                        className={styles.image_card}
                        style={{
                            top: `${(index - currentIndex) * 15}px`,
                            zIndex: isCurrent ? 3 : isNext || isPrev ? 2 : 1, // Set zIndex based on current, next, and previous
                            x: isCurrent ? 0 : isNext ? '100%' : isPrev ? '-100%' : 0, // Translate images based on their position
                        }}
                        initial={{ x: isCurrent ? 0 : isNext ? '100%' : isPrev ? '-100%' : 0, scale: 1 }}
                        animate={{
                            x: isCurrent ? 0 : isNext ? '100%' : isPrev ? '-100%' : 0,
                            scale: isCurrent ? 1.05 : 0.8,
                            opacity: isCurrent ? 1 : 0, // Make background images fully transparent
                        }}
                        transition={{ duration: 0.2 }}
                        onClick={() => onImageClick(image)}
                        role="button"
                        tabIndex={0}
                        onKeyPress={(e) => { if (e.key === 'Enter') onImageClick(image); }} // Handle keyboard event
                    >
                        <img src={image} alt={`Image ${index + 1}`} draggable="false" /> {/* Prevent dragging */}
                    </motion.div>
                );
            })}
        </div>
    );
};

// Define prop types for the component
ImageStack.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    onImageClick: PropTypes.func.isRequired,
};

export default ImageStack;
