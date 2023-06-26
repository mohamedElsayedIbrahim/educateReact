import React, { Component } from 'react'

export default class Viewprdouct extends Component {
  render() {
    let {name,count,price,onSale,id} = this.props.productInfo;
    let Deletefun = this.props.deleteProduct;
    return <>
        <div className="col-md-4">
          <div className='bg-dark position-relative text-light p-2 rounded-2'>
            <h1>{name}</h1>
            <p>{count}</p>
            <h6>{price}$</h6>

            <button onClick={()=> {Deletefun(id)}} className='btn btn-light'>Delete</button>
            {onSale === true ? <div className='bg-danger position-absolute top-0 end-0 m-2 p-2'>sale</div> : ''}
          </div>
        </div>
    </>
  }
}
