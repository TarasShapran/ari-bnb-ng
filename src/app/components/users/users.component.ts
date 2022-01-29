import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataTransferService, UserService} from "../../services";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  age: number;
  users: IUser[] = [];

  constructor(private userService: UserService, private dataTransferService: DataTransferService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
    this.dataTransferService.getAgeData().subscribe(value => this.age = value)
  }
}
