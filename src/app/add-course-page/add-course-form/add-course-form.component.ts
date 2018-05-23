import { Component } from '@angular/core';

@Component({
  selector: 'add-course-form',
  templateUrl: './add-course-form.component.html',
  styleUrls: ['./add-course-from.component.css'],
})

export class AddCourseFormComponent {
  public onSave(): void {
    console.log('course saved');
  }

  public onCancel(): void {
    console.log('canceled');
  }
}
