
import { base_url, api_version } from "../constants";

//API para crear usuarios
export const singUpUser = (data) =>{
    //url del API Rest
    const url = `${base_url}/${api_version}/createUser`

    //Cabecera de la petición HTTP
    const params = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type" : "application/json",
        },
    };

    //API FETCH
    return fetch(url, params)
    .then((res) => res.json())
    .then( (result) => {
        if(result){
            //Una prueba de que viene del Back
            // console.log('Resultado desde la API:');
            // console.log(result);
            return result

        }
    })
    .catch(err => console.log(err.message))
}

//Api para loguear el usuario
export const userSignIn = (dataUser) => {
    const url = `${base_url}/${api_version}/log-in`
    const requestInit = {
        method: 'POST',
        body: JSON.stringify(dataUser),
        headers: {
            "Content-Type": "application/json"
        }
    }
    return fetch( url, requestInit )
    .then(res => res.json())
    .then( result => result ) //Return que va hacia el login
    .catch( err => console.log(err))
}