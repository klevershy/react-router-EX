import { useEffect, useState } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import "./HostVanDetail.css";
import HostVanInfo from "./HostVanInfo";
import HostVanPhotos from "./HostVanPhotos";
import HostVanPricing from "./HostVanPricing";

export default function HostVanDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) {
    return <h1>Loading....</h1>;
  }

  const activeNav = {
    color: "white",
    fontWeight: "bold"
  };

  return (
    <>
      {/* <div className="return-option">
        <Link to=".." relative="path" className="back-button">
          &larr; back to all vans
        </Link>
      </div> */}

      <section className="vanDetail-section">
        <div className="van-single-detail">
          <img
            src={currentVan.imageUrl}
            alt={`van of ${currentVan.name}`}
            width={180}
          />

          <div className="van-single-content">
            <h1>{currentVan.name}</h1>
            <p>${currentVan.price} / day</p>
            <p>{currentVan.type}</p>
          </div>
        </div>

        <div className="hostvan-detail-nav">
          <NavLink
            to="."
            element={<HostVanInfo />}
            end
            style={({ isActive }) => (isActive ? activeNav : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            element={<HostVanPricing />}
            style={({ isActive }) => (isActive ? activeNav : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            element={<HostVanPhotos />}
            style={({ isActive }) => (isActive ? activeNav : null)}
          >
            Photos
          </NavLink>
        </div>

        <Outlet context={{ currentVan }} />
      </section>
    </>
  );
}
