import React, { useState } from 'react'

import Quotes from './Quotes'

function App () {

const [color, setColor] = useState('')

const changeColor = () => {
  const colors = ['red', 'green', 'purple', 'magenta', 'aqua', 'antiqueWhite', 
'bisque', 'blueviolet', 'brown', 'coral', 'cornflowerblue' ]

const index = Math.floor(Math.random() * colors.length)

  setColor(colors[index])
}

  return (
    <>
      <div className='wrapper' style={{backgroundColor: color}}>
        <Quotes changeColor={changeColor} />
      </div>
    </>
  )
}


export default App
