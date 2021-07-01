//this component is having Agri-Input Master Maintance tabs which is namine wiht pending executing executed and Completed 
import React from 'react'
import { NavLink, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Executing from '../Tabs/Executing'
function AgriInputPurchaseRequest() {
    return (
        <div>
            <Router>
                <h4>Agri-Input Master Maintance</h4>
                <div className="tabs">
                    <NavLink exact to='/agrirequests/pending' className="tablink" >
                        <div className='pending1' >1</div>PENDING <div className='hintactive1'></div>
                        <div className='navhint'></div></NavLink>
                    <NavLink exact to='/agrirequests/executing' activeClassName="active" className="tablink">
                        <div className='executing2'>2</div>EXECUTING<div className='hintactive2'></div>
                    </NavLink>
                    <NavLink exact to='/agrirequests/executed' className="tablink" >
                        <div className='executed3' >3</div>   EXECUTED <div className='hintactive3'></div>
                    </NavLink>
                    <NavLink exact to='/agrirequests/completed' className="tablink" >
                        <div className='completed4' >4</div>
                        COMPLETED
                        <div className='hintactive4'></div>
                    </NavLink>
                </div>
                <Switch>
                    <Route exact path='/agrirequests/executing'>
                        <Executing></Executing>
                    </Route>
               </Switch>
            </Router>
        </div>
    )
}
export default AgriInputPurchaseRequest
