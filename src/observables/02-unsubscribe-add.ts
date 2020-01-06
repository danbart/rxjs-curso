
import { Observable, Observer, Subscriber } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]; ', value),
    error: error => console.warn('Error [obd]: ', error),
    complete: () => console.info('completado [obs]')
}


const intervalo$ = new Observable<number>( subscriber => {

    // Crear un contador, 1,2,3,4,5....._mat-animation-noopable

    let contador = 0;

    const interval = setInterval( () => {
    
        contador++;
        subscriber.next( contador );

    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 4500);

    return  () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }

} );


const subs1 = intervalo$.subscribe( num => console.log('Num: ', num));
const subs2 = intervalo$.subscribe( num => console.log('Num: ', num));
const subs3 = intervalo$.subscribe( num => console.log('Num: ', num));

subs1.add(subs2).add(subs3);

setTimeout( () => {
     subs1.unsubscribe()
    // subs2.unsubscribe()
    // subs3.unsubscribe()
    console.log('Completado timeout');
}, 6000)


