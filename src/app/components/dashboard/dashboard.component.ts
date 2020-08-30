import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  appList = [{
    imagePath: 'assets/Web/notes.png',
    title: 'Notes',
    link: '/notes',
    gradient: 'linear-gradient(#6dd5ed, #2193b0)'
  },
  {
    imagePath: 'assets/Web/cloud.png',
    title: 'Drive',
    link: '/drive',
    gradient: 'linear-gradient(#a8e063, #56ab2f )'
  }]

  constructor() { }


  ngOnInit(): void {
  }

}
