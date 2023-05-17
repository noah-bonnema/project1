import { Component } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  text:string = '';

  getTextBoxVal(item: string) {
    alert("new note: '" + item + "' was added.");
    
  }

  addNote(item: string){
   this.text = item;
  }


}
