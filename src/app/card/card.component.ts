import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Icard } from '../model/card';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private snackbar : MatSnackBar) { }

  ngOnInit(): void {
  }


  uuid = () => {
    return String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(
      /[xy]/g,
      character => {
        const random = (Math.random() * 16) | 0
        const value = character === 'x' ? random : (random & 0x3) | 0x8
        return value.toString(16)
      }
    )
  }


  topicsArr: Array<Icard> = [
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

  @ViewChild('cardTitle') cardTitle !: ElementRef;
  @ViewChild('cardContent') cardContent !: ElementRef;
  EditId !: string;
  isinEditMode: boolean = false;

  onAddCard() {

    if (this.cardTitle.nativeElement.value) {
      let CardObj: Icard = {

        title: this.cardTitle.nativeElement.value,
        content: this.cardContent.nativeElement.value,
        id: this.uuid()
      }

      this.topicsArr.unshift(CardObj);
      this.cardTitle.nativeElement.value = "";
      this.cardContent.nativeElement.value = "";
      this.snackbar.open(`The card with id ${CardObj.id} is created successfully`,"Close",{
        horizontalPosition : "left",
        verticalPosition : "top",
        duration : 2000
      });
    }
  }


  onRemove(id: string) {

    let getIndex = this.topicsArr.findIndex(c => c.id === id);
    this.topicsArr.splice(getIndex, 1)
    this.snackbar.open(`The card with id ${id} is removed successfully`,"Close",{
      horizontalPosition : "left",
      verticalPosition : "top",
      duration : 2000
    })
  }

  onEdit(card: Icard) {

    this.cardTitle.nativeElement.value = card.title;
    this.cardContent.nativeElement.value = card.content;

    this.EditId = card.id;
    this.isinEditMode = true;
  }

  onUpdateCard() {

    let UPDATE_CARDOBJ: Icard = {

      title: this.cardTitle.nativeElement.value,
      content: this.cardContent.nativeElement.value,
      id: this.EditId
    }

    let getIndex = this.topicsArr.findIndex(c => c.id === UPDATE_CARDOBJ.id);

    this.topicsArr[getIndex] = UPDATE_CARDOBJ;
    this.isinEditMode = false;
    this.cardTitle.nativeElement.value = "";
    this.cardContent.nativeElement.value = "";

    this.snackbar.open(`The card with id ${UPDATE_CARDOBJ.id} is updated successfully`,"Close",{
      horizontalPosition : "left",
      verticalPosition : "top",
      duration : 2000
    })

  }


}
