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

  private readonly BUFFER_SIZE = 3;
  replaySubject = new ReplaySubject<number>(this.BUFFER_SIZE);

  ngOnInit(): void {
    this.replaySubject.next(1);
    this.replaySubject.next(2);
    this.replaySubject.next(3);
    this.replaySubject.next(4);
    // subscriber 1
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
