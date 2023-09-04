import Card from "./Card";

import image1 from "../../assets/img/foto1.jpg";
import image2 from "../../assets/img/foto2.jpg";
import image3 from "../../assets/img/foto3.jpg";

const cards = [
  {
    id: 1,
    title: "Departamento en venta Constitución",
    image: image1,
    ubicar:"Av. xxx 800, Constitución",
    numHab:1,
    numBaños:1,
    metros:50,
    usd:94000,
    expensas:7000,
    url: "",
  },
  {
    id: 2,
    title: "Departamento en venta Constitución",
    image: image2,
    ubicar:"Av. xxx 800, Constitución",
    numHab:1,
    numBaños:1,
    metros:50,
    usd:94000,
    expensas:7000,
    url: "",
  },
  {
    id: 3,
    title: "Departamento en venta Constitución",
    image: image3,
    ubicar:"Av. xxx 800, Constitución",
    numHab:1,
    numBaños:1,
    metros:50,
    usd:94000,
    expensas:7000,
    url: "",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        {cards.map(({ title, image, ubicar, numHab, numBaños, metros, usd, expensas,url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} ubicar={ubicar} numHab={numHab} numBaños={numBaños} metros={metros} usd={usd} expensas={expensas} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;