import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Student } from '../../Interfaces/student';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StudentService } from '../../services/estudiante.service';
import { error } from 'console';




@Component({
  selector: 'app-listado-estudiante',
  templateUrl: './listado-estudiante.component.html',
  styleUrl: './listado-estudiante.component.css'
})
export class ListadoEstudianteComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'age','gender','currentCourse','email', 'actions'];
  dataSource = new MatTableDataSource<Student>();
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _sanackbar: MatSnackBar, private _studentService:StudentService){ }
  ngOnInit(): void {
    this.getStudentsCRUD();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;   
    // if(this.dataSource.data){
    //   this.paginator._intl.itemsPerPageLabel = 'items per page';
    // } 

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  

  getStudentsCRUD(){
    this.loading = true;
    this._studentService.getStudents().subscribe(data => {
      this.loading = false;
      this.dataSource.data = data;
    }, error => {
      this.loading = false;
    })
  }
  DeleteStudent(id: number) {
    this.loading = true;
    this._studentService.deleteStudent(id).subscribe(() => {
      this.SuccessMessage();
      this.loading = false;
      this.getStudentsCRUD()
    });   
  }

  SuccessMessage() {
    this._sanackbar.open('The student was successfully deleted.','', {
      duration: 2000,
      horizontalPosition: 'right',
    });
    
  }
}
