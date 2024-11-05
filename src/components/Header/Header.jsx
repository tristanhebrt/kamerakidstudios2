import styles from './Header.module.css';
import { motion } from 'framer-motion';

function Header() {
    // Define the animation variants for the list items
    const listItemVariants = {
        hidden: { opacity: 0, x: '100vw' },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <nav className={styles.headerContainer}>
            <ol>
                {['home', 'gallery', 'contact'].map((item, index) => (
                    <motion.li
                        key={item} // Add unique key
                        initial="hidden"
                        animate="visible"
                        variants={listItemVariants}
                        transition={{ duration: 0.8, delay: index * 0.1 }} // Add delay for staggered effect
                    >
                        <motion.a 
                            href={`#${item}`} // Correctly link the anchor
                            whileHover={{ scale: 1.1 }}
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
