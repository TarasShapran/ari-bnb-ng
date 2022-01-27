import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  user = {
    username: 'Taras',
    password: 1111
  }
  myForm: FormGroup;
  myForm2: FormGroup;
  users: IUser[];
  userDetail:IUser;

  constructor(private userService: UserService) {
  }

  customValidator(control: AbstractControl): null | object {
    return control.value.includes('huck') ? {ahtung: 'Error'} : null
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5), this.customValidator]),
      age: new FormControl(18),

    })
    this.myForm2 = new FormGroup({
      userId: new FormControl(1)
    })
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  save(tref: HTMLFormElement) {
    console.log(tref);
    console.log(this.user);
  }

  save2() {
    console.log(this.myForm);
  }

  showDetails() {
    console.log(this.myForm2.controls);
    let id = this.myForm2.controls['userId'].value;
    this.userDetail=this.users[id-1]
  }
}
