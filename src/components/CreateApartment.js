import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreateApartment(props) {
  const [pricePerDay, setPricePerDay] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newApartment = {
      title: title,
      pricePerDay: pricePerDay,
      img: "imgURL",
    };
    props.callbackToAdd(newApartment);
  };
  //   const navigate = useNavigate();

  return (
    <div>
      <h1>CreateApartment</h1>;
      <section className="CreateApartment">
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </label>

          <label>
            Price per day:
            <input
              type="number"
              min={0}
              max={1000}
              name="pricePerDay"
              value={pricePerDay}
              onChange={(e) => {
                setPricePerDay(e.target.value);
              }}
            />
          </label>

          {/* <label>
                    Image URL:
                    <input type="text" name='imgURL' value={imgURL} onChange={(e) => { setImgURL(e.target.value) }} />
                </label> */}

          <button>Create</button>
        </form>
      </section>
    </div>
  );
}

export default CreateApartment;
