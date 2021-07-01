// this compnent is getting props from table click popup of particuler table to show the data on 
// thier detail of data
import React from 'react'
function PopupContainer(props) {
    console.log(props.popdata)
    return (
        <div className="popdetail-container">
            <h3>About Product</h3>
            <img src={props.popdata.productImg} alt="img"></img>
            <h5>Product Category : {props.popdata.agriCategory}</h5>
            <p>Product Discription : {props.popdata.productDec}</p>
            <strong>Quantity : {props.popdata.orderQuntity}</strong>
        </div>
    )
}

export default PopupContainer
