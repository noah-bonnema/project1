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

  addNote(item: string) {
    if (item == "") {
      alert("please enter a note");
    } else {
      while (this.i < this.notes.length) {
        this.i++;
      }
      this.notes[this.i] = item;
    }

    item = "";
  }

  deleteNote(num: string) {
    const n = parseInt(num);
    if (Number.isNaN(n)) {
      alert("please enter a number")
    }
    else if (this.notes[n - 1] == null) {
      alert("please enter a valid note number");
    } else {
      this.notes[n - 1] = "";
      this.notes.splice(n,1);
      console.log(this.notes.toString());
    }
  }

  getText(){
    this.notes.toString();
  }
}





