import { FormControl } from '@angular/forms';

export function validateDate(formControl: FormControl) {
  const error = {
    'validateDate': {
      valid: false
    }
  };
  const tempDate: Date = new Date(formControl.value);
  if (formControl.value.length < 8) {
    return error;
  } 
  if (Object.prototype.toString.call(tempDate) === '[object Date]') {
    if (isNaN(tempDate.getTime())) {
      return error;
    } else {
      return null;
    }
  }
}
