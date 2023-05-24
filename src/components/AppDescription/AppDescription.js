import droneImg from '../../assets/img/agras-t30-navbar.webp';

const AppDescription = () => {
  return (
    <div >
      <div className="drone-img-container">
        <img className="navbar-drone-img" src={droneImg} alt="" />
      </div>
    </div>
  );
}

export default AppDescription;