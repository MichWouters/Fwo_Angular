import { Observable } from "rxjs";

export class CustomObervables {
    public customIntervalObservable = new Observable(observer => {
        let count = 0;

        setInterval(() => 
        {
            observer.next(count);

            if (count === 2) 
            {
                observer.complete();
            }

            if (count > 3) 
            {
                observer.error(new Error('Count can not be larger than 3'));
            }

            count++;
        }, 1000)
    });
}