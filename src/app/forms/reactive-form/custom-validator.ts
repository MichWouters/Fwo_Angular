import { FormControl } from "@angular/forms";

export class CustomValidators {

    static isNameForbidden(control: FormControl): { [s: string]: boolean } | null {
        if (['Jake', 'Dick', 'Michiel'].indexOf(control.value) !== -1) {
            return { 'invalidUserName': true };
        }
        return null;
    }
}