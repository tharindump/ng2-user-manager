import { UserService } from './users.service';
import { User } from './user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: `user-dashboard`,
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class UserDashBoardCompnent implements OnInit{
    users: User[];
    selectedUser: User;
    type: string;

    constructor(private userService: UserService) {}

    getUsers(): void {
        this.userService.getUsers().then(res => this.users = res);
        this.type = "This is type";
    }

    updateList(user: User) {
        this.getUsers();
    }

    deleteUser(username: string, index: number) {
        this.userService.deleteUser(username)
            .then(
                res => {
                    console.log(res);
                    this.getUsers();
                })
            .catch(err => {console.log(err)});
    }

    ngOnInit(): void {
        this.getUsers();
    }
}