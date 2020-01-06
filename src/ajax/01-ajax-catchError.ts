import { ajax, AjaxError } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


const url = 'https://api.github.com/userxxxs?per_page=5';

// maneja errores
const manejaErrores = (response: Response ) => {


    if (!response.ok) {
        throw new Error( response.statusText )
    }

    return response;

}

const atrapaError = (err: AjaxError) => {
        console.warn( 'Error ', err.message);
        return of([]);
}

const fetchPromesa = fetch( url );

/* fetchPromesa
    .then( resp => resp.json() )
    .then( data => console.log( 'data: ', data) )
    .catch( err => console.warn('Error en usuario', err)) */


/* fetchPromesa
.then( manejaErrores )
    .then( resp => resp.json() )
    .then( data => console.log( 'data: ', data) )
    .catch( err => console.warn('Error en usuario', err)) */

// peticion ajax desde RxJs

ajax( url ).pipe(
    map( resp => resp.response ),
    catchError( atrapaError )
).subscribe(users => console.log('usuarios: ', users))

