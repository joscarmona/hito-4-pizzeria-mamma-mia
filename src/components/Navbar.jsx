/************************************************************** */
/* ************************ COMPONENTE ************************ */
/************************************************************** */
const Navbar = () => {
    const total = 25000
    /* VARIABLE INDICA SI EL USUARIO SE ENCUENTRA LOGUEADO O NO */
    // TOKEN = FALSE, INDICA QUE USUARIO NO ESTÁ LOGUEADO Y SE DEBEN MOSTRAR LAS OPCIONES:
    // -- LOGIN Y REGISTER
    // TOKEN = TRUE, INDICA QUE USUARIO ESTÁ LOGUEADO Y SE DEBEN MOSTRAR LAS OPCIONES:
    // -- PROFILE Y LOGOUT
    const token = false
    return(
        <nav className="navbar">
            {/* NOMBRE DE LA PÁGINA WEB & LAS OPCIONES */}
            <article className="nombre-web-opciones">
                <p>Pizzería Mamma Mía!</p>
                <div className="opciones">
                    {/* UTF-8 EMOJI PIZZA: &#x1F355; */}
                    <a href="" className="link-opcion" >&#x1F355; Home</a>
                    {/* SE RENDERIZA LAS OPCIONES DE USUARIO SEGÚN CORRESPONDA */}
                    {token ? <UsarioLogueado /> : <UsarioNoLogueado />}
                </div>
            </article>
            {/* PRECIO TOTAL DE LOS PRODUCTOS AGREGADOS AL CARRO */}
            {/* UTF-8 EMOJI SHOPPING CART: &#128722; */}
            <p className="total-shopping-cart">&#128722; Total: ${total.toLocaleString('es-CL')}</p>
        </nav>
    )
}

export default Navbar

/* COMPONENTES UTILIZADOS PARA RENDERIZAR LAS OPCIONES DE USUARIO CUANDO SE ENCUENTRA LOGUEADO O NO */
//RENDERIZA OPCIONES DE USUARIO LOGUEADO
const UsarioLogueado = () =>{
    return(
        <>
            {/* UTF-8 EMOJI OPEN LOCK: &#128275; */}
            <a href="" className="link-opcion" >&#128275; Profile</a>
            {/* UTF-8 EMOJI LOCK: &#128274; */}
            <a href="" className="link-opcion" >&#128274; Logout</a>
        </>
    )
}

//RENDERIZA OPCIONES DE USUARIO NO LOGUEADO
const UsarioNoLogueado = () =>{
    return(
        <>
            {/* UTF-8 EMOJI LOCK WITH KEY: &#x1F355; */}
            <a href="" className="link-opcion" >&#128272; Login</a>
            {/* UTF-8 EMOJI LOCK WITH KEY: &#x1F355; */}
            <a href="" className="link-opcion" >&#128272; Register</a>
        </>
    )
}
/******************************************************************* */