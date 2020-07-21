import React from 'react';
import './ContactFormCard.css';
import userService from '../../utils/userService';


function ContactFormCard({ contactFormFromParent, handleDeleteContactForm }) {
    return (
        <>
            <div>
                {userService.isAdmin() ?
                    <div className='ContactFormCard'>
                        <div>
                            <h3>Contact Form</h3>
                            <p>{contactFormFromParent.name}</p>
                            <p>{contactFormFromParent.email}</p>
                            <p>{contactFormFromParent.question}</p>
                        </div>
                        <div>
                            <button
                                className='btn btn-cancel'
                                onClick={() => handleDeleteContactForm(contactFormFromParent._id)}
                            >DELETE</button>
                        </div>
                    </div>
                    :
                    ''
                }
            </div>
        </>
    )
}

export default ContactFormCard;