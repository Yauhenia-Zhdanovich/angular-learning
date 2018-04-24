import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  inputs: ['state:passedState']
})
export class HeaderComponent implements OnInit{
  public state: string;
   ngOnInit() {
    console.log(this.state);
  }
}
