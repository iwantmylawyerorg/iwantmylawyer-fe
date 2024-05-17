import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function createPasswordStrengthValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

    const value = control.value;

    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]+/.test(value);

    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);

    const whiteRule:boolean = /\s/.test(value);

    const passwordValid = hasUpperCase && !whiteRule && hasSpecialChar;

    return !passwordValid ? {passwordStrength:{
        hasUpperCase: true,
        whiteRule:true,
        hasSpecialChar:true}}: null;
  }
}
