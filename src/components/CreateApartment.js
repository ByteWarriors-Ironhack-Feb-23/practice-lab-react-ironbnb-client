import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../App.css';

const CreateApartment = (props) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newApartment = {
      title: title,
      pricePerDay: pricePerDay,
      img: "https://via.placeholder.com/600x400?text=APARTMENT",
    };

    axios
      .post(process.env.REACT_APP_APIURL + '/apartments', newApartment)
      .then((response) => {
        props.callbackToLoadApartments();
        navigate("/apartments");
      })
      .catch((e) => {
        console.log("Error creating", e);
      });
  };

  return (
    <section>
      <h1>ADD YOUR HOUSE 🏠</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label className="white-text text-start">
            Title:
            <input
              className="form-control"
              type="text"
              name="title"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </label>
        </div>

        <div className="form-group mt-3">
          <label className="white-text text-start">
            Price Per Day {"in €"}:
            <input
              className="form-control"
              type="number"
              name="pricePerDay"
              value={pricePerDay}
              onChange={(event) => {
                setPricePerDay(event.target.value);
              }}
            />
          </label>
        </div>

        <button className="btn btn-success mt-5">ADD YOUR APARTMENT</button>
      </form>
    </section>
  );
};

export default CreateApartment;
