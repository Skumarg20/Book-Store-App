import React,{useEffect,useState} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './card';
export default function Freebooks() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('http://localhost:4001/book');
        if (!res.ok) {
          throw new Error("Fetching has some problem");
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getData();
  }, []);
  const filteredData = Array.isArray(data) ? data.filter(book => book.category === 'free') : [];
  console.log(filteredData);


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='max-w-screen-3xl container mx-auto'>
        <div>
            <h1 className='text-3xl font-extrabold'>Free Books</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
        </div>
    <div className="slider-container">
    <Slider {...settings}>
     {filteredData.map((book)=>(
        <Card key={book.id} title={book.title} category={book.category} price={book.price}/>
     ))}
    </Slider>
  </div>
  </div>
  )
}
