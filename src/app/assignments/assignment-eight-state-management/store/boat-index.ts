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

let allState: InitialState = {
    boats: [],
}

export const boatStore = new Subject<InitialState>();
export const boatEventDispatcher = new Subject<MyBoatEvent>();

boatEventDispatcher.subscribe((data: MyBoatEvent) => {
    const { boats } = state;

    switch (data.type) {
        case BoatActionTypes.GET_ALL_BOATS:
            state = { boats: allState.boats };
            boatStore.next(state);
            break;
        case BoatActionTypes.GET_AVAILABLE_BOATS:
            allState = {boats: state};
            const availableBoats = boats.filter((boat: Boat) => boat.isAvailable);
            state = { boats: availableBoats };

            boatStore.next(state);
            break;
        case BoatActionTypes.RENT_BOATS:
            const boat: Boat = boats.find((i: any) => i.id === data.payload)

            if (boat.isAvailable === false) {
                alert('This boat has already been rented');
            }

            boat.isAvailable = false;
            console.log(boat);
            boatStore.next(state);
            break;
        case BoatActionTypes.CREATE_BOAT:
            state = { boats: [...state.boats, data.payload] };
            boatStore.next(state)
            break;
        case BoatActionTypes.DELETE_BOAT:
            const updatedBoats = boats.filter((boat: Boat) => boat.id !== data.payload);

            state = { boats: updatedBoats };
            boatStore.next(state);
            break;
    }
});