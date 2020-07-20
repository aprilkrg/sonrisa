import React from 'react';
import ContactFormCard from '../../components/ContactFormCard/ContactFormCard';

function ContactFormListPage({ contactFormsFromParent, handleDeleteContactForm }) {
    return (
        <>
            <h1>Contact Forms Submitted</h1>
            <div className='ContactFormPage'>
                {contactFormsFromParent.map(contact =>
                    <div className='ContactFormCard'> 
                    <ContactFormCard 
                        key={contact._id}
                        contactFormFromParent={contact}
                        handleDeleteContactForm={handleDeleteContactForm}
                    />
                    </div>
                )}
                &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
        </>
    )
}

export default ContactFormListPage;