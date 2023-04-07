import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



function CreateApartments(){
    
    const [title, setTitle] = useState("")
    const [img, setImage] = useState("")
    const [pricePerDay, setPricePerDay] = useState("0")

    const navigate = useNavigate()


const handleSubmit = (e)=>{
    e.handleSubmit()
    const newApartment ={
        title,
        img,
        pricePerDay,
   }


axios.post(process.env.REACT_APP_APIURL + "/apartments", newApartment)
    .then(response =>{
        
        setTitle("")
        setImage("")
        setPricePerDay("0")

        navigate("/apartments")
    })

}

    return (
        <section>
            <h1>create</h1>
            <form  onSubmit ={handleSubmit}>
            <label>
                    Title:
                    <input type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                </label>

                <label>
                    price:
                    <input type="number" name="pricePerDay" min={0} max={2000} value={pricePerDay} onChange={(e) => {pricePerDay(e.target.value)}}/>
                </label>
                
                <label>
                    Image URL:
                    <input type="text" name="imgURL" value={img} onChange={(e) => {setImage(e.target.value)}}/>
                </label>

                <button>Create</button>
                </form>

        </section>
    )
    
    
}

export default CreateApartments