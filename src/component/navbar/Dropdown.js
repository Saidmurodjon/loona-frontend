import MenuItems from "./MenuItems";
import "./Nav.css"

const Dropdown = ({ submenus, dropdown, depthLevel ,navfunc}) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} navfunc={navfunc} />
      ))}
    </ul>
  );
};

export default Dropdown;
