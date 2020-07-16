import tokenService from './tokenService';

const BASE_URL = 'localhost:3001';

// index
export function getAllContactFormsAPI() {
    return fetch(BASE_URL, {
        headers: {
            'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        }
    })
    .then(allContactForms => allContactForms.json());
}

// create
export function createContactFormAPI(formToCreate) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        },
        body: JSON.stringify(formToCreate)
    }).then(newForm => newForm.json());
}
