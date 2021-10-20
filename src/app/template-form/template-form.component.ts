import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  
  username: string = "";
  password: string = ""
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(signup){
    console.log(signup)
    this.username = signup.value.username;
    this.password = signup.value.password;
  }
}
