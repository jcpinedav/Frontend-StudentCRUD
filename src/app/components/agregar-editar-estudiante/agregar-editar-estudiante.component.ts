import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../Interfaces/student';
import { StudentService } from '../../services/estudiante.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-editar-estudiante',
  templateUrl: './agregar-editar-estudiante.component.html',
  styleUrl: './agregar-editar-estudiante.component.css'
})
export class AgregarEditarEstudianteComponent implements OnInit{
  loading: boolean = false;
  form: FormGroup;
  id: number;
  operation: string = 'Add';

  constructor(private fb: FormBuilder, private _studentServive: StudentService, private _sanackbar: MatSnackBar, private router: Router, private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      currentCourse: ['', Validators.required],
      email: ['', Validators.required],

    })
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if(this.id != 0){
      this.operation = 'Edit';
      this.getStudentEDIT(this.id);
    }
  }

  getStudentEDIT(id: number){
    this.loading = true;
    this._studentServive.getStudent(id).subscribe(data => {
      this.form.patchValue({
        name: data.name,
        age: data.age,
        gender: data.gender,
        currentCourse: data.currentCourse,
        email: data.email
      })
      this.loading = false;
    })
  }
  
  AddEditStudent() {

    //Creating the Object
    const student: Student = {
      name: this.form.value.name,
      age: this.form.value.age,
      gender: this.form.value.gender,
      currentCourse: this.form.value.currentCourse,
      email: this.form.value.email
    }

    if(this.id != 0){
      student.id = this.id;
      this.EditStudent(this.id, student);
    } else {
      this.SuccessAddMessage(student);
    }
    
  }  

  EditStudent(id: number, student: Student) {
    this.loading = true;
    this._studentServive.updateStudent(id, student).subscribe(() => {
      this.loading = false;
      this.SuccessMessage('updated');
      this.router.navigate(['/listStudents']);

    })
  }

  SuccessAddMessage(student: Student) {
    this._studentServive.addStudent(student).subscribe(data => {
      this.SuccessMessage('created');
      this.router.navigate(['/listStudents']);
    })
  }

  SuccessMessage(input: string) {
    this._sanackbar.open(`The student was succesfully ${input}.`,'', {
      duration: 2000,
      horizontalPosition: 'right',
    });
    
  }
}
