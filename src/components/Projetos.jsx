import { Nav } from "./Nav";
import { Link } from "react-router-dom";
import { SiGithub } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { projects as data } from "./repositórios/data";


function Projetos() {
  return (
    <main>
      <Nav
      navMain={<Link to="/form"><AiOutlineMail size="20px" style={{verticalAlign: "middle",margin: "1px"}}/>Email</Link>}
        navA={<Link to="/">Início</Link>}
        navB={<Link to="/conhecimento">Conhecimento</Link>}
      />
      <section className="project-wrapper">
        {data.map((repo) => {
          return (
            <div key={repo.name} className="projetos-box">
              <div className="projetos-img">
                {" "}
                <a href={repo.page} target="_blank">
                  <img src={repo.img} alt="repo img" />
                </a>
                <span className="inline-text">
                  <p>{repo.name}</p>{" "}
                  <a href={repo.githublink} target="_blank">
                    {<SiGithub size="1.2em" style={{verticalAlign: "middle"}}/>}
                  </a>
                </span>
                <p className="description">{repo.description}</p>
                <p className="description" id="madewith">{repo.buildWith}</p>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
export { Projetos };
