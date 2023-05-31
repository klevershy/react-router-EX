import { Link } from "react-router-dom";
import "./NotFound.css";
export default function () {
  return (
    <div className="notFound">
      <h1>Sorry Page not found</h1>
      <Link to=".">
        <button> &larr; return home</button>
      </Link>
    </div>
  );
}
