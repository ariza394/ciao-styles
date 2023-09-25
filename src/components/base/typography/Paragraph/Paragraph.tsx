import './Paragraph.scss'

interface Props {
    /**
    * Text to display
    */
    children: React.ReactNode;
    /**
    * Style of the text
    */
    fontStyle?: 'normal' | 'sketch';
    /**
    * Size of the text
    */
    size?:  'micro' | 'normalSize' | 'large' | 'xLarge';
    /**
    * Weight of the text
    */
    bold?: 'light' | 'normalBold' | 'semiHard' | 'hard';
    /**
    * Color of the text
    */
    color?: 'primary' | 'secondary' | 'sand' | 'cold' | 'black';
}

const Paragraph = ({
    children,
    fontStyle = 'normal',
    size = 'normalSize',
    bold = 'normalBold',
    color = 'black',
}:Props) => {
    return ( 
        <p className={`${fontStyle} ${size} ${bold} ${color}`}>{children}</p>
    );  
}
 
export default Paragraph;