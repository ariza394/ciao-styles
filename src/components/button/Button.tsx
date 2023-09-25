import React from 'react';
import styles from './Button.module.scss';

interface Props {
    /**
    * Text of the button
    */
    label: string;
    /**
    * Color styles of the button
    */
    type?: 'btn-primary' | 'btn-secondary' | 'btn-success' | 'btn-danger' | 'btn-warning' | 'btn-info';
    /**
    * Task of the button
    */
    buttonType?: 'submit' | 'button';
    /**
    * All width of the button
    */
    full?: boolean;
    /**
    * Style outline
    */
    outline?: boolean;
    onClick?: () => void;
}

const Button = ({
    label,
    type = 'btn-primary',
    buttonType = 'button',
    full = false,
    outline = false,
    onClick,
    ...props // Resto de las props
}:Props) => {
    const containerStyle = full ? { width: '100%', display: 'flex' } : {};
    return (
        <div style={containerStyle}>
            <button
                className={`${styles[type]} 
                    ${full ? styles.full : styles['btn-padding']} 
                    ${outline ? styles.outline : ''} 
                    ${styles.main} ${styles.normalSize} 
                    ${styles.normal}`} 
                    type={buttonType} 
                    {...props}
            >
                {label}
            </button>
        </div>
     );
}
 
export default Button;