import styles from './HomeLogo.module.css';
import { motion } from 'framer-motion';
import logo from '/src/assets/kamerakidstudios-logo.svg';
import { useState } from 'react';

function SVGLogo() {
    const [isSpinning, setIsSpinning] = useState(false);

    const handleClick = () => {
        // Start the spinning animation
        setIsSpinning(true);

        // Stop the spinning after the animation completes
        setTimeout(() => {
            setIsSpinning(false);
        }, 500); // Match this duration to the animation duration
    };

    return (
        <motion.img 
            src={logo} 
            alt="Kamera Kid Studios Logo" 
            width={'500rem'} 
            height={'auto'} 
            onClick={handleClick} // Handle the click
            animate={{ rotate: isSpinning ? 720 : 0 }} // Rotate based on state
            transition={{ duration: 0.5 }} // Duration for the rotation effect
        />
    );
}

export default SVGLogo;
