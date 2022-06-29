import { Nav } from "./Nav";
import { Link } from "react-router-dom";
import { FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
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
    <>
      <Nav
        navA={<Link to="/">Home</Link>}
        navB={<Link to="/projetos">Projetos</Link>}
      />

      <main className="skill-main-block">
        <h1>Conhecimento</h1>
        <div className="skill-box-container">
          <div className="skill-box">
            <h1>Frontend</h1>
            <div className="skills-column">
              <span className="icon-text">
                <FaHtml5 />
                <p>HTML</p>
              </span>
              <span className="icon-text">
                <FaCss3 />
                <p>CSS</p>
              </span>
              <span className="icon-text">
                <SiJavascript />
                <p>Javascript</p>
              </span>
              <span className="icon-text">
                <FaReact />
                <p>React</p>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <h1>Backend</h1>
            <div className="skills-column">
              <span className="icon-text">
                <FaNodeJs />
                <p>Node</p>
              </span>
              <span className="icon-text">
                <SiExpress />
                <p>Express</p>
              </span>
              <span className="icon-text">
                <SiMongodb />
                <p>MongoDB</p>
              </span>
              <span className="icon-text">
                <SiJsonwebtokens />
                <p>jwt</p>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <h1>Ferramentas</h1>
            <div className="skills-column">
              <span className="icon-text">
                <SiVisualstudiocode />
                <p>VSCode</p>
              </span>
              <span className="icon-text">
                <SiGithub />
                <p>Github Desktop</p>
              </span>
              <span className="icon-text">
                <SiInsomnia />
                <p>Insomnia</p>
              </span>
              <span className="icon-text">
                <SiHeroku />
                <p>Heroku</p>
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export { Conhecimento };
