import styles from "../app/globals.css";
import Board from "../../components/Board";

export default function Home() {
  return (
    <div className={styles.allProject}>
      <div className={styles.container}>
        <Board />
      </div>
    </div>
  )
}