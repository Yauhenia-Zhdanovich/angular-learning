import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Tutorial } from './core/models/course-app.model';
import { AppState } from './app.state';
// import * as TutorialActions from './core/actions/course-app.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  // public tutorials: Observable<Tutorial[]>;

  // constructor(private store: Store<AppState>) {
  //   this.tutorials = store.select('tutorial');
  // }

  // public addTutorial(name: string, url: string): void {
  //   this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}));
  // }
}
