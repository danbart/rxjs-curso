import { ajax } from 'rxjs/ajax';



const url = 'http://httpbin.org/delay/1';

/* ajax.put(url,{
    id: 1,
    nombre: 'danilo'
}, {
    'mi-token': 'asdgdsaf'
}).subscribe(console.log) */


ajax({
    url,
    method: 'GET', // 'POST' | 'DELETE' | 'PUT'
    headers: {
        'mi-token' : '1s5af15ds1fasd'
    },
    body: {
        id: 1,
        nombre: 'danilo'
    }
}).subscribe(console.log)