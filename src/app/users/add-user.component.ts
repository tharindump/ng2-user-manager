import { setTimeout } from 'timers';
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

    result: any;
    user: User;
    inputError: string;
    showError: boolean;
    @Output() onSuccess = new EventEmitter<User>();

    constructor(private userService: UserService, private http: Http) {
        this.user = new User();
    }

    addNewUser(): void{
        this.userService.addUser(this.user)
            .then(
                res => {
                if(res.message === "success"){
                    this.onSuccess.emit(this.user);
                    this.clearUserDetails();
                } else {
                    this.showError = true;
                    this.inputError = res.message;
                    setTimeout(() => this.showError = false, 5000);
                }
            })
            .catch(error => {console.log(error)});
    }

    clearUserDetails(): void {
        this.user.age = null;
        this.user.name = "";
        this.user.username = "";
    }

}