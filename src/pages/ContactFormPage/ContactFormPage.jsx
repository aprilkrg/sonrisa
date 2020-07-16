import React from 'react';
import ContactForm from '../../components/Contact/ContactForm';

function ContactFormPage({ submittedContactForms }) {
    return (
        <>
            <h1>Contact Forms Submitted</h1>
            <div className='Contact-Form-Page'>
                {submittedContactForms.map(form =>
                    <ContactForm 
                        
                    />
                )}
            </div>
        </>
    )
}