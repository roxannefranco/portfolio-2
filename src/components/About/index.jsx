import styles from "./styles.module.css";
import Scroll from "../Scroll";

function About() {
  return (
    <div className={styles.welcomeText}>
      <h1>
        <span>Hi!</span> I’m Roxanne.
      </h1>
      <h2 className="introTitle">A Front-End Development graduate.</h2>
      <img
        className={styles.profilePic}
        src="images/profilepic.jpg"
        alt="profile picture of a girl sitting on a mountain"
      />
      <Scroll />
    </div>
  );
}

export default About;
