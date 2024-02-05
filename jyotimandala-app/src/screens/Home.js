import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>


      <div>
      <div className="card mt" style={{"width": "18rem", "maxHeight":"360px"}}>
  <img src="..." NaclassName="card-img-top" alt="..."/>
  <div NaclassName="card-body">
    <h5 NaclassName="card-title">Card title</h5>
    <p NaclassName="card-text">some important text</p>
    <div className='container w-100'>
        <select className='m-2 h-100 w-100 bg-success'>
            {Array.from(Array(6), (e,i)=>{
                return(
                    <option key={i+1} value={i+1}>{i+1}</option>
                )
            })}
        </select>
    </div>
    
  </div>
</div>
      </div>
      <div><Footer /></div>
    </div>
  )
}