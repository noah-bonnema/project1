import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Really Exciting Notes App';
  text = "- this is the first note";
name: any;

  
  getTextBoxVal(item: any) {
    alert(item.value);
    
  }

  addNote(item: any){
   this.text = this.text + "\n-"+ item.value
  }

  
}
