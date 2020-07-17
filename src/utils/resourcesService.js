import tokenService from './tokenService';

const BASE_URL = '/api/resources';

export function getAllResourcesAPI() {
    return fetch(BASE_URL, {
        headers: {
            'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        }
    })
    .then(allResources => allResources.json());
}

export function createResourceAPI(resourceToCreate) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        },
        body: JSON.stringify(resourceToCreate)
    }).then(newResource => newResource.json());
}

export function deleteResourceAPI(resourceIdToDelete) {
    return fetch(`${BASE_URL}/${resourceIdToDelete}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        }
    }).then(deletedResource => deletedResource.json());
}

export function updateResourceAPI(resourceToUpdate) {
    return fetch(`${BASE_URL}/${resourceToUpdate._id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        },
        body: JSON.stringify(resourceToUpdate)
    }).then(updatedResource => updatedResource.json());
}