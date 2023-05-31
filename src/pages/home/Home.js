import "./home.css";

const Img = "../assets/images/code.jpg";
export default function Home() {
  return (
    <>
      <div className="header">
        <div className="overlay"></div>
        <img src={Img} alt="logo" className="header-img" />
      </div>
    </>
  );
}
