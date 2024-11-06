// src/assets/photos/photography/index.js
const coverArtImages = Array.from({ length: 8 }, (_, index) => 
    require(`./${index + 1}.webp`)
);

export default coverArtImages;
