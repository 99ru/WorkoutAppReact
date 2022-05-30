import Toggle from "../toggle/Toggle";
import "./Nav.css";

const Nav = ({ selectGender, genderToggle }) => {
  return (
    <div className="nav-container">
      <Toggle selectGender={selectGender} genderToggle={genderToggle} />
      
      <section className="nav-categories">
        <article className="categories">
        <p>bodyparts</p>
        <button>Shoulders</button>
        <button>Back</button>
        <button>Chest</button>
        <button>Legs</button>
        <button>Glutes</button>
        <button>Beceps</button>
        <button>Triceps</button>
        <button>Core</button>
        </article>
      </section>
    </div>
  );
}

export default Nav;