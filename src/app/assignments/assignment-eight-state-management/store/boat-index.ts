import { Subject } from 'rxjs';
import { Boat } from '../boat';
import { BoatActionTypes } from './boat-actionTypes';

interface InitialState {
    boats: any;
}

interface MyBoatEvent {
    type: BoatActionTypes;
    payload?: Object;
}

let state: InitialState = {
    boats: [],
};

export const boatStore = new Subject<InitialState>();
export const boatEventDispatcher = new Subject<MyBoatEvent>();

boatEventDispatcher.subscribe((data: MyBoatEvent) => {
    switch (data.type) {
        case BoatActionTypes.GET_ALL_BOATS:
            boatStore.next(state);
            break;
        case BoatActionTypes.GET_AVAILABLE_BOATS:
            throw new Error('Not yet implemented');
            break;
        case BoatActionTypes.RENT_BOATS:
            throw new Error('Not yet implemented');
            break;
        case BoatActionTypes.CREATE_BOAT:
            state = {
                boats: [...state.boats, data.payload]
            };
            boatStore.next(state)
            break;
        case BoatActionTypes.DELETE_BOAT:
            const { boats } = state;

            const id = data.payload;
            const updatedBoats = boats.filter((boat: Boat) => boat.id !== id);

            state = { boats: updatedBoats };
            boatStore.next(state);
            break;
    }
});