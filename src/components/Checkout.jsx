import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const {cart, clear, sumTotal} = useContext(CartContext);

    const generarOrden = () => {
        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }

        const buyer = {name:nombre, phone:telefono, email:email}
        const items = cart.map(item => ({id:item.id, title:item.Nombre, price:item.Precio, cantidad:item.cantidad}));
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth()+1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = sumTotal();
        const order = {buyer:buyer, items:items, date:date, total:total};

        // Inserta un Documento en Firestore con la orden
        const db = getFirestore();
        const OrdersCollection = collection(db, "orders");
        addDoc(OrdersCollection, order).then(resultado => {
            setOrderId(resultado.id);
            clear();
        })
        .catch(resultado => {
            console.log("Error! No se pudo completar la compra!");
        });
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre y Apellido</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-light" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-5">
                    <table className="table">
                        <tbody>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.Imagen} alt={item.Nombre} width={80} /></td>
                                        <td className="align-middle">{item.Nombre}</td>
                                        <td className="align-middle">{item.cantidad} x ${item.Precio}</td>
                                        <td className="align-middle text-center">${item.cantidad * item.Precio}</td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={3} className="align-middle text-end">Total a Pagar</td>
                                <td className="align-middle text-center">${sumTotal()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <Navigate to={"/thankyou/" + orderId} /> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;