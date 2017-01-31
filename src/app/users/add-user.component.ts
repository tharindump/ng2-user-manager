import { Headers, Http } from '@angular/http';
import { UserService } from './users.service';
import { User } from './user';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
    selector: 'add-user',
    templateUrl: 'add-user.component.html',
    styleUrls: ['add-user.component.css']
})
export class AddUserComponent {

    private name: string = "Hey";
    result: any;
    user: User;
    @Output() onSuccess = new EventEmitter<User>();

    constructor(private userService: UserService, private http: Http) {
        this.user = new User();
    }

    addNewUser(): void{
        console.log(this.user);
        this.userService.addUser(this.user)
            .then(
                res => {
                this.result = res;
                console.log(res);
                this.onSuccess.emit(this.user);
                this.clearUserDetails();
            })
            .catch(error => {console.log(error)});
    }

    clearUserDetails(): void {
        this.user.age = null;
        this.user.name = "";
        this.user.username = "";
    }

}