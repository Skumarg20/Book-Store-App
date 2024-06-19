import React, { useEffect,useState } from 'react'

import Card from './card'
export default function Courses() {
  
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
  const filteredData = Array.isArray(data) ? data.filter(book => book.category === 'Paid') : [];
  console.log(filteredData);
 
  return (
    <div className=' max-w-screen-3xl container mx-auto'>
        <div className='justify-center items-center text-center space-y-3'>
            <h1 className='font-bold text-3xl'>Books are a <span className='text-pink-600'>uniquely portable</span> magic</h1>
            <p>We also have story books that we read for leisure and fun. We can get them from the school library. We can also buy them from bookshops. Books are printed on paper, and can have pictures too that make them interesting. We can read books on the computer as well.</p>
            <button className="btn btn-secondary ">Secondary</button>
        </div>
        <div className='grid grid-cols-3 gap-3 mt-5'>
        {filteredData.map((book)=>(
        <Card key={book.id} title={book.title} category={book.category} price={book.price}/>
     ))}
        </div>
    </div>
  )
}
