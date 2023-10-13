import styles from "./styles.module.css";

function Scroll() {
  return (
    <svg
      className={styles.iconScroll}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.bottom}
        d="M11.6667 21.6667L20 30L28.3333 21.6667"
        stroke="#B082DE"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={styles.top}
        d="M11.6667 10L20 18.3333L28.3333 10"
        stroke="#B082DE"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Scroll;
