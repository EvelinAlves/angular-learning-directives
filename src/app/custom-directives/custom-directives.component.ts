import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.css']
})
export class CustomDirectivesComponent implements OnInit {

  mostrarCursos = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMostrarCurso(): void {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
