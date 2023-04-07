import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateApartment () {

   
  const url="https:ironbnb-m3.herokuapp.com";
  const navigate=useNavigate()


  const [img , setImg] = useState("");
  const [pricePerDay, setPricePerDay ] = useState("");
  const [title, setTitle] = useState("");





   const handleSubmit = (e) => {
     e.preventDefault();

     const newApartment = {
       img: img,
       title: title,
       pricePerDay: pricePerDay
     }
     
     axios
      .post(url + "/apartments", newApartment)
      .then( response => {
        setImg("");
        setPricePerDay("");
        setTitle("");
        navigate("/apartments")
      })
      .catch(e => {
        console.log("error getting apartment list from API", e)
      })

 

}

  return (
    <div>
    <h1>This is the create apartment page</h1>
     <form onSubmit={handleSubmit}>
    <label>Image:
      <input type="text" name="img" value={img} onChange={(e)=> {setImg(e.target.value)} }/>
    </label>
    <label>PricePerDay:
    <input type="number" name="pricePerDay" min={0} value={pricePerDay} onChange={(e)=> {setPricePerDay(e.target.value)} }/>
    </label>
    <label>Title:
    <input type="text" name="title" value={title} onChange={(e)=> {setTitle(e.target.value)} }/>
    </label>
    <button type="Submit">Submit</button>
   </form> 

   
    </div>
  )
}

export default CreateApartment;