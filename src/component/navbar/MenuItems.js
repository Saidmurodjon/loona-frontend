import { useState, useEffect, useRef } from "react";

import Dropdown from "./Dropdown";
import "./Nav.css"
const MenuItems = ({ items, depthLevel,navfunc }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();
const [text,setText]=useState("")
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <p
            // type="button"
            aria-haspopup="menu"
            className="mt-2 ms-2 pointer"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => {setDropdown((prev) => !prev);navfunc(items.title)}}
          >
            <b>{items.title}</b>
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </p>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
            navfunc={navfunc}
          />
        </>
      ) : (
        <p className="m-2 mt-2 pointer" onClick={()=>navfunc(items.title)}><b>{items.title}</b></p>
      )}
    </li>
  );
};

export default MenuItems;
