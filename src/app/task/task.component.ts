import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  public action: string='';

  constructor() {
  }

  ngOnInit(): void {
  } 
}
