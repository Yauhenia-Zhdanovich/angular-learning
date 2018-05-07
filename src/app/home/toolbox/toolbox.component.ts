import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';
import { TransmitterService } from '../../core/services/transmitter.service';

@Component({
  selector: 'toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css'],
  providers: [ TransmitterService ],
})

export class ToolboxComponent {
  @Output()
  public searchValue: EventEmitter<string> = new EventEmitter();

  public courseName: string;
  public transmitterService: TransmitterService;

  constructor(transmitterService: TransmitterService) {
    this.transmitterService = transmitterService;
  }

  public logName (): void {
    this.transmitterService.getValue(this.courseName);
    this.searchValue.emit(this.courseName);
  }
}
