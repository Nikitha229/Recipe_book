import React,{useState} from 'react'
import Ingredients from './ingredients';
import {Link} from 'react-router-dom';
import {Route,Routes } from "react-router-dom";
//import { Navigate } from 'react-router-dom';
const Product = ({data}) => {
  const [list,setList]=useState([]);
  const fun=(list)=>{
    //console.log(list);
    list.map(val=>console.log(val.text));
  }
  return (
    <div>
      <Routes>
            <Route path='/ingredients' exact element={<Ingredients list={list}/>} />
         </Routes>
      <div className="row">
                {data.map(data =>  
                <div className="col-md-3">
                    <div class="card" style={{"width": "18rem"}}>
                    <img class="card-img-top" src={data.recipe.image} alt="Card image cap" />
                    <div class="card-body">
                    <center>
                        <h5 class="card-title">{data.recipe.label}</h5>
                        <p class="card-text">Total Amount Of Calories : {Math.round(data.recipe.calories)}</p>
                       
                        <Link to="/ingredients"><li onClick={()=>setList(data.recipe.ingredients)} class="btn btn-primary">Ingredients</li></Link>
                        </center>
                    </div>
                    </div>
                </div>
                )}
            </div>
    </div>
  )
}

export default Product
