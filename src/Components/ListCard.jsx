import React from 'react'
import { card_data } from '../Constant';
import { Card } from "./index.js";



const ListCard = () => {
  return (
    <div>
        {card_data.map((card)=>(
            <Card key={card.id} images={ card.img } title={card.title}/>
        ))}
    </div>
  )
}

export default ListCard