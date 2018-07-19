import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateDate } from '../../core/validators/date-validator';

@Component({
  selector: 'add-course-form',
  templateUrl: './add-course-form.component.html',
  styleUrls: ['./add-course-from.component.css'],
})
export class AddCourseFormComponent {
  private formBuilder: FormBuilder;
  public courseForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
    this.createForm();
  }

  public createForm(): void {
    this.courseForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      date: ['', [Validators.required, validateDate]],
      duration: [undefined, [Validators.required, Validators.pattern('[0-9]*$')]],
      authors: [undefined, Validators.required]
    });
  }

  public onSubmit(): void {
    console.log(this.courseForm.dirty);
  }

  public onSave(): void {
    console.log('course saved');
    this.courseForm.reset();
  }

  public onCancel(): void {
    console.log('canceled');
  }
}
