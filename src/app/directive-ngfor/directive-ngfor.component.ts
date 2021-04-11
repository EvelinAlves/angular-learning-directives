import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngfor',
  templateUrl: './directive-ngfor.component.html',
  styleUrls: ['./directive-ngfor.component.css']
})
export class DirectiveNgforComponent implements OnInit {

  cursos: string[] = ['Angular', 'Java', 'Phonegap'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
