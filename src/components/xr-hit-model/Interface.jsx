import React from 'react'

function  Interface({setModel}) {
  return (
    <div id="overlay-content" >
        <div className='dom-container'>
            <div className='button-container'>
        <button className="buttons"  onClick={() => setModel("koreanwinggltf")}>Korean Wing</button>
        <button className="buttons" onClick={() => setModel("ramenemb")}>Ramen</button>
        <button className="buttons" onClick={() => setModel("pizzaWebCompressgltfEmb2")}>dish3</button>
            </div>
        </div>
    </div>
  )
}

export default  Interface