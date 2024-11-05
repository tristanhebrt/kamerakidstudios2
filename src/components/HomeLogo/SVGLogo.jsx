import styles from './HomeLogo.module.css';

import logo from '/src/assets/kamerakidstudios-logo.svg';

function SVGLogo() {
    return (
        <img src={logo} alt="Kamera Kid Studios Logo" width={1000} height={1000} />
    )
}

export default SVGLogo;