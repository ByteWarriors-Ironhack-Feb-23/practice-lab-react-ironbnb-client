import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





function CreateApartment(props) {
    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const apartmentToBeCreated = {
            title: title,
        };

        axios
            .post(`${process.env.REACT_APP_APIURL}/apartments`, apartmentToBeCreated)
            .then((e) => {
                props.resetApartments();
                navigate('/apartments');
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={handleTitleChange} />
            </label>
            <button type="submit">Create Apartment</button>
        </form>
    );
}

export default CreateApartment;
