import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { NoteComponent } from './components/note/note.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    NoteComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
