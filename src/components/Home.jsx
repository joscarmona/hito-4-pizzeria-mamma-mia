import CardPizza from "./CardPizza"
import Header from "./Header"
import { pizzas } from "../pizzas"

/* ARREGLO DEL MENÚ DE LAS PIZZAS */
const menu = [
    {
        name: "Napolitana",
        price: 5950,
        ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
        img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
    },
    {
        name: "Española",
        price: 6950,
        ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
        img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
    },
    {
        name: "Pepperoni",
        price: 6950,
        ingredients: ["mozzarella", "pepperoni", "orégano"],
        img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
    }
]

/************************************************************** */
/* ************************ COMPONENTE ************************ */
/************************************************************** */
const Home = () => {
    return(
        <main className="home" >
            {/* DESDE EL COMPONENTE HOME SE MOSTRARÁN LOS COMPONENTES HEADER Y CARDPIZZA */}
            <Header />
            <section className="card-container" >
                {/* SE RENDERIZA EL COMPONENTE CARDPIZZA */}
                {
                    pizzas.map((pizza) => <CardPizza key={pizza.id} producto = {pizza}/>)
                }
            </section>
        </main>
    )
}

export default Home