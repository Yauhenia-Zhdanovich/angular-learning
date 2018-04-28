import { Component } from '@angular/core';

@Component({
  selector: 'toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})

export class ToolboxComponent {
  public courseName: string;

  public logName (): void {
    console.log(this.courseName);
  }
}
