import {
  Component,
  Input,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { CustomControl } from '../../../shared/classes/custom-control.model';

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})
export class DatePickerComponent extends CustomControl implements ControlValueAccessor {
  @Input()
  public pureDatePickerValue: string;

  @Input()
  public isTouched: boolean;

  @Input()
  public isValid: boolean;

  public get datePickerValue(): string {
    return this.pureDatePickerValue;
  }

  public set datePickerValue(value: string) {
    this.pureDatePickerValue = value;
    this.propagateChange(this.pureDatePickerValue);
  }

  public writeValue(value: string): void {
    if (value !== undefined) {
      this.datePickerValue = value;
    }
  }

  public onInput(event): void {
    this.datePickerValue = event.target.value;
  }
}
