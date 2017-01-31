import { User } from './user';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    private userApiUrl = `http://localhost:8080/users`;
    private headers = new Headers({'Content-Type': 'application/json'});
    private users: User[];

    constructor(private http: Http) {}

    getUsers(): Promise<any> {
        return this.http.get(this.userApiUrl)
            .toPromise()
            .then(response => response.json());
    }

    getUser(username: string): Promise<any> {
        return this.http.get(`${this.userApiUrl}/${username}`)
                .toPromise()
                .then(response => response.json());
    }

    addUser(user: User): Promise<any> {
        return this.http.post(this.userApiUrl, user,
                this.headers).toPromise()
                .then(response => response.json());
    }

    deleteUser(username: string): Promise<any> {
        return this.http.delete(`${this.userApiUrl}/${username}`)
                .toPromise()
                .then(response => response.json());
    }
}