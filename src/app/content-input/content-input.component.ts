import { Component, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { Content } from '../content';

@Component({
  selector: 'app-content-input',
  templateUrl: './content-input.component.html',
  styleUrls: ['./content-input.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    CommonModule,
    FormsModule
  ],
})
export class ContentInputComponent {

  @ViewChild("messageForm") messageForm!: NgForm;

  @Output() onSubmitEvent = new EventEmitter();

  constructor(private http: HttpClient) { }
  onSubmit(): void {
    this.http.post<any>(
      "http://localhost:8080/messages",
      this.messageForm.value,
      { withCredentials: true },
    ).subscribe((data: Content) => this.onSubmitEvent.emit(data.message))
  }
}
