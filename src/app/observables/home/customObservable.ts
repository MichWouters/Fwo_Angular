import { Observable } from "rxjs";

export class CustomObservables{
    public customIntervalObservable = new Observable(observer =>{
        let count = 0;

        setInterval(() => {
            observer.next(count);

            if (count >= 12) {
                observer.complete();
            }

            if (count > 15) {
                observer.error(new Error('Count cannot be more than 15'));
            }

            count += 5;

        }, 2000)

    });
}