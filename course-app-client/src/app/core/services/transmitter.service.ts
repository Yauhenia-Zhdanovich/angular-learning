import { Injectable } from '@angular/core';

@Injectable()
export class TransmitterService {
  public searchValue: string;

  public getValue(value: string): void {
    this.searchValue = value;
  }
}
