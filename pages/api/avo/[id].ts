import { NextApiRequest, NextApiResponse } from 'next';
import DB from '@database'; 

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
    const db = new DB();

    /**
     * necesitamos capturar el id que nos envian 
     * en la url, la forma de hacerlo es de una forma
     * similar a como lo hace NodeJs a traves del
     * objeto request, que es quien nos trae toda 
     * la informacion del request que recibe el 
     * servidor, asi si notros entramos a request.query...
     * 
     */
    const id = request.query.id; 
    
    const avo = await db.getById(id as string); //await porque el metodo es async 

    /*response.statusCode = 200; //ok
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({data: avo}));*/

    /**podemos hacer lo mismo de arriba
     * en una linea de codigo
     */

    response.status(200).json(avo);
}

export default allAvos;