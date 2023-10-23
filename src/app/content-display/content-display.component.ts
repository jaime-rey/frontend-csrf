import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgForOf } from '@angular/common';
import { Content } from '../content';
import { ContentInputComponent } from '../content-input/content-input.component';

@Component({
  selector: 'app-content-display',
  templateUrl: './content-display.component.html',
  styleUrls: ['./content-display.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    NgFor,
    NgForOf,
    ContentInputComponent],
})
export class ContentDisplayComponent {

  title = "hello";

  messages: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Content[]>(
      "http://localhost:8080/messages"
    ).subscribe((data: Content[]) =>
      this.messages = data.map(content => content.message))
  }

  onMessageCreated(message: string): void {
    this.messages.push(message)
  }
}
