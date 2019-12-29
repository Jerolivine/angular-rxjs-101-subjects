import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AsyncSubjectComponent } from "./components/async-subject/async-subject.component";
import { BehaviorSubjectComponent } from "./components/behavior-subject/behavior-subject.component";
import { ReplaySubjectComponent } from "./components/replay-subject/replay-subject.component";
import { SubjectComponent } from "./components/subject/subject.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    AsyncSubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    SubjectComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
