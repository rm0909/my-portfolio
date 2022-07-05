function Nav(props) {
  return (
    <nav>
      <span id="email">
      {props.navMain}
      </span>
      <div className="nav-tab">
        <div>
          <h3>{props.navA}</h3>
        </div>
        <div>
          <h3>{props.navB}</h3>
        </div>
      </div>{" "}
    </nav>
  );
}
export { Nav };
