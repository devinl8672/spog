import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  teamData!: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchTeamData();
  }

  fetchTeamData() {
    this.http.get<any[]>('./assets/teams.json').subscribe(
      data => {
        this.teamData = data;
      },
      error => {
        console.log('Error fetching team data:', error);
      }
    );
  }
}

