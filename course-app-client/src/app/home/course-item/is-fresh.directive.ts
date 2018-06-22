import { Directive,
  ElementRef,
  Input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[isFresh]'
})

export class IsFreshDirective implements OnInit {
  private el: ElementRef;

  @Input('isFresh')
  public isFresh: boolean;

  constructor(el: ElementRef) {
    this.el = el;
  }

  public ngOnInit(): void {
    if (this.isFresh) {
      this.el.nativeElement.style.border = '1px solid #028973';
    } else {
      this.el.nativeElement.style.border = '1px solid #C9283E';
    }
  }
}
