import { initilizeApp } from 'firebase'

const app = initilizeApp ({
    
});

export const db = app.database();
export const namesRef = db.ref('names');