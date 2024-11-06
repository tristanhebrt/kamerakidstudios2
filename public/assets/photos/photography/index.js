// public/assets/photos/photography/index.js

// Dynamically import all .webp images from the photography directory
const photographyImages = import.meta.glob('./*.webp', { eager: true });

// Convert the imported images into an array
const imagesArray = Object.values(photographyImages).map(module => module.default);

export default imagesArray;
