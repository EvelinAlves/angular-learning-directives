import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngif',
  templateUrl: './directive-ngif.component.html',
  styleUrls: ['./directive-ngif.component.css']
})
export class DirectiveNgifComponent implements OnInit {

  cursos: string[] = ['Angular', 'Java', 'Phonegap'];
  visivel = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.visivel = !this.visivel;
  }

}
