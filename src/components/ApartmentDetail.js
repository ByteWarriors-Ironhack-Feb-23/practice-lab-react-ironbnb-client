import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ApartmentDetail() {
  const baseURL = "https://ironbnb-m3.herokuapp.com";

  const { apartmentId } = useParams();
  const [apartmentDetail, setApartmentDetail] = useState(null);

  const fetchApartmentDetail = async () => {
    try {
      const res = await axios.get(baseURL + "/apartments/" + apartmentId);
      setApartmentDetail(res.data);
      console.log("res.data......", res.data);
    } catch (e) {
      console.error(e);
    }
  };

  const displayApartmentDetail = () => {
    return (
      <div>
        <h2>{apartmentDetail.title}</h2>
        {apartmentDetail.img ? (
          <img src={apartmentDetail.img} alt={apartmentDetail.title}></img>
        ) : (
          ""
        )}
        <p>Price: {apartmentDetail.pricePerDay}</p>
      </div>
    );
  };

  useEffect(() => {
    fetchApartmentDetail();
  }, [apartmentId]);

  return (
    <div>
      <h1>ApartmentDetail</h1>
      {apartmentDetail ? displayApartmentDetail() : <p>loading....</p>}
    </div>
  );
}

export default ApartmentDetail;
