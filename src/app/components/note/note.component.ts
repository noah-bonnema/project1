import { Component } from '@angular/core';
import { NoteItemComponent } from '../note-item/note-item.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  notes: NoteItemComponent[] = [];
  text: string = '';
  i: number = 0;
  introText: string = '';

  addNote(item: string) {
    let n = 0;
    if (item == "") {
      alert("please enter a note");
    } else {
      while (n < this.notes.length) {
        if (this.notes[n].noteText == item) {
          alert("you can not add two notes with the same text");
          return;
        }
        n++;
      }
      const note1 = new NoteItemComponent;
      const note2 = note1.createNote(item, n);
      this.notes[n] = note2;

    }

    item = "";

  }

  deleteNote(num: string) {
    const n = parseInt(num);
    if (Number.isNaN(n)) {
      alert("please enter a number")
      return;
    } else if (this.notes[n - 1] == null) {
      alert("please enter a valid note number");
    }

    let j = 0;
    while (j <= this.notes.length) {
      if(this.notes[j].noteId == n){
        //this is the note to delete
        this.notes.splice(n,1);
        alert("note at number "+ n +" was removed");
      }
      j++;
    }
   

  }

  getText() {
    this.notes.toString();
  }
}





