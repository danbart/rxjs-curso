
import { Observable, Observer } from 'rxjs';

// const obs$ = Observable.create();

const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]; ', value),
    error: error => console.warn('Error [obd]: ', error),
    complete: () => console.info('completado [obs]')
}

const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('mundo');

    // deja de enviar observables
    // subs.complete();

    // forzar un erro
    // const a = undefined;
    // a.nombre = 'Fernando';


    subs.next('mundo');

});

obs$.subscribe( observer );

// obs$.subscribe( 
//    valor => console.log('netx: ', valor),
//    error => console.warn('error: ', error),
//    () => console.info('Completado')
// );





