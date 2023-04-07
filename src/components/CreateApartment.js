import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const CreateApartment = (props) => {

  const navigate = useNavigate();

  const [newApartment, setNewApartment] = useState({
    title: '',
    pricePerDay: 0,
    img: ''
  })

  const changeHandler = (target) => {
    setNewApartment((prevState)=>{
      return {...prevState, [target.name] : target.value}
    })
  }

  const submitForm = (event) => {
    event.preventDefault();
    console.log(newApartment);
    axios
      .post(process.env.REACT_APP_APIURL + 'apartments', newApartment)
      .then((response) => {
        console.log(response);
        navigate("/apartments");
      })
      .catch((err) => console.error(err));
  }

  return (
    <section>
      <h1>CreateApartment</h1>
      <form onSubmit={(event) => {submitForm(event)}}>
        <label> Title:
          <input type="text" name="title" value={newApartment.title} onChange={(event)=>{changeHandler(event.target)}}/>
        </label>
        <label> Price per day:
          <input type="number" name="pricePerDay" value={newApartment.pricePerDay} onChange={(event)=>{changeHandler(event.target)}}/>
        </label>
        <label> Image:
          <input type="text" name="img" value={newApartment.img} onChange={(event)=>{changeHandler(event.target)}}/>
        </label>
        <button type="submit">Create</button>
      </form>
    </section>
  

  );
};

export default CreateApartment;
