import CardPizza from "./CardPizza"
import Header from "./Header"
import { useState, useEffect } from "react"

/************************************************************** */
/* ************************ COMPONENTE ************************ */
/************************************************************** */
const Home = () => {
    /* GUARDAR LA CONSULTA REALIZADA LA API PIZZAS */
    const [pizzas,setPizzas] = useState([])

    /* PARA CONSULTAR A LA API PIZZAS */
    const getPizzas = async () => {
        // URL DE LA API PIZZAS
        const url = "http://localhost:5000/api/pizzas"
        const response = await fetch(url)
        const dataPizzas = await response.json()
        setPizzas(dataPizzas)
    }

    /* useEffect, SE CONSULTA A LA API CUANDO EL COMPONENTE HOME SE MONTA EN App.jsx */
    useEffect(() => {
        getPizzas()
    }, [])

    return(
        <main className="home" >
            {/* DESDE EL COMPONENTE HOME SE MOSTRARÁN LOS COMPONENTES HEADER Y CARDPIZZA */}
            <Header />
            <section className="card-container" >
                {/* {console.log("Componente HOME montado", pizzas)} */}
                {/* SE RENDERIZA EL COMPONENTE CARDPIZZA */}
                {
                    pizzas.map((pizza) => <CardPizza key={pizza.id} producto = {pizza}/>)
                }
            </section>
        </main>
    )
}

export default Home