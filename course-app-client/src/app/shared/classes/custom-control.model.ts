export class CustomControl {
  constructor() {}

  public propagateChange = (_: any) => {};

  public propagateTouch = () => {};

  public registerOnChange(fn): void {
      this.propagateChange = fn;
  }

  public registerOnTouched(fn): void {
      this.propagateTouch = fn;
  }
}
