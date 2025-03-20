import React from 'react'
import './Title.css'

function Title({subTitle, title}) {
  return (
    <div className='title'>
      <h3>{title}</h3>
      <h2>{subTitle}</h2>
    </div>
  )
}

export default Title
