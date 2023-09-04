import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

// import "bootstrap/dist/css/bootstrap.min.css";
import {useState  } from "react";
import foto1 from "../assets/img/foto1.jpg";
import foto2 from "../assets/img/foto2.jpg";
import foto3 from "../assets/img/foto3.jpg";
import foto4 from "../assets/img/foto4.jpg";
import foto5 from "../assets/img/foto5.jpg";
import foto6 from "../assets/img/foto6.jpg";
import foto7 from "../assets/img/foto7.jpg";
import foto8 from "../assets/img/foto8.jpg";
import foto9 from "../assets/img/foto9.jpg";
import foto10 from "../assets/img/foto10.jpg";
import foto11 from "../assets/img/foto11.jpg";
import foto12 from "../assets/img/foto12.jpg";
import foto13 from "../assets/img/foto13.jpg";
import foto14 from "../assets/img/foto14.jpg";
import foto15 from "../assets/img/foto15.jpg";
import foto16 from "../assets/img/foto16.jpg";


// import foto1 from "../assets/imgInmobiliaria/img1.jpg";
// import foto2 from "../assets/imgInmobiliaria/img2.jpg";
// import foto3 from "../assets/imgInmobiliaria/img3.jpg";
// import foto4 from "../assets/imgInmobiliaria/img4.jpg";
// import foto5 from "../assets/imgInmobiliaria/img5.jpg";
// import foto6 from "../assets/imgInmobiliaria/img6.jpg";
// import foto7 from "../assets/imgInmobiliaria/img7.jpg";
// import foto8 from "../assets/imgInmobiliaria/img8.jpg";
// import foto9 from "../assets/imgInmobiliaria/img9.jpg";
// import foto10 from "../assets/imgInmobiliaria/img10.jpg";
// import foto11 from "../assets/imgInmobiliaria/img11.jpg";
// import foto12 from "../assets/imgInmobiliaria/img12.jpg";
// import foto13 from "../assets/imgInmobiliaria/img13.jpg";
// import foto14 from "../assets/imgInmobiliaria/img14.jpg";
// import foto15 from "../assets/imgInmobiliaria/img15.jpg";
// import foto16 from "../assets/imgInmobiliaria/img16.jpg";

const items = [
  {
    src: foto1, 
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: foto2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: foto3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },{
    src: foto4,
    altText: 'Slide 4',
    caption: 'Slide 4',
    key: 1,
  },
  {
    src: foto5,
    altText: 'Slide 5',
    caption: 'Slide 5',
    key: 2,
  },
  {
    src: foto6,
    altText: 'Slide 6',
    caption: 'Slide 6',
    key: 3,
  },{
    src: foto7,
    altText: 'Slide 7',
    caption: 'Slide 7',
    key: 1,
  },
  {
    src: foto8,
    altText: 'Slide 8',
    caption: 'Slide 8',
    key: 2,
  },
  {
    src: foto9,
    altText: 'Slide 9',
    caption: 'Slide 9',
    key: 1,
  },
  {
    src: foto10,
    altText: 'Slide 10',
    caption: 'Slide 10',
    key: 2,
  },
  {
    src: foto11,
    altText: 'Slide 11',
    caption: 'Slide 11',
    key: 3,
  },{
    src: foto12,
    altText: 'Slide 12',
    caption: 'Slide 12',
    key: 1,
  },
  {
    src: foto13,
    altText: 'Slide 13',
    caption: 'Slide 13',
    key: 2,
  },
  {
    src: foto14,
    altText: 'Slide 14',
    caption: 'Slide 14',
    key: 3,
  },{
    src: foto15,
    altText: 'Slide 15',
    caption: 'Slide 15',
    key: 1,
  },
  {
    src: foto16,
    altText: 'Slide 16',
    caption: 'Slide 16',
    key: 2,
  },
  
];

function CarouselFunction(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default CarouselFunction;