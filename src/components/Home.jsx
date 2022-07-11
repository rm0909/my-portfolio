import { Nav } from "./Nav";
import { Link } from "react-router-dom";
import { MdPhone } from "react-icons/md";
import { FiTwitter, FiGithub } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";

function Home() {
  return (
    <div>
      <Nav
        navMain={
          <Link to="/form">
            <AiOutlineMail
              size="20px"
              style={{ verticalAlign: "middle", margin: "1px" }}
            />
            Email
          </Link>
        }
        navA={<Link to="conhecimento">Conhecimento</Link>}
        navB={<Link to="projetos">Projetos</Link>}
      />
      <main className="home-main">
        <div className="center">
          <div className="name-paragraph-container">
            <h1 id="name">Raphael Machado </h1>
            <h5 id="dev">
              <i> Web Developer</i>
            </h5>
            <br />
            <br />
            <br />
            <blockquote>
              Há um ano descobri o mundo da programação e desde então aprendo
              coisas novas a cada dia. Me sinto entusiasmado com as coisas
              incríveis que podemos criar com códigos.
            </blockquote>{" "}
          </div>
        </div>

        <section>
          <div className="social-media-outter-div">
            <div id="social-media-row">
              <div className="social-media-box">
                <a href="#" target="_blank">
                  <FiTwitter />
                  <p className="icon-text">Twitter </p>
                </a>
              </div>
              <div className="social-media-box">
                <a href="https://github.com/rm0909" target="_blank">
                  {" "}
                  <FiGithub />
                  <p className="icon-text">Github</p>
                </a>
              </div>
              <div className="social-media-box">
                <a href="https://www.linkedin.com/in/raphael-machado-600512244/" target="_blank">
                  <GrLinkedin />
                  <p className="icon-text">Linkedin</p>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-column">
          <div className="contact-row">
            <MdPhone />
            <p>(21)9752-42151</p>
          </div>
          <div className="contact-row">
            <AiOutlineMail />
            <p>raphael.mm.91@gmail.com</p>
          </div>
        </section>
      </main>
    </div>
  );
}
export { Home };
