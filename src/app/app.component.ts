import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { PreliminaryDataComponent } from './feature/preliminary-data/preliminary-data.component';
import { CardComponent } from './core/shared/card/card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, PreliminaryDataComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  users$!: Observable<any>;
  private http = inject(HttpClient)

  ngOnInit(): void {
    this.users$ = this.http.get('/users').pipe(
      tap(user => console.log(user)
      )
    )
  }
}
