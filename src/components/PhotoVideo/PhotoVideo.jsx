import styles from './PhotoVideo.module.css';
import { motion } from 'framer-motion';

import photoCamera from '/src/assets/photo-camera.svg';
import videoCamera from '/src/assets/video-camera.svg';

function PhotoVodeo() {
    return ( 
        <motion.div
        className={styles.logoContainer}
        initial={{ y: '100vw', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        >
        <div className={styles.photoVideoContainer}>
            <a href="#photos" className={styles.photoLink}>
                <img src={photoCamera} alt="Photo Camera" />
            </a>
            <a href="#videos" className={styles.videoLink}>
                <img src={videoCamera} alt="Video Camera" />
            </a>
        </div>        
        </motion.div>
        
    );
}

export default PhotoVodeo;
