import './cardPequeno.css'

import { FiMoreHorizontal } from 'react-icons/fi'


const CardPequeno = (props) => {
    return (

        <div className='div-pai'>

            {props.multiplica.map((item) => {
                return (
                    <div className="background__cartao" style={{backgroundColor:item.background}} key={item.id}>

                        <div className='icone__work'  >
                            <img className='img__work' src={item.imgFundo} style={{marginBottom: item.bottom,marginLeft:item.left}} alt='Icone maleta de trabalho' />
                        </div>
                        <div className="frente__cartao">
                            <div className='work__time'>
                                <h2 className='titulo__work'>{item.Atividades}</h2>
                                < FiMoreHorizontal  className='pontinhos' size={24} color={'white'} />
                                <div className='tres__pontinhos__1024 '>< FiMoreHorizontal  size={31} color={'white'} /> </div>
                                <div className='tres__pontinhos '>< FiMoreHorizontal  size={36} color={'white'} /> </div>
                               

                                 

                            </div>

                            <div className='icon__Semanas'>
                                <h2 className='titulo__horas'>{item.Horas}</h2>
                                <span className='semana__anterior'>Semana Anterior - {item.semanaAnterior}</span>
                            </div>
                        </div>
                    </div>



                )
            })}


        </div>
    )

}


export default CardPequeno