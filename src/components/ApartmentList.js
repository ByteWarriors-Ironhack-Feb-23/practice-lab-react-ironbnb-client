import { Link } from "react-router-dom";

function ApartmentsList(props) {
  return (
    <div>
      {props.apartmentsList.map((appt) => {
        // console.log("each appt....", appt);
        return (
          <div>
            <Link key={appt.id} to={"/apartments/" + appt._id}>
              {appt.title}
            </Link>
            ;
          </div>
        );
      })}
    </div>
  );
}

export default ApartmentsList;
