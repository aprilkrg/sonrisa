import React from 'react';
import { Link } from 'react-router-dom';

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
            <div>
                <Link 
                    to={{ pathname: '/edit', 
                    state: {clickedOnResource: resourceFromParent} }}>
                EDIT</Link>
                <button
                    onClick={() => handleDeleteResource(resourceFromParent._id)}
                >
                DELETE</button>
            </div>
        </div>

    )
}

export default ResourceCard;