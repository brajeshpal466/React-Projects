import React from 'react'
import user from '../images/user.png'
function ContactCard(props) {
    const { id, name ,email} = props.contact;
    
   const  remove = (e)=>{
       const ids = e.target.id;
       props.removehandler(ids);
   }

    return (
    
            <div className="item">
                <img className="ui avatar image" src={user} alt="user"/>
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i id={id} className="trash alternate outline icon" onClick={remove} style={{color :'red',float:'right',marginTop:'5px',fontSize:'20px'}}></i>
        </div>
        
    )
}

export default ContactCard
