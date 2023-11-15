import PropTypes from "prop-types";
import { BiHotel, BiBath, BiMoney, BiSolidRuler, BiDollar } from "react-icons/bi";
import "./card.css";


function Card({ imageSource, title, ubicar, numHab, numBaños, metros, usd, expensas, url }) {
  return (
    <div className="card text-center bg-white animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {ubicar
            ? ubicar
            : ""}
        </p>
        <div className="description">
          <aside className="info text-secondary"> 
            <h6 className="detail"><BiHotel className="icon" /> {numHab   }</h6 > 
            <h6  className="detail"><BiBath className="icon"/>{numBaños}</h6 >
            <h6 className="detail"><BiSolidRuler className="icon"/>{metros} mts2</h6 ></aside>
        </div>
        <div className="price text-primary">
          <h3> <BiMoney /> <BiDollar/>{usd}</h3>
        </div>
        <div> <p>Expensas <BiMoney /><BiDollar/>{expensas}</p> </div>
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn btn-outline-secondary border-0"
          rel="noreferrer"
        >
          Go to {title}
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  ubicar: PropTypes.string.isRequired,
  numHab: PropTypes.string.isRequired,
  numBaños: PropTypes.string.isRequired,
  metros: PropTypes.string.isRequired,
  usd: PropTypes.number.isRequired,
  expensas: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;


