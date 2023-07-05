import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  items!: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('/assets/items.json').subscribe(data => {
      this.items = data;
    });
  }
}
