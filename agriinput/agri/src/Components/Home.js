import React from 'react'
import LeftNavigation from './LeftNavigation'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import AgriInputPurchaseRequest from './navtab/AgriInputPurchaseRequest'
import AgriMaintainance from './navtab/AgriMaintainance'
import SupplierMM from './navtab/SupplierMM'
import AgriMangement from './navtab/AgriMangement'
function Dummy() {
    return (
        <Router>
        <div className="main-container">
       
           <LeftNavigation></LeftNavigation>
           
            <div className="right-container">
                <Switch>
                    <Route exact path='/agrimanagement'>
                    <AgriMangement></AgriMangement>
                    </Route>
                    <Route exact path='/agrimaintainance'>
                        <AgriMaintainance></AgriMaintainance>
                    </Route>
                    <Route exact path='/suppliermaintenance'>
                        <SupplierMM></SupplierMM>
                    </Route>
                    <Route exact path='/agrirequests'>
                    <AgriInputPurchaseRequest></AgriInputPurchaseRequest>
                        
                    </Route>
                    <Route exact path='*'>
                    <AgriInputPurchaseRequest></AgriInputPurchaseRequest>
                    </Route>
                </Switch>

            </div>
       
        </div>
        </Router>
    )
}

export default Dummy
