import { Component } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  notes: string[] = [];
  text: string = '';
  i: number = 0;
  introText: string = '';

  getTextBoxVal(item: string) {
    alert("new note: '" + item + "' was added.");

  }

  addNote(item: string) {
    if (item == "") {
      alert("please enter a note");
    } else {
      while (this.i < this.notes.length) {
        this.i++;
      }
      this.notes[this.i] = (this.i+1) + ") " + item;
    }
  }

  deleteNote() {
    this.notes[this.i] = "";
  }

  isListPopulated(){
    if(this.notes[0] = ''){
      return false;
    } else {
      return true;
    }
  }

}





