import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  public searchValue: string;

  constructor() {}

  public onSearch(searchName: string): void {
    this.searchValue = searchName;
  }
}
