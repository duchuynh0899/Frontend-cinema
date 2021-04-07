import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

export class TValidators extends Validators {

  static compareValidator(controlTarget: AbstractControl, errorMessage: string) {
    return (control: FormControl) => {
      if (control.value && control.value !== controlTarget.value) {
        return { error: errorMessage };
      }
      return null;
    };
  }

  static setCompareValidator(
    myForm: FormGroup, control: string, controlTarget: string,
    errorMessage: string, validator: ValidatorFn[] = []) {
    const targetControl = myForm.controls[controlTarget];
    targetControl.valueChanges.subscribe(() => myForm.get(control).updateValueAndValidity());
    myForm.get(control).setValidators([...validator, this.compareValidator(targetControl, errorMessage)]);
  }


}
