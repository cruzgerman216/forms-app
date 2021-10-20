import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  email: string = "";
  password: string = ""
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginForm)
    this.email = this.loginForm.value.email
    this.password = this.loginForm.value.password
  }

}


// export class ProfileEditorComponent {
//   profileForm = new FormGroup({
//     firstName: new FormControl(''),
//     lastName: new FormControl(''),
//   });
// }