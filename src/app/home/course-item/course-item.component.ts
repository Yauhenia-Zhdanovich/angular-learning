import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
})

export class CourseItemComponent {
  @Input()
  public course: string;

   @Output()
   public itemDeleted: EventEmitter<number> = new EventEmitter();

  public onDelete(id: number): void {
    this.itemDeleted.emit(id);
  }
}
