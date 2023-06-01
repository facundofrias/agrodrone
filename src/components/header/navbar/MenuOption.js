import { Link } from "react-router-dom";


const MenuOption = ( {classMenuOption} ) => {

  return (
    <div className={classMenuOption}>
      <Link className="menu-option" to={"/"}>Home</Link>
      <Link className="menu-option" to={"/catalog"}>Catalog</Link>
      <Link className="menu-option" to={"/about_us"}>About us</Link>
      <Link className="menu-option" to={"contact"}>Contact</Link>
    </div>
  );
}

export default MenuOption;