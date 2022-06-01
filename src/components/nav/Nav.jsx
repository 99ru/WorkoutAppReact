import Toggle from "../buttons/Toggle";
import FilteredWorkout from "../buttons/FilteredWorkout";
import "./Nav.css";

const Nav = ({ selectGender, genderToggle, selectFilter }) => {
  return (
    <div className="nav-container">
      <Toggle selectGender={selectGender} genderToggle={genderToggle} />
      <section className="nav-categories">
        <article className="categories">
          <p>Choose exercises by muscle group</p>
          <FilteredWorkout selectFilter={selectFilter} />
        </article>
      </section>
    </div>
  );
};

export default Nav;
