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
            <h2>Frontend</h2>
            <div className="skills-column">
              <span className="icon-text">
                <FaHtml5 />
                <h3>HTML</h3>
              </span>
              <span className="icon-text">
                <FaCss3 />
                <h3>CSS</h3>
              </span>
              <span className="icon-text">
                <SiJavascript />
                <h3>Javascript</h3>
              </span>
              <span className="icon-text">
                <FaReact />
                <h3>React</h3>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <h2>Backend</h2>
            <div className="skills-column">
              <span className="icon-text">
                <FaNodeJs />
                <h3>Node</h3>
              </span>
              <span className="icon-text">
                <SiExpress />
                <h3>Express</h3>
              </span>
              <span className="icon-text">
                <SiMongodb />
                <h3>MongoDB</h3>
              </span>
              <span className="icon-text">
                <SiJsonwebtokens />
                <h3>jwt</h3>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <h2>Ferramentas</h2>
            <div className="skills-column">
              <span className="icon-text">
                <SiVisualstudiocode />
                <h3>VSCode</h3>
              </span>
              <span className="icon-text">
                <SiGithub />
                <h3>Github Desktop</h3>
              </span>
              <span className="icon-text">
                <SiInsomnia />
                <h3>Insomnia</h3>
              </span>
              <span className="icon-text">
                <SiHeroku />
                <h3>Heroku</h3>
              </span>
            </div>
          </div>
        </div>
       
      </main>
    </>
  );
}
export { Conhecimento };
