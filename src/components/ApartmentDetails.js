import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"


function ApartmentDetails(){

    const [apartment, setApartment] = useState(null)
    const [apartmentId] = useParams


    useEffect(()=>{
        axios.get(process.env.REACT_APP_APIURL + `/apartments${apartmentId}`)
        .then((response )=>{
            setApartment(response.data)
        })
    })

    const renderApartment = ()=>{
        return(
            <>
            <h1> {apartment.title}</h1>
            <img src={apartment.img} alt={apartment.title} />
            <h2> Price: {apartment.pricePerDay}</h2>
            </>
        )
    }

    return (
        <>

            {apartment ? renderApartment() : <h2> loading...</h2>
            }
            <Link to={"/apartments"}> go back </Link>
        </>
    )
}

export default  ApartmentDetails