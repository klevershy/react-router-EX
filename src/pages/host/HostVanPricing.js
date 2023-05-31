import { useOutletContext } from "react-router-dom";
import "./HostVanPricing.css";
export default function HostVanPricing() {
  const { currentVan } = useOutletContext();

  return (
    <section className="host-van-pricing">
      <h1>
        <span>price: </span> ${currentVan.price} / day
      </h1>
    </section>
  );
}
