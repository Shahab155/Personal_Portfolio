import { LuGithub, LuLinkedin, LuInstagram,   } from "react-icons/lu";
import { FaSquareXTwitter } from "react-icons/fa6";


export default function Footer() {
  return (
    <>
      <footer>
        <div className="footerContainer">
          <div>
            <ul className="footerList">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>{" "}
              </li>
              <li>
                <a href="#contact">Contact</a>{" "}
              </li>
            </ul>
          </div>
          <div className="socialIcons">
            <a
              href="https://github.com/Shahab155"
              target="_blank"
            >
              <LuGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/shahab-ud-din-7547762b9/"
              target="_blank"
            >
              <LuLinkedin className="icon" />
            </a>
            <a href="https://www.instagram.com/bhuttoshahab15/" target="_blank">
              <LuInstagram className="icon" />
            </a>
            <a href="https://x.com/Shahab1544SK" target="_blank">
              < FaSquareXTwitter className="icon" />
            </a>
          </div>
          <p>Copyright &#169; Shahab Portfolio.com | All right reseved</p>
        </div>
      </footer>
    </>
  );
}
