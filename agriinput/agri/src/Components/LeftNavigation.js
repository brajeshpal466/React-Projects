import React from 'react'
import {NavLink} from 'react-router-dom'

function LeftNavigation() {
    return (
                        
             <div className="left-container">
                
                    <div className="left-nav-link">
                <NavLink exact to='/agrimanagement' activeClassName="active" className="tablink">Agri-Purchase Mangement</NavLink>
                <NavLink exact to='/agrimaintainance' activeClassName="active" className="tablink">Agri-Input Master Maintance</NavLink>
                <NavLink exact to='/suppliermaintenance' activeClassName="active" className="tablink" >Supplier Master Maintance</NavLink>
                <NavLink exact to='/agrirequests'activeClassName="active"  className="tablink" >Agri-Input Purchase Requests</NavLink>
                </div>
                  <div className="bottom-nav-link">
                      <NavLink exact to='/taxmantainance' activeClassName="active" className="bottom-link">Tax Master
                      Maintance</NavLink>
                  </div>
                 
                
                </div>
        
    )
}

export default LeftNavigation
