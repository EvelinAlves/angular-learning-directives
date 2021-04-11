import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngclass',
  templateUrl: './directive-ngclass.component.html',
  styleUrls: ['./directive-ngclass.component.css']
})
export class DirectiveNgclassComponent implements OnInit {

  abrir = false;
  fechar = true;

  constructor() { }

  ngOnInit(): void {
  }

  onOpen(): void {
    this.abrir = !this.abrir;
  }

  onClose(): void {
    this.fechar = !this.fechar;
  }
}
