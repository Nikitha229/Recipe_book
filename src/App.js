import React, { useState } from "react";
import axios from "axios";
import Product from './Product';
//import Ingredients from "./ingredients";
const App = () => {
  const [search, setSearch] = useState("");
  const [data,setData]=useState([]);
  const YOUR_APP_ID = "94bf3303";
  const YOUR_APP_KEY = "70b06fe08a633d45bb090b4a322ccb18";
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=40&calories=591-722&health=alcohol-free`
      )
      .then((data) => {
        setData(data.data.hits);
      });
  };
  return (
    <div>
      
      <center>
        <h4>Food Recipe App</h4>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <br />
          <br />
          <input type="submit" value="Search" />
        </form>
        {data.length>=1 ? <Product data={data}/> : null}
      </center>
    </div>
  );
};

export default App;
