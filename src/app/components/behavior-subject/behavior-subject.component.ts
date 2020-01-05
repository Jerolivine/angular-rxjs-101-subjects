import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-behavior-subject",
  templateUrl: "./behavior-subject.component.html",
  styleUrls: ["./behavior-subject.component.css"]
})
export class BehaviorSubjectComponent implements OnInit {
  public header = "BehaviorSubject";
  public messages: string[] = [];
  behaviorSubject = new BehaviorSubject<number>(1);

  ngOnInit(): void {

     this.behaviorSubject.subscribe(data => {
      this.messages.push("Subscriber A: " + data);
      console.log("Subscriber A:", data);
    });
    
    this.behaviorSubject.next(2);
    this.behaviorSubject.next(3);
    this.behaviorSubject.next(4);
    this.behaviorSubject.subscribe(data => {
      this.messages.push("Subscriber B: " + data);
      console.log("Subscriber A:", data);
    });

    this.behaviorSubject.next(5);
    this.behaviorSubject.next(6);

    // subscriber 2
    this.behaviorSubject.subscribe(data => {
      this.messages.push("Subscriber C: " + data);
      console.log("Subscriber B:", data);
    });

    this.behaviorSubject.next(7);
    this.behaviorSubject.complete();
    this.behaviorSubject.next(8);
  }

  ngOnDestroy(): void {
    this.behaviorSubject.unsubscribe();
  }
}
