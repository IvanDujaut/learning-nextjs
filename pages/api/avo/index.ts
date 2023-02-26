/**
 * NextJs cuando se trata de APIs 
 * funciona con funciones de javaScript
 * como por ejemplo lo puede ser:
 */

import { IncomingMessage, ServerResponse } from "http";
import DB from '@database'; 

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
    const db = new DB();
    const allEntries = await db.getAll(); //await porque el metodo es async 
    const length = allEntries.length;

    response.statusCode = 200; //ok
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({data: allEntries, length: length}));
}

export default allAvos;
