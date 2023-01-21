import CardPequeno from "../../Componentes/Card-pequeno"
import PrimeiroCard from "../../Componentes/Primeiro-card"
import lista from "../../Dados/Dados-card-mini"
import './home.css'
const Home = () => {
    return (

        <main className="div__pai">
            <PrimeiroCard/>
            <CardPequeno multiplica={lista}/>
        
           
        </main>

    )
}


export default Home