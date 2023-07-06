import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.css']
})
export class ItemBoxComponent {
  @Input()title!: string;
  @Input()content!: string;


}
