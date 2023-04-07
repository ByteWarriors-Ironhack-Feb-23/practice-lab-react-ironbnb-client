import { Link } from "react-router-dom";

function ApartmentsList(props) {
  return (
    <div class="container">
      <div class="row justify-content-md-center">
        {props.apartmentsList.map((appt) => {
          // console.log("each appt....", appt);
          return (
            <div>
              im
              <Link key={appt.id} to={"/apartments/" + appt._id}>
                {appt.title}
              </Link>
              ;
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ApartmentsList;
