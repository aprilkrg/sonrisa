import React from 'react';
import ResourceCard from '../../components/ResourceCard/ResourceCard';

function ResourceListPage({ resourcesFromParent, handleDeleteResource }) {
    return (
        <>
            <h1>Resources</h1>
            <div>
                {resourcesFromParent.map(resource =>
                    <ResourceCard
                        key={resource._id}
                        resourceFromParent={resource}
                        handleDeleteResource={handleDeleteResource}
                    />
                )}
            </div>
        </>
    )
}

export default ResourceListPage;