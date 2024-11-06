import styles from './Header.module.css';
import { motion } from 'framer-motion';

function Header() {
    

    // Define the shake animation for the text
    const shakeAnimation = {
        whileHover: {
            x: ["0%", "-3%", "3%", "-2%", "2%", "0%"], // Shake left and right
            transition: { duration: 0.3, ease: "easeInOut" },
            scale: (1.1),
        }
    };

    return (
        <nav className={styles.headerContainer}>
            <ol>
                {['home', 'gallery', 'contact'].map((item, index) => (
                    <motion.li
                        key={item} // Add unique key
                        initial={{ y: '-100vw', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <motion.a 
                            href={`#${item}`} // Correctly link the anchor
                            whileHover={shakeAnimation.whileHover} // Apply shake animation on hover
                            transition={{ duration: 0.1 }}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)} {/* Capitalize first letter */}
                        </motion.a>
                    </motion.li>
                ))}
            </ol>
        </nav>
    );
}

export default Header;
