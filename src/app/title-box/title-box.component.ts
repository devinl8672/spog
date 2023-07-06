import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css']
})
export class TitleBoxComponent {
  @Input()teamName!: string;
  @Input()teamNameAcro!: string;
  @Input()purpose!: string;
  @Input()leadership!: string;


  
}

