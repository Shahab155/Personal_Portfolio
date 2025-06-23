import { LuFacebook, LuLinkedin, LuInstagram, LuTwitter } from "react-icons/lu";

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
              href="https://web.facebook.com/shahabuddin.bhutto.963"
              target="_blank"
            >
              <LuFacebook className="icon" />
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
            <a href="https://x.com/Shahabu94082969" target="_blank">
              <LuTwitter className="icon" />
            </a>
          </div>
          <p>Copyright &#169; Shahab Portfolio.com | All right reseved</p>
        </div>
      </footer>
    </>
  );
}
