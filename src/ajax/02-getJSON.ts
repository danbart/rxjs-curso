import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON( url, {
    'Content-Type': 'aplication/json',
    'mi-token': 'sadfsadfsa1d51515'
} );

obs$.subscribe( data => console.log('data: ', data))
