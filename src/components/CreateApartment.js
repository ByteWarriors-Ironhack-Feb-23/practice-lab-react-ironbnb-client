import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateApartment(props) {

    const [title, setTitle] = useState("");
    const [pricePerDay, setPricePerDay] = useState("");
    const [img, setImg] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newApartment = {
            title: title,
            pricePerDay: pricePerDay,
            img: img,
        };

        axios.post(process.env.REACT_APP_APIURL + "/apartments", newApartment)
        .then((response) => {    
            setTitle("");
            setPricePerDay("");
            setImg("");
            
            navigate("/apartments")

        })
        .catch((e) => {
            console.log(e);
        });
     
    }



    return (
        <section className="AddApartment">
            <h1>Create Apartment</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </label>
                <label>
                    Price per Day: €
                    <input type="number" name="pricePerDay" value={pricePerDay} onChange={(e) => { setPricePerDay(e.target.value) }} />
                </label>
                <label>
                    Image:
                    <input type="text" name="img" value={img} onChange={(e) => { setImg(e.target.value) }} />
                </label>
            
                <button>Create</button>
            </form>
        </section>    
    )
}

export default CreateApartment;