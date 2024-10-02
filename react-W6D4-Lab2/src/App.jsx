import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

function App() {
  const [info, setInfo] = useState([]);
  const dataFun = () => {
    axios.get('https://6657369e9f970b3b36c865b0.mockapi.io/Images/')
      .then(function (response) {
        console.log(response);
        setInfo(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  useEffect(() => {
    dataFun();
  }, [])

  return (
    <div className='bg-stone-300 w-full h-full flex flex-col gap-10 justify-evenly items-center'>
      <div className='w-full h-[20%] text-center text-black text-5xl font-bold pt-5'>Cartoon Images</div>
      <div className='flex justify-start items-center gap-7 w-[90%] h-[80%] flex-wrap max-sm:gap-10'>
        {info.map((item, index) => {
          return (
            <div key={index} className=' h-[60vh] w-[23.05%] rounded-3xl bg-slate-300 max-sm:w-full'>
              <Link to={`/about/${item.id}`}>
                <img className='w-full h-full rounded-2xl' src={item.image} />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
