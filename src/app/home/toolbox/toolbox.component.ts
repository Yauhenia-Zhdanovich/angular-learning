import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css'],
})

export class ToolboxComponent {
  @Output()
  public searchValue: EventEmitter<string> = new EventEmitter();

  public courseName: string;

  constructor() {
    this.courseName = '';
    this.searchValue.emit(this.courseName);
  }

  public logName (): void {
    this.searchValue.emit(this.courseName);
  }
}
