import styles from "./Line.module.css";
import Subdivision from "./Subdivision";


export default function Line(props) {
    return (
        <div className={styles.line}>
            <Subdivision black={props.black}/>
            <Subdivision black={!props.black}/>
            <Subdivision black={props.black}/>
            <Subdivision black={!props.black}/>
            <Subdivision black={props.black}/>
            <Subdivision black={!props.black}/>
            <Subdivision black={props.black}/>
            <Subdivision black={!props.black}/>
        </div>
    );
}