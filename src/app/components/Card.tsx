import Image from 'next/image'
import { cardPropTypes } from '../types/customTypes'


export const Card = (props:cardPropTypes) => {
  return (
    <div className='card'>
      <div>
       <Image 
       src={props.image}
       alt={props.title}
       width={300}
       height={300}
       />
      </div>
      <div className='description'>
         <h2>{props.title}</h2>
         <p>{props.description}</p>
         <div>
          {props.tags.map((item)=>{
            return (
              <div className='tags'>
                {item}
              </div>
            )
          })}
         </div>
      </div>
    </div>
  )
}
