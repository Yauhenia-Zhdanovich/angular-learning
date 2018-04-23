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
  // TODO solve any type problem
  @Output()
  public itemDeleted: any = new EventEmitter<number>();
  public onDelete (id: number): void {
    this.itemDeleted.emit(id);
  }
}
