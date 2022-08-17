import {useParams , useNavigate,Link} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

import './pages.css'
export const Single = ()=>{
  const {name} = useParams()
  const [country , setCountry] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
  
    fetch(`https://restcountries.com/v3.1/name/`+ name )
    .then(res => res.json())
    .then(data => setCountry(data))
    .catch(err => console.log(err))
  },[name]);
  return (
    <>
      <button onClick={()=> navigate(-1)}>Back</button>
    {country.length &&  ( <div>
      {country.map((e)=> (
        <div key={e.name.common} className='row'>
          <img 
          width={560} height={401} 
          src={e.flags.svg} alt={e.name.official} 
          />
          <div> 
            <h1>{e.name.common}</h1>
            <div className='row' >
              <div>
                <p>Native Name: <span> {e.name.nativeName[Object.keys(e.name.nativeName)[0]].common}</span></p>
                <p>Populatin: <span>{e.population}</span></p>
                <p>Region <span> {e.region}</span></p>
                <p>Subregion: <span>{e.subregion} </span></p>
                <p>Capital: <span>{e.capital} </span></p>
              </div>
              <div>
                <p> Top Level Domain<span> {e.tld}</span></p>
                <p>Currencies : <span> {e.currencies[Object.keys(e.currencies)].name}</span></p>
                <p>Languages<span>{e.languages[Object.keys(e.languages)[0]]}</span></p>
              </div>

            </div>
            <div>
                {e?.borders?.length && (
                  <div>
                    Border Countries 
                    {e.borders.map((e)=>(
                      <button key={e}>
                        <Link to={'/country/'+ e}>{e}</Link>
                      </button>
                    ))}
                  </div>
                )}
              </div>
          </div>
        </div>
        
      )

      )}
    </div>)
   
    }
    </>
  )
}