import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  showContent = false;
  boxesRow1: any[] = [];
  boxesRow2: any[] = [];
  // boxesRow1: any[] = [
  //   { title: 'SITE', content: 'Content' },
  //   { title: 'Enterprise PLM', content: 'Content' },
  //   { title: 'OT Enabling Services', content: 'Content' },
  //   // Add more box objects as needed
  // ];
  // boxesRow2: any[] = [
  //   { title: 'SITE Teams', content: 'Content' },
  //   { title: 'Teams', content: 'Content' },
  //   { title: 'Teams', content: 'Content' },
  //   // Add more box objects as needed
  // ];

  constructor(private http: HttpClient) {
    this.loadBoxData();
  }

  toggleContent() {
    this.showContent = !this.showContent;
  }

  loadBoxData() {
    this.http.get<any>('assets/team-data.json').subscribe(data => {
      this.boxesRow1 = data.row1;
      this.boxesRow2 = data.row2;
    });
  }
}

