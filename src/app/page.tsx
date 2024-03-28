"use client"

import Image from "next/image";
import { Search } from 'lucide-react';
import { format } from 'date-fns';
import { useEffect, useState } from "react";

export default function Home() {
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'EEEE, d MMMM');
  const [weatherData,setWeatherData]=useState({
    'cityName':'Nandigama',
    'temperature':'--',
    'Time':'',
    'skyDesc':'',
    'other_data':''
})

  useEffect(()=>{
    getWeather()
    

  },[])
  
  async function getWeather(){
    console.log('calling weather')
    let form=new FormData()
    form.append('city','Nandigama')
    try {
      const response = await fetch('https://newsweatherapi.vercel.app/getWeather/', {
        method: 'POST',
        body: form
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      setWeatherData(data.weatherData)
      console.log(data);
      // Handle the fetched data as needed
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  async function getHeadlines(){
    console.log('calling weather')
    let form=new FormData()
    form.append('city','Nandigama')
    try {
      const response = await fetch('https://newsweatherapi.vercel.app/getLatestHeadlines', {
        method: 'GET'
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
      // Handle the fetched data as needed
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="bg-[#f8feff]">

      <nav className="bg-white sticky px-4 border-b-[1.5px] border-[#c1bdbd] py-3 flex items-center justify-between">
        <div className="inline-flex items-center m-4 text-2xl font-bold">
          <h1 className="text-3xl font-extrabold">Info</h1>
          <span className="bg-[#faae3c] text-white px-2 py-1 mx-2 rounded-lg">Sphere</span>
        </div>

        <div className=" mx-4 flex gap-x-6 text-md">
          <h1 className="hover:bg-[#efeeee] hover:cursor-pointer py-1 px-2 rounded-md">Local</h1>
          <h1 className="hover:bg-[#efeeee] hover:cursor-pointer py-1 px-2 rounded-md">Business</h1>
          <h1 className="hover:bg-[#efeeee] hover:cursor-pointer py-1 px-2 rounded-md">Technology</h1>
          <h1 className="hover:bg-[#efeeee] hover:cursor-pointer py-1 px-2 rounded-md">Enternainment</h1>
          <h1 className="hover:bg-[#efeeee] hover:cursor-pointer py-1 px-2 rounded-md">Sports</h1>
          <h1 className="hover:bg-[#efeeee] hover:cursor-pointer py-1 px-2 rounded-md">Science</h1>
          <h1 className="hover:bg-[#efeeee] hover:cursor-pointer py-1 px-2 rounded-md">Health</h1>
        </div>

        <div className="flex items-center mx-4">
          <Search
            className="w-5 h-5 absolute mx-2 text-[#919090]"
          />
          <input
            placeholder="Search for topics location & keywords"
            className="bg-[#f7f6f6] text-base  border-2 border-[#8f8c8c] pl-8 pr-4 py-2 rounded-xl w-96"
          />
        </div>
      </nav>

      {/* head 1 */}
      <div className=" flex items-center justify-around py-4">
        <div className="mr-80">
          <h1 className="font-bold text-3xl my-1 text-gray-700">Your briefing</h1>
          <h2 className="font-bold text-2xl text-gray-700">{formattedDate}</h2>
        </div>

        <div className="p-4 flex rounded-xl ml-80 bg-white">
          <div className="flex flex-col items-center">
            <img src='/weatherIcon.png' alt="weather icon" />
            <img src='/left-arrow.svg' className="w-6 h-6 mt-3" alt="go" />
          </div>
          <div className="ml-2">
            <h1 className="font-bold text-2xl my-1 text-gray-800">{weatherData.cityName}</h1>
            <h1 className="font-bold text-3xl">{weatherData?.temperature}</h1>
            <a href="https://weather.com/en-IN/weather/today/l/fc0c4a316e2315d105b9e7dcc77efe6a54071f265850b25ac57d5a5d2267c96c" className="text-sm text-blue-600">More on Weather.com</a>
          </div>

        </div>
      </div>


    </div>
  );
}
