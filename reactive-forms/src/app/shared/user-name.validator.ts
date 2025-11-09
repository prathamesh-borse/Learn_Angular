import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const forbidden = forbiddenName.test(control.value); // if userName contains the string admin, we set the forbidden flag to true else set it to false
        return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}