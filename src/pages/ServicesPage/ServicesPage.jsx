import React from 'react';
import './ServicesPage.css';

function ServicesPage(props) {
    return (
        <>
            <h1>Services</h1>
            <div className='Services-section'>
                <h2>Individual Therapy</h2>
                <p>1:1 talk therapy session that last 50 minutes. I do not have a central office space but meet in private rooms in libraries or walking around a park, depending on the preference of the client.</p>
            </div>
            <div className='Services-section'>
                <h2>Adolescent Group Therapy</h2>
                <p>I’ve ran an LGBTQ support group in an inpatient psych hospital and helped 100s of teenagers who experience:</p>
                <ul>
                    <li>rejection from parents, family and religious communities</li>
                    <li>bullying from peers</li>
                    <li>Questioning their sexuality or gender identity</li>
                    <li>Navigating the transition process</li>
                </ul>
                <p>In my groups, teens are able to feel understood and less alone.</p>
            </div>
            <div className='Services-section'>
                <h2>Walk and Talk Therapy</h2>
                <p>My background includes meeting people where they are at. In pre-pandemic times, I worked for an agency that allowed me to meet clients in parks, coffee shops, schools, libraries and other public spaces.</p> <br/>
                <p>Now in the pandemic, I offer meeting in parks so we can walk and talk at your pace. This can reduce awkwardness and provide gentle exercise that can reduce symptoms of many mental disorders.</p>
            </div>
        </>
    )
}

export default ServicesPage;