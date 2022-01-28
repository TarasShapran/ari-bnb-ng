import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services";
import {IUser} from "../../interfaces";
import {IncrementPipe} from "../../pipes";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  arr2: number[]
  user: IUser
  name = 'kokos'
  born = new Date(2000, 11, 2, 10, 20)
  now = new Date()
  arr = [1, 2, 3, 4, 5]

  constructor(private userService: UserService,private incrementPipe :IncrementPipe) {
  }

  ngOnInit(): void {
    this.userService.getUser(2).subscribe(value => this.user = value);
    this.arr2= this.incrementPipe.transform(this.arr,10)
  }

}
