// this tab is having executing process of the link such as Undo batch genratePO and assignsupplier
import React from 'react'
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import GenratePo from '../ExcutingAction.js/GenratePo'
function Executing() {
    return (
        <div>
            <Router>
                <div className="executed-tab">

                    <div ></div>
                    <NavLink exact to='/undobatch' activeClassName='active' className="exe-link undo-batch">Undo Batch</NavLink>
                    <NavLink exact to='/assignsuppliers' activeClassName='active' className="exe-link assign-suppliers" >Assign Suppliers</NavLink>
                    <NavLink exact to='/getratepo' activeClassName='active' className="exe-link generate-po">Generate PO</NavLink>
                </div>
                <div>
                    <Switch>
                        <Route exact path='/getratepo'>
                            <GenratePo></GenratePo>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Executing
