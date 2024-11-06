// ImageModal.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './PhotoGallery.module.css';

const imageVariants = {
    initial: { scale: 1, opacity: 0 },
    animate: { scale: 1.5, opacity: 1, transition: { duration: 0.5 } },
    exit: { scale: 1, opacity: 0, transition: { duration: 0.5 } },
};

const ImageModal = ({ selectedImage, isModalVisible, onClose }) => (
    isModalVisible && (
        <motion.div 
            className={styles.modal} 
            onClick={onClose} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0, transition: { duration: 0.3 }}}
        >
            <motion.img 
                src={selectedImage} 
                alt="Enlarged view" 
                variants={imageVariants}
                initial="initial" 
                animate="animate" 
                exit="exit"
            />
        </motion.div>
    )
);

export default ImageModal;
