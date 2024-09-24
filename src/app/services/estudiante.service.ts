import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Student } from '../Interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Student'

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getStudent(id: number): Observable<Student>{
    return this.http.get<Student>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }

  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.myAppUrl}${this.myApiUrl}`, student);
  }

  updateStudent(id: number, student: Student): Observable <void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`, student);
  }
}
