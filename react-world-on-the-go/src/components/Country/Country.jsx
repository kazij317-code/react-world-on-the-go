// // --------------------------------Start: 33.2 ---------------------------------------


// // (7)st rsc+enter
// import React from 'react';

// const Country = () => {
//     return (
//         <div>
//             {/* (8) <h3>Name:</h3>*/}
//             <h3>Name:</h3>
//         </div>
//     );
// };

// export default Country;

// // (7)en

// // --------------------------------End: 33.2_(1) to (8) ---------------------------------------

// // --------------------------------Start: 33.3 ---------------------------------------



// import React from 'react';
// // (3)Country = ({country})
// const Country = ({country}) => {
//     // (4)
//     // console.log(country);
//     // (5)
//     // console.log(country.name);
//     // (6)
//     // console.log(country.name.common);
//     // (8)
//     // console.log(country.flags.flags.png);
//     // (10)
//     // console.log(country.population.population);
    
    
//     return (
//         <div>
//             {/* (9) <img src={country.flags.flags.png} alt={country.flags.flags.alt} />*/}
//             <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
//             {/* (7) Name: {country.name.common}*/}
//             <h3>Name: {country.name.common}</h3>
//             {/* (11) */}
//             <p>Population: {country.population.population}</p>
//         </div>
//     );
// };

// export default Country;



// // --------------------------------End: 33.3_(1) to (12) ---------------------------------------

// // --------------------------------Start: 33.4 ---------------------------------------

// // (1) create in Country folder Country.css file

// // (3) then create Countries.css file in Countries folder
// import './Country.css';

// import React from 'react';

// const Country = ({country}) => {

//     // console.log(country);
   
//     // console.log(country.name);
   
//     // console.log(country.name.common);
  
//     // console.log(country.flags.flags.png);
 
//     // console.log(country.population.population);
//     // (6)
//     console.log(country.area.area);
//     // (9)
//     const handleVisited = () =>{
//         console.log('button clicked');
        
//     }
    
    
//     return (
//         // (2)  <div className='country'
//         <div className='country'>
            
//             <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
           
//             <h3>Name: {country.name.common}</h3>
          
//             <p>Population: {country.population.population}</p>
//             {/* (7) */}
//             <p>Area: {country.area.area}  {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
//             {/* (8) */}
//             <button onClick={handleVisited}>Not Visited</button>
//         </div>
//     );
// };

// export default Country;

// // --------------------------------End: 33.4_(1) to (9) ---------------------------------------
// // --------------------------------Start: 33.5 ---------------------------------------




// import './Country.css';

// import React, { useState } from 'react';

// const Country = ({country}) => {

//     // console.log(country);
   
//     // console.log(country.name);
   
//     // console.log(country.name.common);
  
//     // console.log(country.flags.flags.png);
 
//     // console.log(country.population.population);
  
//     // console.log(country.area.area);
//     // (1) useState+enter
//     const [visited, setVisited] = useState(false)
 
//     const handleVisited = () =>{
//         // console.log('button clicked');
//         // (2)commit console.log
//         // setVisited(true)
//         // (4)st- commit previous
//         // if(visited){
//         //     setVisited(false)
//         // }
//         // else{
//         //     setVisited(true)
//         // }
//          // (4)en then Country.css file
//          // or
//         //  setVisited(visited ? false : true);
//         //  or
//         setVisited(!visited)

//     }
   
    

    
    
//     return (
//     //   (6) replace className='country' with className={`country ${visited && 'country-visited'}`} 
//         <div className={`country ${visited && 'country-visited'}`}> 
//             {/* or ${visited ? 'country-visited' : 'country-not-visited'}*/} 
//             <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
           
//             <h3>Name: {country.name.common}</h3>
          
//             <p>Population: {country.population.population}</p>
          
//             <p>Area: {country.area.area}  {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
          
//             {/* <button onClick={handleVisited}>Not Visited</button> */}
//             {/* (3) st-commit previous and edit copy one */}
//             <button onClick={handleVisited}>
//                 {visited ? 'Visited' : 'Not Visited'}
//             </button>
//             {/* (3)-en */}
//         </div>
//     );
// };

// export default Country;

// // --------------------------------End: 33.5_(1) to (6) ---------------------------------------
// // --------------------------------Start: 33.6 ---------------------------------------

// import './Country.css';

// import React, { useState } from 'react';
// // (5)handleVisitedCountries}
// const Country = ({country, handleVisitedCountries}) => {
//     // (6)
//     console.log(handleVisitedCountries);
    

//     // console.log(country);
   
//     // console.log(country.name);
   
//     // console.log(country.name.common);
  
//     // console.log(country.flags.flags.png);
 
//     // console.log(country.population.population);
  
//     // console.log(country.area.area);
   
//     const [visited, setVisited] = useState(false)
 
//     const handleVisited = () =>{
//         // console.log('button clicked');
       
//         // setVisited(true)
        
//         // if(visited){
//         //     setVisited(false)
//         // }
//         // else{
//         //     setVisited(true)
//         // }
         
//          // or
//         //  setVisited(visited ? false : true);
//         //  or
//         setVisited(!visited)
//         // (7)
//         handleVisitedCountries(country)

//     }
   
//     return (
   
//         <div className={`country ${visited && 'country-visited'}`}> 
//             {/* or ${visited ? 'country-visited' : 'country-not-visited'}*/} 
//             <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
           
//             <h3>Name: {country.name.common}</h3>
          
//             <p>Population: {country.population.population}</p>
          
//             <p>Area: {country.area.area}  {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
          
//             {/* <button onClick={handleVisited}>Not Visited</button> */}
           
//             <button onClick={handleVisited}>
//                 {visited ? 'Visited' : 'Not Visited'}
//             </button>
           
//         </div>
//     );
// };

// export default Country;

// // --------------------------------End: 33.6_(1) to (6) ---------------------------------------
// --------------------------------Start: 33.8 ---------------------------------------

import './Country.css';

import React, { useState } from 'react';
// (5)handleVisitedFlag
const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
   
    console.log(handleVisitedCountries);
    

    // console.log(country);
   
    // console.log(country.name);
   
    // console.log(country.name.common);
  
    // console.log(country.flags.flags.png);
 
    // console.log(country.population.population);
  
    // console.log(country.area.area);
   
    const [visited, setVisited] = useState(false)
 
    const handleVisited = () =>{
        // console.log('button clicked');
       
        // setVisited(true)
        
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
         
         // or
        //  setVisited(visited ? false : true);
        //  or
        setVisited(!visited)
      
        handleVisitedCountries(country)

    }
   
    return (
   
        <div className={`country ${visited && 'country-visited'}`}> 
            {/* or ${visited ? 'country-visited' : 'country-not-visited'}*/} 
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
           
            <h3>Name: {country.name.common}</h3>
          
            <p>Population: {country.population.population}</p>
          
            <p>Area: {country.area.area}  {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
          
            {/* <button onClick={handleVisited}>Not Visited</button> */}
           
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
            {/* (1) button */}
            {/* (6) onClick={handleVisitedFlag}*/}
            {/* (9) onClick={handleVisitedFlag} replace with onClick={() =>{handleVisitedFlag(country?.flags?.flags?.png) }} */}
            <button onClick={() =>{handleVisitedFlag(country?.flags?.flags?.png) }}>Add Visited Flag</button>
           
        </div>
    );
};

export default Country;

// --------------------------------End: 33.8_(1) to (12) ---------------------------------------
