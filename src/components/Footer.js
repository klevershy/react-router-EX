import "./Footer.css";

export default function Footer() {
  const date = new Date();
  const currentDate = date.getFullYear();

  return (
    <>
      <div className="footer">
        <h3>reserved &#169; {currentDate}</h3>
      </div>
    </>
  );
}
