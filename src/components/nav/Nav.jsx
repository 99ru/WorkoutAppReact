import Toggle from "../toggle/Toggle";
import "./Nav.css";

const Nav = ({ selectGender, genderToggle }) => {
  return (
    <div className="nav-container">
      <Toggle selectGender={selectGender} genderToggle={genderToggle} />
    </div>
  );
}

export default Nav;