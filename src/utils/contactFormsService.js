import tokenService from './tokenService';

const BASE_URL = '/api/contactForms';

export function getAllContactFormsAPI() {
    return fetch(BASE_URL, {
        headers: {
            'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        }
    })
    .then(allContactForms => allContactForms.json());
}

export function createContactFormAPI(contactFormToCreate) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        },
        body: JSON.stringify(contactFormToCreate)
    }).then(newContactForm => newContactForm.json());
}

export function deleteContactFormAPI(contactFormIdToDelete) {
    return fetch(`${BASE_URL}/${contactFormIdToDelete}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        }
    }).then(deletedContactForm => deletedContactForm.json());
}
