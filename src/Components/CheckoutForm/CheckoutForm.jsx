import "./CheckoutForm.css"
import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name,
            phone,
            email
        };

        onConfirm(userData)
    }

    return (
        <div className="Container space">
            <form onSubmit={handleConfirm} method="post" className="Form">
                <label className="Label">
                    <b className="name">Nombre</b>
                    <input className="Input" required
                        type="text"
                        value={name}
                        onChange={({target}) => setName (target.value)}
                        />
                </label>
                <label className="Label">
                    <b className="name">Telefono</b>
                    <input
                        className="Input" required
                        type="tel"
                        value={phone}
                        onChange={({target}) => setPhone (target.value)}
                        />
                </label>
                <label className="Label">
                    <b className="name">Email</b>
                    <input
                        className="Input" required
                        type="email"
                        value={email}
                        onChange={({target}) => setEmail (target.value)}
                        />
                </label >
                <div className="Label">
                    <input className="compra" type="submit" value="Crear compra" />
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm