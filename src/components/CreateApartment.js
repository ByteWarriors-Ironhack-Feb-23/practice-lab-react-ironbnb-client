import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function CreateApartment(){
    const [img, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [pricePerDay, setPricePerDay] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newApartment = {
            title: title,
            img: img,
            pricePerDay: pricePerDay,
        };
        //console.log to check 
        axios
        .post(`${process.env.REACT_APP_APIURL}/apartments` , newApartment)
        .then( response => {
            console.log("this is my response", response);
          
        })
          
        .catch( err => console.log("error creating new apartment", err))


        //clear the form
        setImage("");
        setTitle("");
        setPricePerDay("");
        navigate("/apartments"); //redirect to the route
        
    }
    


    return(
        <div>
             <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input 
            type="text" 
            name="title" 
            value={title} 
            onChange={(e) => { setTitle(e.target.value) }}
        />
        
  
        <label>Image: </label>
        <input 
            type="text" 
            name="img" 
            value={img} 
            onChange={(e) => { setImage(e.target.value) }}
        />
  
        <label>Price Per Day </label>
        <input 
            type="number" 
            name="pricePerDay" 
            value={pricePerDay} 
            onChange={(e) => { setPricePerDay(e.target.value) }}
        />
  
        
        <button type='submit'>Add Apartment</button>
      </form>
        </div>
    )
}

export default CreateApartment;