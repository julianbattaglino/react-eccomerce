## Proyecto React.js - Marcelo Kopp - Xilografias E-commerce

 Repositorio del proyecto para el curso de "React.js".

 E-commerce Marcelo Kopp - Woodcut artist

---

#### DEPLOY

https://react-eccomerce-marcelo-kopp.vercel.app/

---

#### INICIO

Pagina de inicio --- > Productos renderizados utilizando firebase collections & docs 

Navbar con dropdown para filtrar los productos por  "category id" / filtrar por  "all" 

Detalle de producto, con renderizado condicional.  

Cart component con Renderizado condicional. 
- Boton para "empty cart"
- Boton para "delete product id"
- Boton "Finalizar compra" con ruta al componente checkout, para poder generar la orden (creando una nueva collection y un nuevo doc, con el metodo addDoc de firebase/firestore)

---

## ⚡ Libraries

- Chakra UI v2.2.3 (app ui)
- React Toastify V9.0.8 (alerts)
- Firebase V9.9.3 (render products from firebase/firestore collections & addDoc for customer orders)
- React-Router-Dom V6.3.0 (for dynamic routing in a web app)

---


![Navigation Gif - Proyecto](public/img/navigation-gif.gif "Navigation Gif")


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

