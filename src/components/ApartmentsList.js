import axios from "axios";
import { useEffect, useState } from "react";

function ApartmentsList() {

    const [apartmentsArr, setApartmentsArr] = useState(null);

    useEffect(() => {
        axios.get(process.env.REACT_APP_APIURL + "/apartments")
            .then((response) => {
                setApartmentsArr(response.data);
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    const renderApartments = () => {


        return (
            <>

                {apartmentsArr.map((apartment) => {
                    return (
                        <div className="apartment" key={apartment.id}>
                            <h2>{apartment.title}</h2>
                            <img src={apartment.img} alt={apartment.title} />
                            <h3>Price per Day: {apartment.pricePerDay}$</h3>
                        </div>
                    );
                })}
            </>

        );
    };


    return (
        <>
            <h1>Apartments</h1>
            <div className="apartments-container">
                {apartmentsArr ? renderApartments() : <h1>Loading...</h1> }
            </div>
        </>
    );
}

export default ApartmentsList;