import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngswitch',
  templateUrl: './directive-ngswitch.component.html',
  styleUrls: ['./directive-ngswitch.component.css']
})
export class DirectiveNgswitchComponent implements OnInit {

  aba =  'home';
  
  constructor() { }

  ngOnInit(): void {
  }

}
