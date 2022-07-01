import { Subject } from "rxjs";
import { Note } from "../note";
import { ActionTypes } from "./actions";

interface InitialState {
    notes: any;
}

interface MyEvent {
    type: ActionTypes;
    payload?: Object;
}

let state: InitialState = {
    notes: [],
};

export const store = new Subject<InitialState>();
export const eventDispatcher = new Subject<MyEvent>();

eventDispatcher.subscribe((data: MyEvent) => {
    debugger;
    switch (data.type) {
        case ActionTypes.GET_NOTES:
            store.next(state);
            break;

        case ActionTypes.CREATE_NOTE:
            state = {
                notes: [...state.notes, data.payload]
            };

            store.next(state)
            break;
        case ActionTypes.DELETE_NOTE:
            const { notes } = state;

            const id = data.payload;
            const updatedNotes = notes.filter((note: Note) => note.id !== id);

            state = { notes: updatedNotes };
            store.next(state);
    }
})