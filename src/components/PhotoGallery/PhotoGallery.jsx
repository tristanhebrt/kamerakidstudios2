import styles from './PhotoGallery.module.css';

function PhotoGallery() {
    // Generate image paths for photography images
    const photographyImages = Array.from({ length: 30 }, (_, index) => (
        `../assets/photos/photography/${index + 1}.webp`
    ));

    const coverArtImages = Array.from({ length: 8 }, (_, index) => (
        `../assets/photos/coverArt/${index + 1}.webp`
    ));

    const showcaseImages = Array.from({ length: 8 }, (_, index) => (
        `../assets/photos/showcase/${index + 1}.webp`
    ));

    return (
        <div className={styles.photoGalleryContainer}>
            <h1>Photo Gallery</h1>
            <h2>Showcase</h2>
            <div className={styles.photoContainer}>
                {showcaseImages.map((src, index) => (
                    <img src={src} alt={`Cover Art ${index + 1}`} key={index} />
                ))}
            </div>
            <h2>Photography</h2>
            <div className={styles.photoContainer}>
                {photographyImages.map((src, index) => (
                    <img src={src} alt={`Photography ${index + 1}`} key={index} />
                ))}
            </div>
            <h2>Cover Art</h2>
            <div className={styles.photoContainer}>
                {coverArtImages.map((src, index) => (
                    <img src={src} alt={`Cover Art ${index + 1}`} key={index} />
                ))}
            </div>
        </div>
    );
}

export default PhotoGallery;
