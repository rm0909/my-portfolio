import { Nav } from "./Nav";

import { Link } from "react-router-dom";
import {
  GoDeviceDesktop,
  GoServer,
  GoDatabase,
  GoGitBranch,
} from "react-icons/go";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaArrowDown,
  FaCode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiVisualstudiocode,
  SiGithub,
  SiInsomnia,
  SiHeroku,
} from "react-icons/si";
function Conhecimento() {
  return (
    <div>
      <Nav
        navA={<Link to="/">Home</Link>}
        navB={<Link to="/projetos">Projetos</Link>}
      />
      <main className="skills-main">
        <div>
          <section className="experience-block">
            <div className="experience-row">
              <div className="experience-box">
                <GoDeviceDesktop size="128px" />
                  <p>Páginas semânticas e responsivas para todos os tipos de dispositivos pensando na boa experiência do usuário</p>
              </div>
              <div className="experience-box">
                <FaCode size="128px" />
                <p>Aplicações usando Javascript ou React</p>
              </div>
              <div className="experience-box">
                <GoServer size="128px" />
                <p>Criação de rotas utilizando Node Express e autenticação de usuários com JWT</p>
              </div>
              <div className="experience-box">
                <GoDatabase size="128px" />
                <p>Databases Mongo DB</p>
              </div>
            </div>
          </section>
        </div>
        <section className="skills-container">
          <div className="skills-box">
            <h2>Frontend</h2>
            <div className="skills-column">
              <span className="skills-row">
                <FaHtml5 size="1.5em" />
                <h3>HTML</h3>
              </span>
              <span className="skills-row">
                <FaCss3 size="1.5em" />
                <h3>CSS</h3>
              </span>
              <span className="skills-row">
                <SiJavascript size="1.5em" />
                <h3>Javascript</h3>
              </span>
              <span className="skills-row">
                <FaReact size="1.5em" />
                <h3>React</h3>
              </span>
            </div>
          </div>
          <div className="skills-box">
            <h2>Backend</h2>
            <div className="skills-column">
              <span className="skills-row">
                <FaNodeJs size="1.5em" />
                <h3>Node</h3>
              </span>
              <span className="skills-row">
                <SiExpress size="1.5em" />
                <h3>Express</h3>
              </span>
              <span className="skills-row">
                <SiMongodb size="1.5em" />
                <h3>Mongo DB</h3>
              </span>
              <span className="skills-row">
                <SiJsonwebtokens size="1.5em" />
                <h3>J W T</h3>
              </span>
            </div>
          </div>
          <div className="skills-box">
            <h2>Ferramentas</h2>
            <div className="skills-column">
              <span className="skills-row">
                <SiVisualstudiocode size="1.5em" />
                <h3>VSCode</h3>
              </span>
              <span className="skills-row">
                <SiGithub size="1.3em" />
                <h3>Github Desktop</h3>
              </span>
              <span className="skills-row">
                <SiInsomnia size="1.5em" />
                <h3>Insomnia</h3>
              </span>
              <span className="skills-row">
                <SiHeroku size="1.5em" />
                <h3>Heroku</h3>
              </span>
            </div>
          </div>
        </section>
        {/* <span id="arrow-down">
          <FaArrowDown />
        </span> */}
      </main>
    </div>
  );
}
export { Conhecimento };
