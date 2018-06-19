import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';
import { CourseItem } from '../../shared/interfaces/course-interface';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
})

export class CourseItemComponent implements OnInit {
  private twoWeeks: number = 86400000 * 14;
  public isFresh: boolean;
  @Input()
  public course: CourseItem;

  @Output()
  public itemDeleted: EventEmitter<number> = new EventEmitter();

  private isFreshCheck(date: Date): boolean {
    let currentDate: number = Date.now();
    let creationDate: number = Date.parse(date.toString());
    return creationDate < currentDate && creationDate >= currentDate - this.twoWeeks;
  }

   public ngOnInit(): void {
     this.isFresh = this.isFreshCheck(this.course.creatingDate);
   }

  public onDelete(id: number): void {
    this.itemDeleted.emit(id);
  }
}
