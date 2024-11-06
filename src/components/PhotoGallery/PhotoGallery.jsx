import styles from './PhotoGallery.module.css';

function PhotoGallery() {
    return (
        <div className={styles.photoGalleryContainer}>
            <h1>Photo Gallery</h1>
            <h2>Photography</h2>
            <div className={styles.photoContainer}>
                <img src="https://placehold.co/150x150"/>
                <img src="https://placehold.co/150x150"/>
                <img src="https://placehold.co/150x150"/>
                <img src="https://placehold.co/150x150"/>
            </div>
            <h2>Cover Art</h2>
            <div className={styles.photoContainer}>
                <img src="https://placehold.co/150x150"/>
                <img src="https://placehold.co/150x150"/>
                <img src="https://placehold.co/150x150"/>
                <img src="https://placehold.co/150x150"/>
            </div>
        </div>
    )
}

export default PhotoGallery;