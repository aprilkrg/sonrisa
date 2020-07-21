import React from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './ResourceCard.css';

function ResourceCard({ resourceFromParent, handleDeleteResource }) {
    return (
        <div className='ResourceCard'>
            <div >
                <div>
                    <h3>"{resourceFromParent.title}"</h3>
                </div>
                <div className='ResourceCard-topic'>
                    <p className='ResourceCard-topic'><i>Topic: </i></p>
                    <p className='ResourceCard-topic'>{resourceFromParent.topic}</p>
                </div>
                <div>
                    <p>{resourceFromParent.body}</p>
                </div>
            </div>
            {userService.isAdmin() ?
                <div className='ResourceCard-links'>
                    <Link
                        to={{ pathname: '/edit', state: { clickedOnResource: resourceFromParent } }}
                        className='btn'
                    >EDIT</Link>
                    <button
                        className='btn btn-cancel'
                        onClick={() => handleDeleteResource(resourceFromParent._id)}
                    >DELETE</button>
                </div>
                :
                ''
            }
        </div>

    )
}

export default ResourceCard;