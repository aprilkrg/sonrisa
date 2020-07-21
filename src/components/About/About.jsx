import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className='About'>
                <div className='About-section'>
                <h3>Theoretical Approach</h3>
                    <p>I believe that people heal naturally when in a healthy environment. My work is to create a space in which people can heal themselves by listening non-judgmentally, and reflecting the strengths I see in each person back to them.</p>
                    <br/>
                <h3>How I Treat ... </h3>
                <img 
                    src="https://i.imgur.com/Pc974e0.jpg" 
                    alt="A person leans against an orange wall, their head tilted back and eyes looking away and down"
                    width="400rem"
                    className='About-img'
                    /> 
                    <br/><p> Depression and anxiety arise when the body produces a stress response that is not able to resolve. I teach clients to recognize when their stress response is happening, tune into their bodies and address the situation causing the stress in a healthy way.</p>
                </div><br></br>
                <div className='About-section'>
                    <h3>Trauma Informed</h3>
                    <p> Everyone experiences trauma in their lives – you are normal! Any behavior you do is an attempt to meet a need, and when we have experienced trauma our body learns strategies to survive that are often no longer helpful once out of the dangerous situation. I can help you to turn around negative behavior patterns such as substance use, self-harm, and high-conflict relationships.</p>
                </div><br></br>
                <div className='About-section'>
                    <h3>LGBTQIA Affirming</h3>
                <img 
                    src="https://i.imgur.com/fEPLrPL.jpg" 
                    alt="A person is turned away from the camera and facing a corner between two walls. The walls are painted in a rainbow gradient and the person is looking up."
                    width="300rem"
                    align='left'
                    className='About-img2'
                    /> <br/>
                    <p>My passion is to help folks who identify within the LGBTQIA Community. Through research and personal and professional experience, I know that people within the queer community experience higher rates of depression, anxiety, substance use, self-harm and suicide compared to straight and cisgender communities. <br/><br/> This is not because queerness is a mental illness, but because homophobia and transphobia create ongoing stress that weighs on our community. <br/><br/> My motto- there is nothing wrong with you! I can help you learn to survive in a society that is not fully accepting at this time.  </p>
                </div>
                {/* <h3><button className='btn'>En Español</button></h3> */}
            </div>
        )
    }
}

export default About;