import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../../server.js";
// import "../../api";
import "./Vans.css";
import { getVans } from "../../api";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    async function loadVans() {
      const data = await getVans();

      setVans(data);
    }
    loadVans();
    // fetch("/api/vans")
    //   .then((res) => res.json())
    //   .then((data) => setVans(data.vans));
  }, []);

  const displayedTypeVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayedTypeVans.map((van) => (
    <div key={van.id} className="van-title">
      <Link
        to={van.id}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter
        }}
      >
        <img src={van.imageUrl} alt="car" />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
      </Link>
      <div className="van-class">
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    </div>
  ));

  return (
    <>
      <div className="vanList-container">
        <h1>Explore our van options </h1>
        <div className="van-list-filter-buttons">
          <button
            onClick={() => setSearchParams({ type: "simple" })}
            className={`van-type simple ${
              typeFilter === "simple" ? "van-selected" : ""
            }`}
          >
            simple
          </button>
          <button
            onClick={() => setSearchParams({ type: "luxury" })}
            className={`van-type simple ${
              typeFilter === "luxury" ? "van-selected" : ""
            }`}
          >
            luxury
          </button>
          <button
            onClick={() => setSearchParams({ type: "rugged" })}
            className={`van-type simple ${
              typeFilter === "rugged" ? "van-selected" : ""
            }`}
          >
            rugged
          </button>
          {typeFilter ? (
            <button onClick={() => setSearchParams({})}>clear</button>
          ) : null}

          {/* ******** other way to filter */}
          {/* <button>
            <Link to="?type=simple" className="van-type simple">
              simple
            </Link>
          </button>
          <button>
            <Link to="?type=luxury" className="van-type luxury">
              luxury
            </Link>
          </button>
          <button>
            <Link to="?type=rugged" className="van-type rugged">
              rugged
            </Link>
          </button>
          <button>
            <Link to="." className="van-type clear">
              clear
            </Link>
          </button> */}
        </div>

        <div className="van-list">{vanElements}</div>
      </div>
    </>
  );
}
