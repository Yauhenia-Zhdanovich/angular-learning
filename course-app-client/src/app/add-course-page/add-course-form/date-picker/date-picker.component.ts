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
  public pureDatePickerValue: string = '';

  @Input()
  public isTouched: boolean;

  @Input()
  public isValid: boolean;

  private propagateChange = (_: string) => {};
  private propagateTouch = () => {};

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

  public registerOnChange(fn): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn): void {
    this.propagateTouch = fn;
  }

  public onInput(event): void {
    this.datePickerValue = event.target.value;
  }
}
