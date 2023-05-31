

const MenuOption = ( {classMenuOption} ) => {

  return (
    <div className={classMenuOption}>
      <a className="menu-option" href="#">Home</a>
      <a className="menu-option" href="#">Catalog</a>
      <a className="menu-option" href="#">About us</a>
      <a className="menu-option" href="#">Contact</a>
    </div>
  );
}

export default MenuOption;