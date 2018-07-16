import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'add-course-form',
  templateUrl: './add-course-form.component.html',
  styleUrls: ['./add-course-from.component.css'],
})
export class AddCourseFormComponent {
  public heroForm: FormGroup = new FormGroup ({
    name: new FormControl()
  });
  public onSave(): void {
    console.log('course saved');
  }

  public onCancel(): void {
    console.log('canceled');
  }
}
