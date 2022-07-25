import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  /*   output para acessar o evento emitido */
  @Output() search = new EventEmitter<boolean>();
  constructor(private router: Router) {}

  /* metodo para retornar o evento emitido */
  searchEvent() {
    this.search.emit(true);
  }

  homePage() {
    this.router.navigate(['/character-list']);
  }
  ngOnInit(): void {}
}
