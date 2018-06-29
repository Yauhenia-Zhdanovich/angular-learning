import { Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[isFresh]'
})

export class IsFreshDirective implements OnInit {
  private el: ElementRef;
  public renderer: Renderer2;

  @Input('isFresh')
  public isFresh: boolean;

  constructor(el: ElementRef, renderer: Renderer2) {
    this.el = el;
    this.renderer = renderer;
  }

  public ngOnInit(): void {
    if (this.isFresh) {
      this.renderer.addClass(this.el.nativeElement, 'fresh');
    } else {
      this.renderer.addClass(this.el.nativeElement, 'out-of-date');
    }
  }
}
