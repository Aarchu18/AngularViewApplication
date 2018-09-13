import { Component } from '@angular/core';
import { APIIntegrationService } from './APIIntegration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //constructor(private apiIntegration: APIIntegrationService) {
  //  this.apiIntegration.getStudents().subscribe(response => {
  //    console.log(response);
  //  }
  //  );
  //}
}
