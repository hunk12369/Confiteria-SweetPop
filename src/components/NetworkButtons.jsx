import React from 'react'
import "./NetworkButtons.css"
const NetworkButtons = () => {
  return (
    <div className='botones'>
        <div className='titulo'>
        <p>Siguenos</p>
        <div className='linea5'></div>
        <br></br>
        </div>
        <button className='facebook' >
        <p>Facebook</p>
        </button>
        <br></br>
        <button className='ticktock' >
        <p>Tik-Tok</p>
        </button>
        <br></br>
        <button className='instagram' >
        <p>Instagram</p>
        </button>
        <br></br>
        <button className='twitter' >
        <p>Twitter</p>
        </button>
    </div>

  )
}

export default NetworkButtons
