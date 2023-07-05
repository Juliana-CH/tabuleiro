import styles from './Subdivision.module.css';

export default function Spaces(props) {
    return <div 
        style={ {backgroundColor: props.black ? "#000" : "#fff"} }
        className={styles.spaces}>

    </div>
}