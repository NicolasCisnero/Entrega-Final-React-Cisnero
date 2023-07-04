import LogoHeader from "../components/images/logoheader.png";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="Header container-fluid">
      <div className="row p-3">
        <div className="col-md-6">
          <img src={LogoHeader} alt={"Logo Header"} width={48} />
        </div>
        <div className="col-md-6 text-end">
          <button
            href="#"
            className="botonContactanos text-dark bg-body-secondary">
            Contactanos
          </button>{" "}
          |{" "}
          <button href="#" className="botonAyuda text-dark bg-body-secondary">
            Ayuda
          </button>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
