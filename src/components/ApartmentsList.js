import axios from "axios"
import { useEffect, useState } from "react"

function ApartmentList(){

    const [apartmentsArr, setApartmentsArr] = useState(null)

    useEffect(()=>{
        axios.get(process.env.REACT_APP_APIURL+ "/apartments")
        .then(response=>{
            setApartmentsArr(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const renderApartments = ()  => {

        return(
            <>
            <h1> apartments</h1>

            {apartmentsArr.map((apartment)=>{

                return(
                    <div>
                        <h2>{apartment.title}</h2>
                        <img src={apartment.im} alt="" />
                        <h3>Price per day: {apartment.pricePerDay}</h3>

                    </div>
                )

    
            })}

            </>

        )
    }

    return (
        <>
            {apartmentsArr ? renderApartments() : <h1> Loading </h1>}
        </>

    )
}

export default ApartmentList
