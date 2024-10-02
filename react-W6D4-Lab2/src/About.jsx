import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function About() {
    let { id } = useParams();
    const [info, setInfo] = useState([]);

    axios.get(`https://6657369e9f970b3b36c865b0.mockapi.io/Images/${id}`)
        .then(function (response) {
            console.log(response);
            setInfo(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    return (
        <div className='bg-stone-300 flex flex-col justify-evenly items-center w-full h-screen'>
            <div className='w-full h-[10%] text-center text-black text-5xl font-bold pt-5'>{info.name}</div>
            <div className='flex justify-between items-center w-[50%] h-[50%] max-sm:w-[90%] max-sm:h-[40%] bg-stone-400 rounded-3xl'>
                <div className='w-[48%] h-full'>
                    <img className='w-full h-full rounded-l-3xl ' src={info.image} />
                </div>
                <div className='flex flex-col justify-evenly items-start w-[48%] h-full text-black'>
                    <p className='font-bold text-xl'>Name: <span className='pl-4 font-semibold'>{info.name}</span></p>
                    <p className='font-bold text-xl'>Hair: <span className='pl-4 font-semibold'>{info.hair}</span></p>
                    <p className='font-bold text-xl'>Status: <span className='pl-4 font-semibold'>{info.status}</span></p>
                    <p className='font-bold text-xl'>Origin: <span className='pl-4 font-semibold'>{info.origin}</span></p>
                    <p className='font-bold text-xl'>Gender: <span className='pl-4 font-semibold'>{info.gender}</span></p>
                    <p className='font-bold text-xl'>Species: <span className='pl-4 font-semibold'>{info.species}</span></p>
                </div>
            </div>

        </div>


    )
}

export default About