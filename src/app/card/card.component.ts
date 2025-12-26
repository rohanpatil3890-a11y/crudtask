import { Component, OnInit } from '@angular/core';
import { Icard } from '../model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


   topicsArr : Array<Icard> = [
    {
      title: "State Management with RxJS",
      content: "Describes managing application state using BehaviorSubject and Observables without external libraries.",
      id: "101"
    },
    {
      title: "Understanding Observables",
      content: "Explains what Observables are, how they work, and how to create them in RxJS.",
      id: "102"
    },
    {
      title: "Subjects vs BehaviorSubjects",
      content: "Covers the differences between Subject and BehaviorSubject and when to use each one.",
      id: "103"
    },
    {
      title: "RxJS Operators Basics",
      content: "Introduces common RxJS operators like map, filter, tap, and switchMap.",
      id: "104"
    },
    {
      title: "Handling HTTP Calls with RxJS",
      content: "Shows how to manage API calls in Angular using HttpClient and RxJS operators.",
      id: "105"
    },
    {
      title: "Error Handling in RxJS",
      content: "Explains error handling techniques using catchError, retry, and finalize operators.",
      id: "106"
    },
    {
      title: "Unsubscribing from Observables",
      content: "Describes memory leaks and how to prevent them using takeUntil and AsyncPipe.",
      id: "107"
    },
    {
      title: "Combining Multiple Observables",
      content: "Demonstrates how to combine streams using combineLatest, forkJoin, and zip.",
      id: "108"
    },
    {
      title: "Reactive Forms with RxJS",
      content: "Shows how Angular reactive forms leverage RxJS for value and status changes.",
      id: "109"
    },
    {
      title: "Performance Optimization using RxJS",
      content: "Covers techniques to optimize Angular app performance using debounceTime and distinctUntilChanged.",
      id: "110"
    }
  ];

}
