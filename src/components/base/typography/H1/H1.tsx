import React from 'react';
import styles from './H1.module.scss';

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

const H1 = ({
    fontStyle = 'bangers',
    color = '',
    children,
    style,
}:Props) => {
    const combinedStyles = `${styles[fontStyle]} xBig ${styles[color]}`;
    return ( 
        <h1 className={combinedStyles} style={style}>{children}</h1>
    );  
}
 
export default H1;