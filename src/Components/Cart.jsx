import React from 'react'

export const Cart = () => {
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
               <h1 className="title">iPhone 9</h1>
               <p className="description">An apple mobile which is nothing like apple</p>
               <span className="price">549$</span>
               <span className="disc">12.96 %off</span>
               <div className="rating">4.69<i class="fa-solid fa-star"></i></div>
               <div className="brand">Apple</div>
               <div className="category">smartphones</div>
               <button>Comments</button>
               <div className="comment-box"></div>
            </div>
         </div>
      </div>
    </div>
  )
}