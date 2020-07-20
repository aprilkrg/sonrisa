import React from 'react';
import './ServicesPage.css';

function ServicesPage(props) {
    return (
        <>
            <div className='div-section ServicesPage-section'>
                <h2 className='ServicesPage-h2'>Individual Therapy</h2>
                <p>1:1 talk therapy session that last 50 minutes. I do not have a central office space but meet in private rooms in libraries or walking around a park, depending on the preference of the client.</p>
            </div>
            <div className='div-section ServicesPage-section'>
                <h2 className='ServicesPage-h2'>Adolescent Group Therapy</h2>
                <img 
                    src="https://i.imgur.com/uGWvss8.jpg" 
                    alt="A group of young people sit in a circle on the grassy ground"
                    width='400rem'
                    className='ServicesPage-img'
                />
                <p>I’ve run an LGBTQ support group in an inpatient psych hospital and helped 100s of teenagers who experience:</p>
                <ul className='ServicesPage-section'>
                    <li className='ServicesPage-li'>Rejection from parents, family, and religious communities</li>
                    <li className='ServicesPage-li'>Bullying from peers</li>
                    <li className='ServicesPage-li'>Questioning their sexuality or gender identity</li>
                    <li className='ServicesPage-li'>Navigating their transition process</li>
                </ul>
                <p>In my groups, teens are able to feel understood and less alone.</p>
            </div>
            <div className='div-section ServicesPage-section'>
                <h2 className='ServicesPage-h2'>Walk and Talk Therapy</h2>
                <p>My background includes meeting people where they are at. In pre-pandemic times, I worked for an agency that allowed me to meet clients in parks, coffee shops, schools, libraries and other public spaces.</p> <br/>
                <p>Now in the pandemic, I offer meeting in parks so we can walk and talk at your pace. This can reduce awkwardness and provide gentle exercise that can reduce symptoms of many mental disorders.</p>
            </div>
            <div className='div-section ServicesPage-section'>
                <h3 className='ServicesPage-h2'>Rates:</h3>
                <ul className='ServicesPage-section'>
                    <li>$50 per 50-minute Individual Session</li>
                    <li>$20 per client per group for the Adolescent LGBTQ Support Group</li>
                    <li>I do not accept insurance at this time</li>
                </ul>
            </div>
        </>
    )
}

export default ServicesPage;