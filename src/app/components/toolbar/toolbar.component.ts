import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Output() search = new EventEmitter<boolean>();
  constructor() {}

  searchEvent() {
    this.search.emit(true);
    console.log('disparou');
  }
  ngOnInit(): void {}
}
