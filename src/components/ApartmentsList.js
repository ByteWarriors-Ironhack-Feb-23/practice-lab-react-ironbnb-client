import { Link } from "react-router-dom";

function ApartmentsList(props) {


    return (
        <div>
            <h1>List of apartments</h1>
            {props.apartments.map((e) => {
                return (
                    <>
                        <div>
                            <h2>{e.title}</h2>
                            <Link to={`/apartments/${e._id}`}>More details</Link>
                        </div>
                    </>

                )

            })}

        </div>
    )


}


export default ApartmentsList;