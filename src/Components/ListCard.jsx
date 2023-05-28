import React from 'react'
import { card_data } from '../Constant';
import { Card } from "./index.js";



const ListCard = () => {
  return (
    <div className='row'>
        {card_data.map((card)=>(
          <div className='col-md-3' key={card.id}> 
            <Card images={ card.img } title={card.title}/>
          </div>
        ))}
    </div>
  )
}

export default ListCard