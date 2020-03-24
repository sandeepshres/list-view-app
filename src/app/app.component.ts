import { Component, OnInit } from '@angular/core';
import { GradesService } from './grades.service';
import { MDCTopAppBar } from '@material/top-app-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public grades = [];
  public student: string;

  constructor(private gradeService: GradesService) { }

  ngOnInit() {
    this.gradeService.getGrades().subscribe(data => {
      data.sort((a, b) => {
        if (a.grade > b.grade) { return 1; }
        if (a.grade < b.grade) { return -1; }
        if (a.studentName > b.studentName) { return 1; }
        if (a.studentName < b.studentName) { return -1; }
      }
      );
      this.grades = data;
    });
  }
  applyFilter() {
    if (this.student !== '') {
      this.grades = this.grades.filter(res => res.studentName.toLocaleLowerCase().match(this.student.toLocaleLowerCase()));
    } else if (this.student === '') {
      this.ngOnInit();
    }
  }
}
