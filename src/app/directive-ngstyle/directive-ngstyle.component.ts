import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngstyle',
  templateUrl: './directive-ngstyle.component.html',
  styleUrls: ['./directive-ngstyle.component.css']
})
export class DirectiveNgstyleComponent implements OnInit {

  ativo = false;
  tamanho = 15;

  constructor() { }

  ngOnInit(): void {
  }

  mudarAtivo(): void {
    this.ativo = !this.ativo;
  }

}
