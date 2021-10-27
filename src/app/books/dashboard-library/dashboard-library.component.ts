import {Component, OnDestroy, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {BooksService} from "../services/books.service";
import {IBook} from "../interfaces/ibook";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-dashboard-library',
  templateUrl: './dashboard-library.component.html',
  styleUrls: ['./dashboard-library.component.css']
})
export class DashboardLibraryComponent implements OnInit, OnDestroy{

  title: string = 'Libros';
  books: IBook[] = [];
  errorMessage: string = '';
  subscription!: Subscription;

  constructor(private breakpointObserver: BreakpointObserver, private bookService: BooksService) {}

  ngOnInit(): void {
    console.log('Init de DashBoard');
    this.subscription = this.bookService.getAllBooks().subscribe({
      next: books => {
          this.books = books;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    console.log("Destroy Dashboard");
    this.subscription.unsubscribe();
  }
}
