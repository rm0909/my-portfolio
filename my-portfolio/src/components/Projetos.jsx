import { Nav } from "./Nav";
import { Link } from "react-router-dom";
import { SiGithub } from "react-icons/si";
import { projects as Repositories } from "./repositórios/Repositories";
import "./Projetos.css";

function Projetos() {
  return (
    <main>
      <Nav
        navA={<Link to="/">Home</Link>}
        navB={<Link to="/conhecimento">Conhecimento</Link>}
      />
      <section className="project-wrapper">
        {Repositories.map((repo) => {
          return (
            <div key={repo.name} className="projetos-box">
              <div className="projetos-img">
                {" "}
                <a href={repo.page} target="_blank">
                  <img src={repo.img} alt="repo img" />
                </a>
                <p>{repo.name}</p>
                <a href={repo.githublink} target="_blank">
                  {<SiGithub />}
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
export { Projetos };
