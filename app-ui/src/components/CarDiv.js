import React from 'react';
import '../App.css'
import carInfo from '../constants/car';

function CarDiv() {

    return(
        <>
            <p>Vehicle Selected</p>

            <div className='car-contain'>
                
                <div className="car-contain-child">
                    <br></br>
                    <p>Make: {carInfo.make}</p>
                    <p>Model: {carInfo.model}</p>
                    <p>Mpg: {carInfo.mpg}</p>
                </div>
    
               <div className="img-contain-child">
                    <img src={carInfo.url}></img> 
                </div>

            </div>
        </>
    );
}

export default CarDiv;