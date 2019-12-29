import { Component, OnInit } from "@angular/core";
import { ReplaySubject } from "rxjs";

@Component({
  selector: "app-replay-subject",
  templateUrl: "./replay-subject.component.html",
  styleUrls: ["./replay-subject.component.css"]
})
export class ReplaySubjectComponent implements OnInit {
  public header = "ReplaySubject";
  public messages: string[] = [];
  replaySubject = new ReplaySubject<number>(3);

  ngOnInit(): void {
    this.replaySubject.next(1);
    this.replaySubject.next(2);
    this.replaySubject.next(3);
    this.replaySubject.next(4);
    this.replaySubject.subscribe(data => {
      this.messages.push("Subscriber A: " + data);
      console.log("Subscriber A:", data);
    });

    this.replaySubject.next(5);
    this.replaySubject.next(6);

    // subscriber 2
    this.replaySubject.subscribe(data => {
      this.messages.push("Subscriber B: " + data);
      console.log("Subscriber B:", data);
    });

    this.replaySubject.next(7);
    this.replaySubject.complete();
    this.replaySubject.next(8);
  }

  ngOnDestroy(): void {
    this.replaySubject.unsubscribe();
  }
}
