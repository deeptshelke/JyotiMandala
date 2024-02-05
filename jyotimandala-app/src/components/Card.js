import React from 'react'

export default function Card  () {
  return (
    <div>
      <div>
      <div className="card mt" style={{"width": "18rem", "maxHeight":"360px"}}>
  <img src="https://diybaazar.com/publicuploads/seller/products/mandala-art-colourful-2058-2877-1_diybaazar62b85ce049a93.jpg" NaclassName="card-img-top" alt="..."/>
  <div NaclassName="card-body">
    <h5 NaclassName="card-title">Card title</h5>
    <p NaclassName="card-text">some important text</p>
    <div className='container w-100'>
        <select className='m-2 h-100  bg-success rounded'>
            {Array.from(Array(6), (e,i)=>{
                return(
                    <option key={i+1} value={i+1}>{i+1}</option>
                )
            })}
        </select>
        <select className='m-2 h-100  bg-success rounded'>
             <option value="half">Half</option>
             <option value="full">Full</option>
        </select>

        <div className='d-inline h-100 fs=5'>Total Price</div>
    </div>
    
  </div>
</div>
      </div>
    </div>
  )
}


