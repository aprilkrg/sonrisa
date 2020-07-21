import React from 'react';
import ContactFormCard from '../../components/ContactFormCard/ContactFormCard';

function ContactFormListPage({ contactFormsFromParent, handleDeleteContactForm }) {
    return (
        <>
            <h1>Contact Forms Submitted</h1>
            <div className='ContactFormPage'>
                {contactFormsFromParent.map(contactForm =>
                    <div className='ContactFormCard'> 
                    <ContactFormCard 
                        key={contactForm._id}
                        contactFormFromParent={contactForm}
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