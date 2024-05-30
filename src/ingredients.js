import React from 'react'
const ingredients = ({list}) => {
    return (
        <div>
         {list.map((list,index)=>
         //console.log(list.text)
       <li key={index}>{list.text}</li>
        )}
        </div>
      )
}

export default ingredients
