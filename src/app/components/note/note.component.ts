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
    if(item != ''){
      while(this.i < this.notes.length){
        this.i++;
        console.log(this.i);
      }
      this.notes[this.i-1] = item;
    } 
    else{
      alert('Please add a note')
    }
    
  }

  getText(){
    for (var j = 0; j < this.notes.length; j++){
      this.text += this.notes[j];
      }
  }


}
