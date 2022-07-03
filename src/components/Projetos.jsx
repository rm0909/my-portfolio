import { Nav } from "./Nav";
import { Link } from "react-router-dom";
import { SiGithub } from "react-icons/si";
import { projects as data } from "./repositórios/data";
import "./Projetos.css";

function Projetos() {
  return (
    <main>
      <Nav
        navA={<Link to="/">Home</Link>}
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
                    {<SiGithub />}
                  </a>
                </span>
                <p className="description">{repo.description}</p>
                <p className="description">{repo.buildWith}</p>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
export { Projetos };
