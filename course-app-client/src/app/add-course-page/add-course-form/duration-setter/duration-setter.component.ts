import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'duration-setter',
  templateUrl: './duration-setter.component.html',
  styleUrls: ['./duration-setter.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationSetterComponent),
      multi: true
    }
  ]
})

export class DurationSetterComponent implements ControlValueAccessor {
  @Input()
  public pureDurationSetterValue: number;

  @Input()
  public isTouched: boolean;

  @Input()
  public isValid: boolean;

  public get durationSetterValue(): number {
    return this.pureDurationSetterValue;
  }

  public set durationSetterValue(value: number) {
    this.pureDurationSetterValue = value;
    this.propagateChange(this.pureDurationSetterValue);
  }

  public writeValue(value: number): void {
    if (value !== undefined) {
      this.pureDurationSetterValue = value;
    }
  }

  public propagateChange = (_: any) => {}

  public registerOnChange(fn): void {
    this.propagateChange = fn;
  }

  public propagateTouch = (_: string) => {}

  public registerOnTouched(fn): void {
    this.propagateTouch = fn;
  }

  public onInputChange(event): void {
    this.durationSetterValue = event.target.value;
  }
}
