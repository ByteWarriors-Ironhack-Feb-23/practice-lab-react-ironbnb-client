import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CreateApartment() {
  //set State
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imgURL, setImgURL] = useState("");
  const navigate = useNavigate();
  const postNewApartment = async (data) => {
    try {
      const res = await axios.post(
        "https://ironbnb-m3.herokuapp.com/apartments",
        data
      );
      console.log(res.statusText);
    } catch (e) {
      console.error(e);
    }
  };
  //handle Submission
  const handleSubmit = (element) => {
    element.preventDefault();

    const newApartement = {
      img: imgURL,
      pricePerDay: price,
      title: title,
    };
    postNewApartment(newApartement);
    navigate(`/apartments`);
  };
  return (
    <div>
      <h1>Create a New Apartment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          Price Per Day
          <input
            required
            type="Number"
            name="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </label>
        <label>
          Image URL
          <input
            required
            type="text"
            name="imgURL"
            value={imgURL}
            onChange={(e) => {
              setImgURL(e.target.value);
            }}
          />
        </label>
        <button formAction="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateApartment;
