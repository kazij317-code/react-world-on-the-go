
// --------------------------------Start: 33.1 ---------------------------------------

// import './App.css'
// import Countries from './components/Countries/Countries'

// function App() {
 
//   return (
//     <> 
//     {/* <h1>React World on the go...</h1> */}
//     {/* (3)      commit previous and Countries + enter*/}
//     <Countries></Countries>
//     </>
//   )
// }

// export default App


// --------------------------------End: 33.1 _(1) to (3) ---------------------------------------


// --------------------------------Start: 33.2 ---------------------------------------

import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'
// (1)
const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res =>res.json())

function App() {
 
  return (
    <> 
   
    {/* <Countries></Countries> */}
    {/* (2) st-commit previous and <Sus+enter */}
    <Suspense fallback={<p>Nadir vai loading.....</p>}>
      <Countries countriesPromise={countriesPromise}></Countries>
    </Suspense>

    {/* (2)en then in Countries.js*/}
    </>
  )
}

export default App


// --------------------------------End: 33.2 _(1) to (8) ---------------------------------------
