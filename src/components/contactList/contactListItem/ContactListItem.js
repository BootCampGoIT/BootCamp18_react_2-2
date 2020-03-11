import React from 'react';

const ContactListItem = ({ contact: { id, name, number }, deleteContact }) => {
    return (
        <li>
            <span>{name}  </span>
            <span>{number}</span>
            <button type="button" id={id} onClick={deleteContact}>Delete</button>
        </li>
    );
}

export default ContactListItem;