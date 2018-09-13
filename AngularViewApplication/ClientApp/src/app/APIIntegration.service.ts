import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()

export class APIIntegrationService {

  constructor(private http: HttpClient) { }

  // To get the students list
  getStudents(): Observable<any> {
    return this.http.get("https://localhost:44324/api/values");
  }

  //To get the search result
  searchStudent():Observable<any> {
    return this.http.post("https://localhost:44324/api/values","student");
  }
}
