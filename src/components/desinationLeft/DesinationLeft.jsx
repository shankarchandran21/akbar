import React from 'react'
import "./desinationLeft.css"
import { useEffect } from 'react'
import { useRef } from 'react'
function DesinationLeft({data}) {
   const myRef = useRef(null)
   useEffect(()=>{
      myRef.current.scrollTop=0
   },[data])
  return (
    <div  className='desinationleft-alignment'>
      <div ref={myRef} className='desinationleft__container'>
        {
      data.map(({id,category,name,img})=>{
        return<div className='desination__container-content' key={id}>
            <div className='desinationleft__container-image__container'>
               <img  src={img} alt="place" />
            </div>
            <div>
               <p>{name}</p>
            </div>
        </div>
      })

        }
      </div>
    </div>
  )
}

export default DesinationLeft