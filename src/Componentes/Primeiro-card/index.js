import '../Primeiro-card/primeiro-card.css'
import Perfil from '../../Assets/img/img-perfil.png'


const PrimeiroCard = () => {

    return (

        <section >

            <div className='conteiner__master'>

                <div className='fundo__card'>

                    <div className="frente__card"></div>
                </div>

                <div className='conteiner__img__descri'>


                    <div className='circulo__branco'>
                        <img className="img__log" src={Perfil} alt="Foto do perfil" />

                    </div>


                    <div className='topo__card__info'>
                        <p>Relatório</p>
                        <h2>Jeremias Robson</h2>
                    </div>


                    <div className="texto__rodape">
                        <h3 className='textos__rodape'>Dia</h3>
                        <h3 className='textos__rodape'>Semana</h3>
                        <h3 className='textos__rodape'>Mês</h3>
                    </div>


                </div>




            </div>



        </section>
    )
}


export default PrimeiroCard
