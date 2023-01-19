import './cardPequeno.css'
import Trabalho from '../../Assets/img/icon-work.svg'
import {FiMoreHorizontal} from 'react-icons/fi'

const CardPequeno = () =>{
    return(
        <div>
            <div className="background__cartao">

                <div className='icone__work'>
                    <img className='img__work' src={Trabalho} alt='Icone maleta de trabalho'/> 
                </div>
                <div className="frente__cartao">
                    <div className='work__time'>
                        <h2 className='titulo__work'>Trabalho</h2>
                        <FiMoreHorizontal size={22} color={'white'}/>
                        
                    </div>

                    <div className='icon__Semanas'>
                        <h2 className='titulo__horas'>32hrs</h2>
                        <span className='semana__anterior'>Semana Anterior - 36hrs</span>
                    </div>
                </div>
            </div>


        </div>
    )

}


export default CardPequeno