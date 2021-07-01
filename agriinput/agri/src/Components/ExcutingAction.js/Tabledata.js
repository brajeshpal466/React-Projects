// this component is called when list are expande than it will work it have table and thier row whic
// getting props thought  thier parent show in table where is row and td form 
import React from 'react'
import { useState } from 'react'
import PopupContainer from './PopupContainer';
function Tabledata(props) {
    const [popdata, setpopdata] = useState()
    //console.log(props.tabledata)
    const popupform = (e) => {
        e.stopPropagation();
        const popform = document.querySelector('#modelpop')
        popform.classList.add('active')
        const popid = e.target.id;
        setpopdata(props.tabledata[popid]);
    }
    return (
        <div>
            <table className="mytable">
                <thead className="table-heading">
                    <tr>
                        <th className="srno">Sr No</th> <th>Agri-input Category</th><th>Product Image</th><th>Product Description</th><th>Order Quantity</th>
                    </tr>
                </thead><tbody className="table-body">
                    {props.tabledata.map((item, index) => {
                        return (<tr>
                            <td>{item.id}</td> <td>{item.agriCategory}</td>
                            <td><img id="product-img" src={item.productImg} alt="img"></img></td>
                            <td>{item.productDec}</td><td>{item.orderQuntity}</td>
                            <td ><img onClick={popupform} src="https://icon-library.com/images/resize-512.png" className="popup" alt="popimg" id={index}></img></td>
                        </tr>)})}    </tbody> </table>
            <div id="modelpop">
                <button onClick={(e) => { e.stopPropagation();e.target.parentElement.className = "";}} style={{ width: '30px', backgroundColor: "red", color: "rgb(211, 225, 228)" }}>&times;</button>
                <div className='model-container'>
                    {popdata && <PopupContainer popdata={popdata}></PopupContainer>} </div>  </div>
        </div>
    )
}
export default Tabledata
