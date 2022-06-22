import { FormControl } from "@angular/forms";

export class MyCustomValidator {
    static invalidProjectName(control: FormControl): { [s: string]: boolean } | null {
        if (control.value === 'Test') {
            return { 'invalidProjectName': true };
        }

        return null;
    }
}