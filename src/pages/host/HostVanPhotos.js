import { useOutletContext } from "react-router-dom";
import "./HostVanPhotos.css";
export default function HostVanPhotos() {
  const { currentVan } = useOutletContext();
  return (
    <>
      <div className="host-img-photos">
        <h1>
          Yuor next <span>{currentVan.name} </span> van is ready{" "}
        </h1>
        <img src={currentVan.imageUrl} alt="" />
      </div>
    </>
  );
}
