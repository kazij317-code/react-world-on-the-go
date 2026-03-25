// --------------------------------Start: 33.1 ---------------------------------------

// // (1) make Countries.jsx  file in Countries folder in component folder. Click rsc + tab 

// import React from 'react';

// const Countries = () => {
//     return (
//         <div>
//             {/* (2) */}
//             <h1>In the countries</h1>
//         </div>
//     );
// };

// export default Countries;

// --------------------------------End: 33.1_(1) to (3) ---------------------------------------

// --------------------------------Start: 33.2 ---------------------------------------
// import React, { use } from 'react';
// // (3)Countries = ({countriesPromise})
// const Countries = ({countriesPromise}) => {
//     // (4)st-use+enter
//     // const countries = use(countriesPromise);
//     // (5)st commit previous
//     const countriesData = use(countriesPromise);
//     const countries = countriesData.countries;
//     // (5)-en
//     console.log(countries);
//     // (4)-en

//     return (
//         <div>
//            {/* (6)In the countries:{countries.length} then make Country.jsx file in Country folder in component folder */}
//             <h1>In the countries: {countries.length}</h1>
//         </div>
//     );
// };

// export default Countries;

// --------------------------------End: 33.2_(1) to (8) ---------------------------------------

// --------------------------------Start: 33.3 ---------------------------------------
// import React, { use } from 'react';
// import Country from '../Country/Country';


// const Countries = ({countriesPromise}) => {

//     const countriesData = use(countriesPromise);
//     const countries = countriesData.countries;

//     // console.log(countries);

//     return (
//         <div>

//             <h1>In the countries: {countries.length}</h1>
//             {/* (1) st-country + enter*/}
//             {
//                 // (2)<Country country={country}> then in Country.js file
//                 // (12)<Country key={country.cca3}
//                 countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
//             }
//             {/* (1)en */}

//         </div>
//     );
// };

// export default Countries;

// --------------------------------End: 33.3_(1) to (12) ---------------------------------------
// // --------------------------------Start: 33.4 ---------------------------------------
// import React, { use } from 'react';
// import Country from '../Country/Country';
// // (4)
// import './Countries.css';

// const Countries = ({ countriesPromise }) => {

//     const countriesData = use(countriesPromise);
//     const countries = countriesData.countries;

//     // console.log(countries);

//     return (

//         <div>

//             <h1>In the countries: {countries.length}</h1>
//             {/* (5)st- div created and <div className='countries'*/}
//             <div className='countries'>
//                 {

//                     countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
//                 }
//             </div>
//             {/* (5)-en then Country.jss file*/}
//         </div>
//     );
// };

// export default Countries;

// // --------------------------------End: 33.4_(1) to (9) ---------------------------------------
// // --------------------------------Start: 33.6 ---------------------------------------
// import React, { use, useState } from 'react';
// import Country from '../Country/Country';

// import './Countries.css';

// const Countries = ({ countriesPromise }) => {
//     // (2)useState+enter
//     const [visitedCountries, setVisitedCountries] = useState([]);
//     // (3)st
//     // (8)handleVisitedCountries = (country)
//     const handleVisitedCountries = (country) =>{
//         // (9)console.log('handel visited country clicked', country);
//         console.log('handel visited country clicked', country);

//     }
//     // (3)en

//     const countriesData = use(countriesPromise);
//     const countries = countriesData.countries;

//     // console.log(countries);

//     return (

//         <div>

//             <h1>In the countries: {countries.length}</h1>
//             {/* (1) <h3>Total Country Visited: </h3>*/}
//             <h3>Total Country Visited: </h3>

//             <div className='countries'>
//                 {
//                     // (4)handleVisitedCountries={handleVisitedCountries}
//                     countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
//                 }
//             </div>

//         </div>
//     );
// };

// export default Countries;

// // --------------------------------End: 33.6_(1) to (9) ---------------------------------------
// // --------------------------------Start: 33.7 ---------------------------------------
// import React, { use, useState } from 'react';
// import Country from '../Country/Country';

// import './Countries.css';

// const Countries = ({ countriesPromise }) => {

//     const [visitedCountries, setVisitedCountries] = useState([]);

//     const handleVisitedCountries = (country) => {

//         console.log('handel visited country clicked', country);
//         // (2)st
//         const newVisitedCountries = [...visitedCountries, country];
//         setVisitedCountries(newVisitedCountries)
//         // (2)en

//     }


//     const countriesData = use(countriesPromise);
//     const countries = countriesData.countries;

//     // console.log(countries);

//     return (

//         <div>

//             <h1>In the countries: {countries.length}</h1>
//             {/* (1) <h3>Total Country Visited: {visitedCountries.length} */}
//             <h3>Total Country Visited: {visitedCountries.length} </h3>
//             {/* (3) */}
//             <ol>
//                 {
//                     visitedCountries.map(country => <li key={country.cca3.cca3} >{country.name.common}</li>)
//                 }
//             </ol>


//             <div className='countries'>
//                 {

//                     countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
//                 }
//             </div>

//         </div>
//     );
// };

// export default Countries;

// // --------------------------------End: 33.7_(1) to (0) ---------------------------------------
// --------------------------------Start: 33.8 ---------------------------------------
import React, { use, useState } from 'react';
import Country from '../Country/Country';

import './Countries.css';

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    // (2)
    const[visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {

        console.log('handel visited country clicked', country);
        
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
        

    }
    // (3)st
    // (7)const handleVisitedFlag = (flag)
    const handleVisitedFlag = (flag) =>{
        // (8)console.log('flag need to be added', flag);
        // console.log('flag need to be added', flag);
        // (9)st-commit previouse and---
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags)
        // (9)en

        
    }
    // (3)en


    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    // console.log(countries);

    return (

        <div>

            <h1>In the countries: {countries.length}</h1>
            
            <h3>Total Country Visited: {visitedCountries.length} </h3>
            {/* (10) */}
            <h3>Total Flags Visited: {visitedFlags.length}</h3>
           
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3} >{country.name.common}</li>)
                }
            </ol>
            {/* (11)st */}
            <div className='visited-flags-container'>
                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>
            {/* (11)en then in Countries.css*/}


            <div className='countries'>
                {
                    // (4) handleVisitedFlag={handleVisitedFlag}
                    countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag={handleVisitedFlag}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;

// --------------------------------End: 33.8_(1) to (12) ---------------------------------------