import {
  Component,
  OnInit,
  Input,
  forwardRef,
  OnDestroy
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FetchAuthorService } from '../../../core/services/fetch-author.service';
import { Subscription } from 'rxjs';

import { CreateAuthor } from '../../../shared/interfaces/create-author.interface';

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

export class ChooserComponent implements ControlValueAccessor, OnInit, OnDestroy {
  private getAuthorsSub: Subscription;
  public fetchAuthorService: FetchAuthorService;
  public authors: CreateAuthor;

  @Input()
  public _chooserValue: string[] = [];

  constructor(fetchAuthorService: FetchAuthorService) {
    this.fetchAuthorService = fetchAuthorService;
  }

  public ngOnInit(): void {
    this.getAuthorsSub = this.fetchAuthorService.getAuthors().subscribe(data => {
      this.authors = data;
    });
  }

  public ngOnDestroy(): void {
    this.getAuthorsSub.unsubscribe();
  }

  public get chooserValue(): string[] {
    return this._chooserValue;
  }

  public set chooserValue(value: string[]) {
    this._chooserValue = value;
    this.propagateChange(this._chooserValue);
  }

  public writeValue(value: null | string[]): void {    
    if (value !== undefined && value !== null) {
      this.chooserValue = value;
    } else {
      this.chooserValue = [];
    }
  }

  public propagateChange = (_: null | string[]) => {};

  public registerOnChange(fn): void {
    this.propagateChange = fn;
  }

  public propagateTouch = (_: string) => {}

  public registerOnTouched(fn): void {
    this.propagateTouch = fn;
  }

  public onCheckboxChange(author: CreateAuthor): void {
    author.checked = !author.checked;
    if (author.checked) {
      this._chooserValue.push(author.name);
      this.chooserValue = this._chooserValue;
    } else {
      this.chooserValue = this._chooserValue.filter(item => item !== author.name);
    }
  }
}
