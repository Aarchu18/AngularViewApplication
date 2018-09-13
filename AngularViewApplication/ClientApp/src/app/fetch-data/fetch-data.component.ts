import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIIntegrationService } from '../APIIntegration.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public studentDetails: StudentDetails[];
  public student: StudentSearch;
  

  constructor(private apiIntegration: APIIntegrationService) {
    this.apiIntegration.getStudents().subscribe(response => {
      console.log((response.studentListData));
      this.studentDetails = response.studentListData
    }
    );
  }

  Search() {
    this.apiIntegration.searchStudent().subscribe(response => {
      console.log((response.student));
    }
    );
  }

  

}

interface StudentDetails {
  studentId: number;
  studentName: string;
  studentClass: number;
  studentAge: number;
}
interface StudentSearch {
  SearchByAttribute: string;
  SearchText: string;
  SortByAttribute: string;
  MinRange: number;
  MaxRange: number;
}

