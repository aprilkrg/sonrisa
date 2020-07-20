import React from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

function ResourceCard({ resourceFromParent, handleDeleteResource }) {
    return(
        <div>
            <div>
                <h3>{resourceFromParent.title}</h3>
            </div>
            <div>
                <dl>
                    <dt>Topic</dt>
                    <dd>{resourceFromParent.topic}</dd>
                    <dd>{resourceFromParent.body}</dd>
                </dl>
            </div>
            {userService.isAdmin() ? 
            <div>
                <Link 
                    to={{ pathname: '/edit', state: {clickedOnResource: resourceFromParent} }}
                    className='btn'
                >    
                EDIT</Link>
                <button
                    className='btn'
                    onClick={() => handleDeleteResource(resourceFromParent._id)}
                >
                DELETE</button>
            </div>
                :
                <button
                    className='btn'
                >SAVE</button>
            }

        </div>

    )
}

export default ResourceCard;