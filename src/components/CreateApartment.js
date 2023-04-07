import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateApartment({ loadApartments }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState(null);
  const [img, setImg] = useState(null);
  const [pricePerDay, setPricePerDay] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_APIURL, {
        img: img,
        title: title,
        pricePerDay: pricePerDay,
      })
      .then((response) => {
        console.log(response);
        loadApartments();
        navigate("/apartments");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="enter the title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          name="img"
          placeholder="enter the img"
          onChange={(e) => {
            setImg(e.target.value);
          }}
        />
        <input
          type="number"
          name="pricePerDay"
          onChange={(e) => {
            setPricePerDay(e.target.value);
          }}
        />
        <button>Create Apartment</button>
      </form>
    </div>
  );
}
