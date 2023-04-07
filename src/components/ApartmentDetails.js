import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ApartmentDetails(){
    
    const [apartmentDetails, setApartmentDetails] = useState(null)  

    const {apartmentsId} = useParams(); 

    useEffect(() =>{
        axios.get(`${process.env.REACT_APP_APIURL}/apartments/${apartmentsId}`)
        .then(response =>{
            setApartmentDetails(response.data)
        })
        .catch(e =>{
            console.log("error getting details form API" ,e);
        })
    },[apartmentsId])



    const renderDetails = () => {
        console.log(apartmentDetails);
        return (
            
            <div className="box">
                <h1>{apartmentDetails.title} </h1>
                Image: {apartmentDetails.img} <br />
                Price Per Day:{apartmentDetails.pricePerDay}<br />

            </div>
        );
    }
    return(
        <>
            {apartmentDetails
                ? renderDetails()
                : <p>loading....</p>
            }

            <Link to="/">Back to Home</Link>
        </>
    )
}

export default ApartmentDetails;