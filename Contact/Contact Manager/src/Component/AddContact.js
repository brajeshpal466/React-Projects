import React from 'react'

class AddContact extends React.Component{
    state={
        name :"",
        email :""
    }
 add=(e)=>{
    e.preventDefault();
    if(this.state.email == "" && this.state.name ==""){
        alert("Enter the details");
        return
    }
        this.props.addhandler(this.state);
       this.setState({name :"",email :""});
    }
    render(props){
        return(
            <>
            <h2>Add Contact</h2>
            <div className="ui main">
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={(e)=> this.setState({name : e.target.value})}></input>
                    </div>
                    <div className="field">
                        <label>Mobile Number</label>
                        <input type="number" placeholder="Mobile No" name="email" value={this.state.email} onChange={(e)=> this.setState({email:e.target.value})}></input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
            </>
        )
    }
}

export default AddContact
