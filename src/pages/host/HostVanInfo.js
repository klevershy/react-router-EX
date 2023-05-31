import { useOutletContext } from "react-router-dom";
import "./HostVanInfo.css";

export default function HostVanInfo() {
  const { currentVan } = useOutletContext();

  return (
    <section className="host-van-detail-info">
      <h1>
        <span>Name:</span> {currentVan.name}
      </h1>
      <h1>
        <span>Category: </span> {currentVan.type}
      </h1>
      <p>
        <span>Description: </span> {currentVan.description}
      </p>
      <h1>
        <span>Visibility: </span> Public
      </h1>
    </section>
  );
}
