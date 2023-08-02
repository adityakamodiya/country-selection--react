import React, {  useState } from 'react'

function Home(){
    const [city , setcity] = useState([])

    const countries = [
        {
            country:"india",
            code:"In",
            states:['delhi','rajasthan','mumbai']
        },
        {
            country:"China",
            code:"Ch",
            states:['wuhan','beijing','hunan']
        },
        {
            country:"Sri lanka",
            code:"Sl",
            states:['colombo','candy','jaffna']
        }
    ]


    function showstate()
    {
        let getcode = document.querySelector('#country').value;
        let newcode = countries.filter((cntry) => {
                        return cntry.country===getcode 
                        
                    })
        setcity(newcode[0].states);
    }

    return(
        <div className='box'>
            <select id='country' onChange={showstate}>
                <option selected disabled>Select Country</option>
                {
                    countries.map(ctr => {
                        return <option key={ctr.code}>{ctr.country}</option>
                    })
                }
            </select>
            {console.log(city)}
            <select>
            {city.map((cty,index) => {
                        return <option key={index}>{cty}</option>
            })}
            </select>
        </div>
    )

}
export default Home
