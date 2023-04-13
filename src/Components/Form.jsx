import React from 'react'

export const Form = () => {
  return (
    <div>
      <div className="container">
         <div className="row">
            <div className="image">
               <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" />
               <button>Add to Cart</button>
               <button>Buy Now</button>
            </div>
            <div className="content">
               <h1 className="title"></h1>
               <p className="description"></p>
               <span className="price"></span>
               <span className="disc"></span>
               <div className="rating"></div>
               <div className="brand"></div>
               <div className="category"></div>
               <button>Comments</button>
            </div>
         </div>
      </div>
    </div>
  )
}