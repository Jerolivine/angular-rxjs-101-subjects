import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, ReplaySubject } from "rxjs";

@Component({
  selector: "app-behavior-vs-replay",
  templateUrl: "./behavior-vs-replay.component.html",
  styleUrls: ["./behavior-vs-replay.component.css"]
})
export class BehaviorVsReplayComponent implements OnInit {
  public header = "BehaviorSubject vs ReplaySubject(1)";
  private value: number = 1;
  private readonly BUFFER_SIZE = 1;
  private behaviorSubject = new BehaviorSubject<number>(this.value); // sets initial value 1
  private replaySubject = new ReplaySubject<number>(this.BUFFER_SIZE);

  public messages: string[] = [];

  constructor() {}

  ngOnInit() {
    // you can see the cases by deleting comments from the codes
    // this.seemsSameCase();
    // this.behaviorWinsCase();
    // this.replaySubjectWinsCase();
  }

  ngOnDestro() {
    this.behaviorSubject.unsubscribe();
    this.replaySubject.unsubscribe();
  }

  seemsSameCase() {
    this.replaySubject.next(1); // sets initial value of 1 to replay subject as behaviorsubject

    this.replaySubject.subscribe(value => {
      this.messages.push("Replay Subject: " + value.toString());
    });
    this.behaviorSubject.subscribe(value => {
      this.messages.push("Behavior Subject:" + value.toString());
    });

    this.next();
    this.next();
    this.next();

    this.replaySubject.complete();
    this.behaviorSubject.complete();
  }

  behaviorWinsCase() {
    // replay subject doesn't have the initial value of 1
    // behaviorsubject has the initial value of 1

    this.replaySubject.subscribe(value => {
      this.messages.push("Replay Subject: " + value.toString());
    });
    this.behaviorSubject.subscribe(value => {
      this.messages.push("Behavior Subject:" + value.toString());
    });

    this.next();
    this.next();
    this.next();

    this.replaySubject.complete();
    this.behaviorSubject.complete();
  }

  replaySubjectWinsCase() {
    // replaysubject even fires the last values after complete method is called for new observables

    this.replaySubject.subscribe(value => {
      this.messages.push("Replay Subject: " + value.toString());
    });
    this.behaviorSubject.subscribe(value => {
      this.messages.push("Behavior Subject:" + value.toString());
    });

    this.next();
    this.next();
    this.next();

    this.replaySubject.complete();
    this.behaviorSubject.complete();

    this.replaySubject.subscribe(value => {
      this.messages.push(
        "ReplaySubject Called Completed Method But The Value is: " +
          value.toString()
      );
    });

    this.behaviorSubject.subscribe(value => {
      this.messages.push(
        "BehaviorSubject Called Completed Method But The Values Are: " +
          value.toString()
      );
    });
  }

  public next() {
    this.value++;
    this.behaviorSubject.next(this.value);
    this.replaySubject.next(this.value);
  }
}
