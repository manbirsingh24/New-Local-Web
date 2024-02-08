import React, { useState } from "react";
import "./body.css";
export default function Body(props) {
  // console.log("props: ", props)
  const url = props.api.base;
  // console.log("ap:", url)
  const key = props.api.key;

  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  async function show() {
    fetch(`${url}q=${search}&units=metric&appid=${key}`)
      .then((res) => res.json())
      .then((res) => {
        // if(!res){
        //     console.log('no data');
        // }

        console.log("Res:", res);
        setData(res);
        console.log(data);
      });
    // const response = await fetch(`${url}q=${search}&units=metric&appid=${key}`)
    // const data = await response.json();
    // console.log("data: ",data)
    // setData(data)
  }
  console.log("data: ", data);

  return (
    <>
        <div className="search">
          <input
            type="text"
            placeholder="enter city name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={show}>search</button>
        </div>
    <div className="body">
      <div className="box-content">

        {data && data.cod===200 ? (
          <div className="details">
            {/* logo */}
            {/* <div className="logo">
              <p>logo</p>
            </div> */}

            {/* city name */}
            <div className="city">
              <p>{data?.name}</p>
            </div>

            {/* weather */}
            <div className="weather">
              <p>{data?.weather[0]?.description}</p>
            </div>

            {/* temprature */}
            <div className="temprature">
              <p>{data?.main?.temp}°C</p>
            </div>
          </div>
        ):<h1>No data</h1>}
      </div>
    </div>
    </>
  );
}
