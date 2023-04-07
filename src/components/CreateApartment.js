import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateApartment() {

    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [pricePerDay, setPricePerDay] = useState(0);

    const navigate = useNavigate();


    const handleSubmit = (e) => {

        e.preventDefault();

        const newApartment = {
            title,
            img,
            pricePerDay
        };

        axios.post(process.env.REACT_APP_APIURL + "/apartments", newApartment)
            .then((response) => {

                setTitle("");
                setImg("");
                setPricePerDay(0);

                navigate("/apartments");
            })
            .catch((err) => {
                console.log(err);
            });


    };


    return (
        <>
            <h1>CreateApartment</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                </label>

                <label>
                    Price:
                    <input type="number" name="pricePerDay" min={0} max={1000} value={pricePerDay} onChange={(e) => {setPricePerDay(e.target.value)}}/>
                </label>
                
                <label>
                    Image URL:
                    <input type="text" name="imgURL" value={img} onChange={(e) => {setImg(e.target.value)}}/>
                </label>

                <button>Create</button>
            </form>

        </>
    ); 
}

export default CreateApartment;