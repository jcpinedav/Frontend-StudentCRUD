import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/estudiante.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../Interfaces/student';

@Component({
  selector: 'app-ver-estudiante',
  templateUrl: './ver-estudiante.component.html',
  styleUrl: './ver-estudiante.component.css'
})
export class VerEstudianteComponent implements OnInit{
    id: number;
    student!: Student;

  constructor(private _studentServie: StudentService, private aRoute: ActivatedRoute) {
      this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    }

  ngOnInit(): void {
    this.GetStudent();
  }

  GetStudent() {
    this._studentServie.getStudent(this.id).subscribe(data => {
      this.student = data;
    })
  }

}
