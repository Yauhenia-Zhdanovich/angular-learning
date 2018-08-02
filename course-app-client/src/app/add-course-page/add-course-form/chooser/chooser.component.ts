import {
  Component,
  OnInit,
  Input,
  forwardRef,
  OnDestroy
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';

import { CreateAuthor } from '../../../shared/interfaces/create-author.interface';
import { FetchAuthorService } from '../../../core/services/fetch-author.service';
import { subscribeOn } from '../../../../../node_modules/rxjs/operator/subscribeOn';

@Component({
  selector: 'chooser',
  templateUrl: './chooser.component.html',
  styleUrls: ['./chooser.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChooserComponent),
      multi: true
    }
  ]
})
export class ChooserComponent implements ControlValueAccessor, OnInit {
  public getAuthors: Observable<CreateAuthor>;
  public fetchAuthorService: FetchAuthorService;
  public authors: CreateAuthor;

  @Input()
  public isValid: boolean;

  @Input()
  public isTouched: boolean;

  @Input()
  public pureChooserValue: any[] = [];

  constructor(fetchAuthorService: FetchAuthorService) {
    this.fetchAuthorService = fetchAuthorService;
  }

  public ngOnInit(): void {
    this.getAuthors = this.fetchAuthorService.getAuthors();
    console.log(this.pureChooserValue);
    // this.getAuthors.subscribe(data => console.log(data));
  }

  public get chooserValue(): string[] {
    return this.pureChooserValue;
  }

  public set chooserValue(value: string[]) {
    this.pureChooserValue = value;
    this.propagateChange(this.pureChooserValue);
  }

  public writeValue(value: null | string[]): void {
    if (value !== undefined && value !== null) {
      this.chooserValue = value;
    } else {
      this.chooserValue = [];
    }
  }

  public propagateChange = (_: null | string[]) => {};

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public propagateTouch = (_: string) => {}

  public registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  public onCheckboxChange(author: CreateAuthor): void {
    author.checked = !author.checked;
    if (author.checked) {
      this.pureChooserValue.push(author.name);
      this.chooserValue = this.pureChooserValue;
    } else {
      this.chooserValue = this.pureChooserValue.filter(item => item !== author.name);
    }
  }

  public onPlusClick(author: string): void {
    if (this.chooserValue.indexOf(author) > 0) {
      return;
    }
    this.pureChooserValue.push(author);
    this.chooserValue = this.pureChooserValue;
    console.log(this.chooserValue);
  }

  public onMinusClick(author: string): void {
    this.chooserValue = this.chooserValue.filter(element => element !== author);
  }
}
