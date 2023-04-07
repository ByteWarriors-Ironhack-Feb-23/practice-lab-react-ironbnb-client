import { Link } from "react-router-dom";

export default function ApartmentList({ apartments }) {
  return (
    <div>
      {apartments.map((apartment) => {
        return (
          <section key={apartment._id} className="box">
            <img src={apartment.img} alt="" />
            <h1>{apartment.title} </h1>
            <Link to={`/apartments/${apartment._id}`}>More details</Link>
          </section>
        );
      })}
    </div>
  );
}
