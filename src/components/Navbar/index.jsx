import styles from "./styles.module.css";
import { darkModeAtom } from "../../config/theme";
import { useAtom } from "jotai";
import { useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  const showMenu = () => {
    setOpen(true);
  };

  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header>
      <div className={styles.navbar}>
        <div className="center-content">
          <nav>
            <a className={styles.logo} href="#">
              <svg
                width="20"
                height="25"
                viewBox="0 0 20 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_27_57)">
                  <path
                    className={styles.dinamicVector}
                    d="M0 0H8.52713V3.57143H3.41085V12.6623H7.51938V16.3961H3.41085V25H0V0Z"
                    fill="black"
                  />
                  <path
                    d="M10.2326 0V3.57143C17.0586 2.92208 17.1318 11.9318 11.8605 12.6623H9.30232V16.3961H10.7752L15.814 25H19.9225L14.2636 15.7468C21.7067 12.3084 20.1513 1.38988 11.8605 0.12071C11.3438 0.0416183 10.801 0 10.2326 0Z"
                    fill="#B082DE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_27_57">
                    <rect width="20" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <div className={styles.menu}>
              <button className={styles.switchBtn} onClick={changeMode}>
                {darkMode ? (
                  <svg
                    className={styles.sun}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_78_153)">
                      <path
                        d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 1V3"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 21V23"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.21997 4.21997L5.63997 5.63997"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.36 18.3601L19.78 19.7801"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 12H3"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 12H23"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.21997 19.7801L5.63997 18.3601"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.36 5.63997L19.78 4.21997"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_78_153">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    className={styles.moon}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1583 17.4668C18.1127 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.748 21.1181 10.0795 20.7461C8.41104 20.3741 6.88302 19.5345 5.67425 18.3258C4.46548 17.117 3.62596 15.589 3.25393 13.9205C2.8819 12.252 2.99274 10.5121 3.57348 8.9043C4.15423 7.29651 5.18085 5.88737 6.53324 4.84175C7.88562 3.79614 9.50782 3.15731 11.21 3C10.2134 4.34827 9.73387 6.00945 9.85856 7.68141C9.98324 9.35338 10.7039 10.9251 11.8894 12.1106C13.075 13.2961 14.6466 14.0168 16.3186 14.1415C17.9906 14.2662 19.6518 13.7866 21 12.79V12.79Z"
                      stroke="#6A6A6A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
              <button className={styles.hamburguer} onClick={showMenu}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 15H26.25"
                    stroke="#B082DE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.75 7.5H26.25"
                    stroke="#B082DE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.75 22.5H26.25"
                    stroke="#B082DE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>

      {open ? (
        <div className={styles.backgroundDay}>
          <div className={styles.hiddenMenu}>
            <button className={styles.close} onClick={closeMenu}>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.0409 7.71637L8.04089 22.7164"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.04089 7.71637L23.0409 22.7164"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <ul>
              <li>
                <a href="#about" onClick={closeMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#projects" onClick={closeMenu}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeMenu}>
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
