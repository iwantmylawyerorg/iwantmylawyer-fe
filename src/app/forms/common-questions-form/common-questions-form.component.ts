import {Component, ViewChild} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatTable, MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";

export interface CommonQuestion {
  question: string;
  position: number;
  answer: string;
}

const QUESTION_DATA: CommonQuestion[] = [];

@Component({
  selector: 'app-common-questions-form',
  standalone: true,
  imports: [MatButtonModule, MatTableModule,FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './common-questions-form.component.html',
  styleUrl: './common-questions-form.component.css'
})
export class CommonQuestionsFormComponent {
  questionValue: string = ''; // Bind input values
  answerValue: string = '';
  displayedColumns: string[] = ['position', 'question', 'answer'];
  dataToDisplay = [...QUESTION_DATA];

  dataSource = new ExampleDataSource(this.dataToDisplay);

  addData() {
    const position = this.dataToDisplay.length+1;
    this.dataToDisplay.push({ position, question: this.questionValue, answer: this.answerValue });
    this.clearInput();
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }
  clearInput(){
    this.questionValue = '';
    this.answerValue = '';
  }
}

class ExampleDataSource extends DataSource<CommonQuestion> {
  private _dataStream = new ReplaySubject<CommonQuestion[]>();

  constructor(initialData: CommonQuestion[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<CommonQuestion[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: CommonQuestion[]) {
    this._dataStream.next(data);
  }
}

