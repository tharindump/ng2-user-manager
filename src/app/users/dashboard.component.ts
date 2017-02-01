import { UserService } from './users.service';
import { User } from './user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: `user-dashboard`,
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class UserDashBoardCompnent implements OnInit{
    users: User[]; //this array is used for the user-table

    constructor(private userService: UserService) {}

    getUsers(): void {
        //get users list from the server
        //whenever this method called, the table automatically updates
        this.userService.getUsers().then(res => this.users = res);
    }

    updateList(user: User) {
        //this method will be called when an event occurs in the child component
        //add-user.component onSuccess event
        this.getUsers();
    }

    deleteUser(username: string, index: number) {
        //delete user from the list
        this.userService.deleteUser(username)
            .then(
                res => {
                    console.log(res);
                    this.getUsers(); //update the table
                })
            .catch(err => {console.log(err)});
    }

    ngOnInit(): void {
        //when the comonent initialize
        this.getUsers();
    }
}