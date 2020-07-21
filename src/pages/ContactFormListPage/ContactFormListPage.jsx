import React from 'react';
import ContactFormCard from '../../components/ContactFormCard/ContactFormCard';
import './ContactFormListPage.css';

function ContactFormListPage({ contactFormsFromParent, handleDeleteContactForm }) {
    return (
        <>
            <h1 className='ContactFormListPage-h1'>Contact Forms Submitted</h1>
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