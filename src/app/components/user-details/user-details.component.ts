import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-user-datails',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: IUser

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {

    this.activatedRoute.data.subscribe(value => this.user=value["data"])
  }

  ngOnInit(): void {
  }

}
