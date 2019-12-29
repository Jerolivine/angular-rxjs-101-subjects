import { Component, OnInit } from "@angular/core";
import { AsyncSubject } from "rxjs";

@Component({
  selector: "app-async-subject",
  templateUrl: "./async-subject.component.html",
  styleUrls: ["./async-subject.component.css"]
})
export class AsyncSubjectComponent implements OnInit {
  public header = "AsyncSubject";
  public messages: string[] = [];
  asyncSubject = new AsyncSubject<number>();

  ngOnInit(): void {
    this.asyncSubject.next(1);
    this.asyncSubject.next(2);
    this.asyncSubject.next(3);
    this.asyncSubject.next(4);
    this.asyncSubject.subscribe(data => {
      this.messages.push("Subscriber A: " + data);
      console.log("Subscriber A:", data);
    });

    this.asyncSubject.next(5);
    this.asyncSubject.next(6);

    // subscriber 2
    this.asyncSubject.subscribe(data => {
      this.messages.push("Subscriber B: " + data);
      console.log("Subscriber B:", data);
    });

    this.asyncSubject.next(7);
    this.asyncSubject.complete();
    this.asyncSubject.next(8);
  }

  ngOnDestroy(): void {
    this.asyncSubject.unsubscribe();
  }
}
