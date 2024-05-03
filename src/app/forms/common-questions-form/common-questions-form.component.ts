import {Component, ViewChild} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatTable, MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
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
  dataSource = [...QUESTION_DATA];

  @ViewChild('table') table!: MatTable<CommonQuestion>;

  addData(question: string, answer: string) {
    const position = this.dataSource.length + 1;
    this.dataSource.push({ position, question, answer });
    this.clearInputFields();
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
  clearInputFields() {
    this.questionValue = '';
    this.answerValue = '';
  }
}
