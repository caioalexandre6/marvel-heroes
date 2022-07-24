import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {
  @Input() name: string;

  constructor() {
    this.name = '';
  }

  ngOnInit(): void {
  }

}