import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "app-subject",
  templateUrl: "./subject.component.html",
  styleUrls: ["./subject.component.css"]
})
export class SubjectComponent implements OnInit {
  public header = "Subject";
  public messages: string[] = [];
  subject = new Subject();

  ngOnInit(): void {
    this.subject.next(1);
    this.subject.next(2);
    this.subject.next(3);
    this.subject.next(4);
    this.subject.subscribe(data => {
      this.messages.push("Subscriber A: " + data);
      console.log("Subscriber A:", data);
    });

    this.subject.next(5);
    this.subject.next(6);

    // subscriber 2
    this.subject.subscribe(data => {
      this.messages.push("Subscriber B: " + data);
      console.log("Subscriber B:", data);
    });

    this.subject.next(7);
    this.subject.complete();
    this.subject.next(8);
  }

  ngOnDestroy(): void {
    this.subject.unsubscribe();
  }
}
