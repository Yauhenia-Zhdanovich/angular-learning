import {
  Component,
  Input,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
export class DatePickerComponent implements ControlValueAccessor {
  @Input()
  public _datePickerValue: string = '';

  @Input()
  public isTouched: boolean;

  @Input()
  public isValid: boolean;

  public get datePickerValue(): string {
    return this._datePickerValue;
  }

  public set datePickerValue(value: string) {
    this._datePickerValue = value;
    this.propagateChange(this._datePickerValue);
  }

  public writeValue(value: any): void {
    if (value !== undefined) {
      this.datePickerValue = value;
    }
  }

  public propagateChange = (_: string) => {}

  public registerOnChange(fn): void {
    this.propagateChange = fn;
  }

  public propagateTouch = (_: string) => {}

  public registerOnTouched(fn): void {
    this.propagateTouch = fn;
  }

  public onInput(event: any): void {
    this.datePickerValue = event.target.value;
  }
}
