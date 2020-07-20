import React from 'react';
import './ResourceListPage.css';
import ResourceCard from '../../components/ResourceCard/ResourceCard';

function ResourceListPage({ resourcesFromParent, handleDeleteResource }) {
    return (
        <>
            <div className='ResourceCardPage'>
                {resourcesFromParent.map(resource =>
                    <div className='ResourceCard'>
                    <ResourceCard
                        key={resource._id}
                        resourceFromParent={resource}
                        handleDeleteResource={handleDeleteResource}
                    />
                    </div>
                )}
                &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
        </>
    )
}

export default ResourceListPage;