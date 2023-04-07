import { Link } from "react-router-dom";

function ApartmentsList(props) {
  console.log("appt list from props", props.apartmentsList);
  return (
    <div>
      {props.apartmentsList.map((appt) => {
        return <Link key={appt.id}>{appt.title}</Link>;
      })}
    </div>
  );
}

export default ApartmentsList;
