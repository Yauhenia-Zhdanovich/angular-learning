import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomePageComponent {
  public searchValue: string;

  public onSearch(searchName: string): void {
    this.searchValue = searchName;
  }
}
