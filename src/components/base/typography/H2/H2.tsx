import React from 'react'
import styles from './H2.module.scss';

interface Props {
    /**
    * Text to display
    */
    children?: React.ReactNode,
    /**
    * Size of the text
    */
    fontStyle?: 'bangers' | 'sketch';
    /**
    * Color to of the text
    */
    color?: 'primary' | 'secondary' | 'sand' | 'cold' | '';
    style?: React.CSSProperties;
}

const H2 = ({
    fontStyle = 'bangers',
    color = '',
    children,
    style,
}:Props) => {
    const combinedStyles = `${styles[fontStyle]} big ${styles[color]}`;
    return ( 
        <h2 className={combinedStyles} style={style}>{children}</h2>
    );  
}
 
export default H2;