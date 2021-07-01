import React from 'react'
import ContactCard from './ContactCard'

function ContactList(props) {
    const contactlist = props.contact.map((contact)=>{
        return(<ContactCard contact={contact} removehandler = {props.removeContacthandler} ></ContactCard>)
    })
     return ( 
        <>
        <h3>Contact List</h3>
        <div className="ui celled list">
            {contactlist}
        </div>
        </>
    )
}

export default ContactList
