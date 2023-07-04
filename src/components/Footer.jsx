import facebook from "./images/facebook.svg";
import twitter from "./images/twitter.svg";
import instagram from "./images/instagram.svg";

const Footer = () => {
    return (
        <div className="container-fluid text-light bg-body-secondary py-5">
            <div className="container">
                <div className="row footer">
                    <div className="col-md-2 text-dark">
                        <h6>Buscar Tienda</h6>    
                    </div>
                    <div className="col-md-2 text-dark">
                        <h6>Ayuda</h6>    
                    </div>
                    <div className="col-md-2 text-dark">
                        <h6>Acerca de CoreBuilds</h6>    
                    </div>
                    <div className="col-md-4  text-end">
                        <img className="me-1" src={twitter} alt={"Twitter"} width={32} />
                        <img className="me-1" src={facebook} alt={"Facebook"} width={32} />
                        <img className="me-1" src={instagram} alt={"Instagram"} width={32} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;