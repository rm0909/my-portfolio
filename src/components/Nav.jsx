import {AiOutlineMail} from "react-icons/ai"
function Nav(props) {
  return (
    <nav>
       <span className="flex-row"><AiOutlineMail/> <h3 id="nav-email">raphael.mm.91@gmail.com</h3></span> 
      <div className="nav-buttons">
        <div>
          <h3>{props.navA}</h3>
        </div>
        <div>
          <h3>{props.navB}</h3>
        </div>
      </div>
    </nav>
  );
}
export { Nav };
