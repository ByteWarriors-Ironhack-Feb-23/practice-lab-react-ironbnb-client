import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateApartment() {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    axios.post(`${process.env.REACT_APP_APIURL}/apartments`,{title:title,img:image})
    .then(response => {
        console.log("Apartment created: " ,response)
        navigate("/apartmentlist")
    })
    .catch(error=>console.log(error))
  }
  return (
    <>
      <h1>Create an apartment!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label>
            Image:
            <input
            type="text"
            name="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
          <button>Create</button>
        </label>
      </form>
    </>
  );
}

export default CreateApartment;
