import { Observable, Observer, Subscriber, Subject } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]; ', value),
    error: error => console.warn('Error [obd]: ', error),
    complete: () => console.info('completado [obs]')
}

const intervalos$ = new Observable<number>( subs => {
    const intervalID = setInterval(
        () => subs.next( Math.random() ), 8000
    )

    return () => clearInterval( intervalID );
})

// const subs1 = intervalos$.subscribe( rnd => console.log('Subs1 ', rnd) );
// const subs2 = intervalos$.subscribe( rnd => console.log('susb2 ', rnd) );

const subject$ = new Subject();
intervalos$.subscribe( subject$ );

const subs1 = subject$.subscribe( rnd => console.log('Subs1 ', rnd) );
const subs2 = subject$.subscribe( rnd => console.log('susb2 ', rnd) );


