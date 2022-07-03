import { Nav } from "./Nav";
import { Link } from "react-router-dom";
import { ImWhatsapp } from "react-icons/im";
import { FiTwitter, FiGithub } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";
function Home() {
  return (
    <>
      <Nav
        navA={<Link to="conhecimento">Conhecimento</Link>}
        navB={<Link to="projetos">Projetos</Link>}
      />
      <main className="main-block">
        <div className="name-bio">
                    <span className="inline">
              {" "}
              <h1 className="inline" id="name">
                Raphael Machado{" "}
              </h1>
              <h5 className="inline" id="dev">
                <i> Web Developer</i>
              </h5>
            </span>
            <p>
              Há um ano descobri o mundo da programação e desde então aprendo
              coisas novas a cada dia. Me sinto entusiasmado com as coisas
              incríveis que podemos criar com códigos.
            </p>{" "}
          

          <div className="flex-row">
            <div className="flex-column">
              <FiTwitter />
              <p>twitter</p>
            </div>
            <div className="flex-column">
              <FiGithub />
              <a href="https://github.com/rm0909">
                <p>Github</p>
              </a>
            </div>
            <div className="flex-column">
              <GrLinkedin />
              <p>Linkedin</p>
            </div>
            <div className="flex-column">
              <ImWhatsapp />
              <p>(21)9752-42151</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export { Home };