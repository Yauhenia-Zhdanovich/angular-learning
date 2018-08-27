import {
  Component,
  OnInit,
  Input,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';

import { CreateAuthor } from '../../../shared/interfaces';
import { FetchAuthorService } from '../../../core/services/fetch-author.service';
import { CustomControl } from '../../../shared/classes/custom-control.model';

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
export class ChooserComponent extends CustomControl implements ControlValueAccessor, OnInit {
  public getAuthors: Observable<CreateAuthor>;
  public fetchAuthorService: FetchAuthorService;

  @Input()
  public isValid: boolean;

  @Input()
  public isTouched: boolean;

  @Input()
  public pureChooserValue: string[] = [];

  constructor(fetchAuthorService: FetchAuthorService) {
    super();
    this.fetchAuthorService = fetchAuthorService;
  }

  public ngOnInit(): void {
    this.getAuthors = this.fetchAuthorService.getAuthors();
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

  public onPlusClick(author: string): void {
    this.propagateTouch();
    if (this.chooserValue) {
      if (this.chooserValue.indexOf(author) < 0) {
        this.pureChooserValue.push(author);
        this.chooserValue = this.pureChooserValue;
      }
    }
  }

  public onMinusClick(author: string): void {
    this.propagateTouch();
    this.chooserValue = this.chooserValue.filter(element => element !== author);
  }
}
