import React from 'react'
import "./Catalogue.css"
const Catalogue = () => {
  return (
    <div className='fotos'>
        <div className='C1'> 
        <img src="src/assets/images/chocolates.jpg" alt="" />
        </div>
        <button> <p>Chocolates</p> </button>
        <div className='C2'> 
        <img src="src/assets/images/tortas.jpg" alt="" />
        </div>
        <button> <p>Tortas</p> </button>
        <div className='C3'> 
        <img src="src/assets/images/masitas.jpg" alt="" />
        </div>
        <button> <p>Masitas</p> </button>
    </div>

  )
}

export default Catalogue