
import styles from './Gallery.module.css'
import PhotoGallery from '../components/PhotoGallery/PhotoGallery.jsx'

function Gallery() {
    return (
        <div className={styles.galleryContainer}>
            <PhotoGallery/>
        </div>
    )
}

export default Gallery;