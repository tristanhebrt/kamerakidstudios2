import styles from './PhotoVideo.module.css';

import photoCamera from '/src/assets/photo-camera.svg';
import videoCamera from '/src/assets/video-camera.svg';

function PhotoVodeo() {
    return ( 
        <div className={styles.photoVideoContainer}>
            <a href="#photos" className={styles.photoLink}>
                <img src={photoCamera} alt="Photo Camera" />
            </a>
            <a href="#videos" className={styles.videoLink}>
                <img src={videoCamera} alt="Video Camera" />
            </a>
        </div>
    );
}

export default PhotoVodeo;
