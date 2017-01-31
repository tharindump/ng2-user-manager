import { UserService } from './users/users.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/toPromise";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  users = [{name:"", age: 0, username: ""}];
  arr: any;

  constructor(private http: Http, private service: UserService) {}

  metho(): void {
    console.log(this.users);
    console.log(this.arr);
  }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/users")
      .toPromise()
      .then(res => res.json()).then(r => this.users = r);

    this.service.getUsers().then(res => this.arr = res);
  }

}
