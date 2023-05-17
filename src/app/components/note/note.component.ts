import { Component } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  notes:string[] = [];
  text:string ='';
  i:number = 0;

  getTextBoxVal(item: string) {
    alert("new note: '" + item + "' was added.");
    
  }

  addNote(item: string){
    if (!this.text) {
      alert('Please add a task!');
      return;
    }


      while(this.i < this.notes.length){
        this.i++;
      }
      this.notes[this.i] = "- " + item;
    } 
   
    
  }

  



