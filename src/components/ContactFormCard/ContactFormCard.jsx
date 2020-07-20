import React from 'react';
import './ContactFormCard.css';
import * as contactFormsService from '../../utils/contactFormsService';


function ContactFormCard({ contactFormFromParent, handleDeleteContactForm }) {
    return(
        <div>
            <div>
                <dl>
                    <dt>Contact Form</dt>
                    <dd>{contactFormFromParent.name}</dd>
                    <dd>{contactFormFromParent.email}</dd>
                    <dd>{contactFormFromParent.question}</dd>
                </dl>
            </div>
            <div>
                <button
                    className='btn'
                    onClick={() => handleDeleteContactForm(contactFormFromParent._id)}
                >
                DELETE</button>
            </div>

        </div>

    )
}

export default ContactFormCard;