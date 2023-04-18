import React from 'react'
import "./stories.css"
import { story } from '../../data'
import {Story} from "../../components"
function stories() {
  return (
    <div className='Storys__container'>
      <h2 className='storys__container-title'>Travel <span>Stories</span></h2>
      <div className='storys__container-content'>
        {story.map((data)=><Story key={data.id} {...data}/>)}
      </div>
    </div>
  )
}

export default stories