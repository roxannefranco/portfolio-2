import styles from "./styles.module.css";
import { projects as items } from "../../config/projects";
import Project from "../Project";
import classNames from "classnames";

function Projects() {
  return (
    <div>
      <div className={styles.projectsIntro}>
        <h2 className={styles.introTitle}>My Projects</h2>
        <p className="text">
          As a student at Noroff School of Technology and Digital Media, I was
          often challenged to create entire project simulations as assignments.
        </p>
      </div>

      <div className={classNames(styles.projectsContainer, "center-content")}>
        {items.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
