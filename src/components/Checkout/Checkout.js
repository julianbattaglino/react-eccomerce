import "./Checkout.css";
import "react-toastify/dist/ReactToastify.css";
import { Button, Input, Stack, FormControl, FormLabel } from '@chakra-ui/react'
import { ToastContainer, toast, Zoom } from "react-toastify";

import { useContext } from 'react'
import { CartContext } from "../../context/CartContext";

import { collection, addDoc, getFirestore } from 'firebase/firestore'

const Checkout = () => {

    const { cart } = useContext(CartContext);

    const toastify = (text, time) => {
        toast.dark(text, {
            position: "top-center",
            autoClose: time,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Zoom,
            className: "toastify",
        });
    }

    console.log("Viendo el cart en Checkout component", cart);

    const addOrder = (e) => {
        const inputName = document.getElementById("inputName").value;
        const inputLastname = document.getElementById("inputLastname").value;
        const inputPhone = document.getElementById("inputPhone").value;
        const inputAddress = document.getElementById("inputAddress").value;
        const inputEmail = document.getElementById("inputEmail").value;

        
            if (
                inputName !== "" &&
                inputLastname !== "" &&
                inputEmail !== "" &&
                inputPhone !== "" &&
                inputAddress !== ""
            ) {
                e.preventDefault();
                let order = {};

                order.buyer = {
                    nombre: inputName,
                    apellido: inputLastname,
                    telefono: inputPhone,
                    dirección: inputAddress,
                    email: inputEmail,
                };


                order.date = new Date();

                order.products = cart.map((item) => {
                    const id = item.id;
                    const name = item.name;
                    const quantity = item.quantity;
                    const price = item.price * item.quantity;
                    const totalPrice = quantity * price;
                    return { id, name, quantity, price, totalPrice };
                });

                // Order details
                console.log("Orden generada", order);


                const db = getFirestore();
                const CollectionOrders = collection(db, "Orders");
                addDoc(CollectionOrders, order)
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
        } else {
            toastify("Todos los campos son obligatorios!!!", 2500);
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
                    <FormLabel>Campos obligatorios</FormLabel>
                </Stack>
                <Button onClick={(e) => { addOrder(e) }} className="order-btn">Finalizar compra</Button>
            </FormControl>
        </div>
    );
}

export default Checkout