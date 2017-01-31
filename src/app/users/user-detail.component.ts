import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UserService } from './users.service';
import { User } from './user';

import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'user-details',
    templateUrl: 'user-detail.component.html',
    styleUrls: ['user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
    user: User;

    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private location: Location
    ) {
        this.user = new User();
    }

    ngOnInit(): void {
        this.route.params
            .subscribe(params => {
                let username = params['username'];
                console.log
                this.userService.getUser(username)
                    .then(res => this.user = res)
                    .catch(err => {console.log(err)});
            });
    }

    goBack(): void {
        this.location.back();
    }
}