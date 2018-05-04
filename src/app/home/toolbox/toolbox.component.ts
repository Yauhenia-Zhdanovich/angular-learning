import { Component } from '@angular/core';
import { TransmitterService } from '../../core/services/transmitter.service';

@Component({
  selector: 'toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css'],
  providers: [ TransmitterService ],
})

export class ToolboxComponent {
  public courseName: string;
  public transmitterService: TransmitterService;

  constructor(transmitterService: TransmitterService) {
    this.transmitterService = transmitterService;
  }

  public logName (): void {
    this.transmitterService.getValue(this.courseName);
  }
}
