import {AiOutlineMail} from "react-icons/ai"
function Nav(props) {
  return (
    <nav>
       <span id="email"><AiOutlineMail/> <h3 >raphael.mm.91@gmail.com</h3></span> 
      <div className="nav-tab">
        <div >
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
