import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styles here are scoped to the markup template above
  styleUrls: ['./app.component.css']
})

// Make this component available to the rest of the the application
// and define variables and functions that are made available to the component template
export class AppComponent {
  // title will be available as {{title}} in the view template
  title = 'First NG App';
}
