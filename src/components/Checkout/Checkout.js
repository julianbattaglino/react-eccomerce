import "./Checkout.css";
import {Button, Input, Stack, FormControl, FormLabel} from '@chakra-ui/react'

import { useContext } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { CartContext } from "../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";




const Checkout = () => {

    const { cart } = useContext(CartContext);

    const toastify = (text, time) => {
        toast(text, {
            position: "top-center",
            autoClose: time,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: "toastify",
        });
    }

    console.log("cart", cart);

    const addOrder = (e) => {
        const inputName = document.getElementById("inputName").value;
        const inputLastname = document.getElementById("inputLastname").value;
        const inputPhone = document.getElementById("inputPhone").value;
        const inputAddress = document.getElementById("inputAddress").value;
        const inputEmail = document.getElementById("inputEmail").value;
        const inputEmailValidate = document.getElementById("inputEmailValidate").value;

        if (inputEmail === inputEmailValidate) {
            if (
                inputName != "" &&
                inputLastname != "" &&
                inputEmail != "" &&
                inputEmailValidate != "" &&
                inputPhone != "" &&
                inputAddress != ""
            ) {
                e.preventDefault();
                let order = {};

                order.buyer = {
                    name: inputName,
                    surname: inputLastname,
                    phone: inputPhone,
                    address: inputAddress,
                    email: inputEmail,
                };

                console.log("order", order);

                order.date = new Date();

                order.products = cart.map((item) => {
                    const id = item.id;
                    const name = item.name;
                    const quantity = item.quantity;
                    const price = item.price * item.quantity;
                    const totalPrice = quantity * price;
                    return { id, name, quantity, price, totalPrice };
                });




                const db = getFirestore();
                const queryCollectionOrders = collection(db, "Orders");
                addDoc(queryCollectionOrders, order)
                    .then(toastify("Tu orden esta siendo procesada!", 2500))
                    .then(
                        (resp) =>
                            toastify(
                                `El códido de orden es: ${resp.id}`,
                                5500
                            ),
                    )
                    .catch((err) => console.log(err))
                    .finally(() => {
                        setTimeout(() => {
                            window.location.href = "/";
                        }, 8000);
                    });
            }
        } else {
            toastify("REVISE SUS DATOS", 2500);
        }
    }

    return (
        <div className="form-container">
            <h2 className="checkout-title">Generar orden</h2>
            <ToastContainer />
            <FormControl isRequired>
                <Stack spacing={3}>
                    <FormLabel>Nombre</FormLabel>
                    <Input
                        className="form-input"
                        variant='filled'
                        required
                        id="inputName"
                        type="text"
                        placeholder='Nombre'
                    />
                    <FormLabel>Apellido</FormLabel>
                    <Input className="form-input" variant='filled' id="inputLastname" type="text" placeholder='Apellido' />
                    <FormLabel>Telefono</FormLabel>
                    <Input className="form-input" variant='filled' id="inputPhone" type="number" placeholder='Telefono' />
                    <FormLabel>Dirección</FormLabel>
                    <Input className="form-input" variant='filled' id="inputAddress" type="text" placeholder='Dirección' />
                    <FormLabel>Email</FormLabel>
                    <Input className="form-input" variant='filled' id="inputEmail" type="email" placeholder='Email' />
                    <FormLabel>Validar Email</FormLabel>
                    <Input className="form-input" variant='filled' id="inputEmailValidate" type="email" placeholder='Validar Email' />
                    <FormLabel>Campos obligatorios</FormLabel>
                </Stack>
                <Button onClick={(e) => { addOrder(e) }} className="order-btn" colorScheme='teal'>Finalizar compra</Button>
            </FormControl>
        </div>
    );
}





export default Checkout