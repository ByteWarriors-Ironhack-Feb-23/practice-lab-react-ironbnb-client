import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ApartmentDetails(){
    const [apartment, setApartment] = useState([])   

    useEffect(() =>{
        axios.get(`${process.env.REACT_APP_APIURL}/apartments/${apartmentsId}`)
    })
}