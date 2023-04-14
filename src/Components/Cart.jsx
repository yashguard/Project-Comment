import React from 'react'

export const Cart = (props) => {
   return (
      <div>
         <div className="container">
            <div className="row">
               <div className="image">
                  <img src={props.thumbnail} alt='' />
                  <button>Add to Cart</button>
                  <button>Buy Now</button>
               </div>
               <div className="content">
                  <h1 className="title">{props.title}</h1>
                  <p className="description">{props.description}</p>
                  <span className="price">{props.price}$</span>
                  <span className="disc">{props.discount} %off</span>
                  <div className="rating">{props.rating}<i class="fa-solid fa-star"></i></div>
                  <div className="brand">{props.brand}</div>
                  <div className="category">{props.category}</div>
                  <p>{props.comment}</p>
               </div>
            </div>
         </div>
      </div>
   )
}