import { Component } from '@angular/core';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent {
  noteText:string = '';
  noteId: number = 0;

  createNote(note: string, id:number){
    this.noteText = note;
    this.noteId = id;
    return this;
  }

}
