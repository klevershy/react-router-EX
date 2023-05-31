import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./HostVans.css";

export default function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const hostVansEle = vans.map((van) => (
    <Link to={van.id} key={van.id} className="host-van-link-wrapper">
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`pic ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price} /day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section className="vans-section">
      <h1 className="host-vans-title"> Your listed Vans</h1>
      <div className="host-van-list">
        {vans.length > 0 ? (
          <section>{hostVansEle}</section>
        ) : (
          <h2>Loading......</h2>
        )}
      </div>
    </section>
  );
}
