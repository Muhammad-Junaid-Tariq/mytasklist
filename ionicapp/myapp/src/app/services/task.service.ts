import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class TaskService {
    constructor(private http: Http) { }

    getTask() {
        console.log('here');
        return this.http.get("http://localhost:3000/api/tasks")
            .map((res:Response) => res.json());
    }
    saveTask(newtask) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/api/tasks", JSON.stringify(newtask), { headers: headers })
            .map(res => res.json());
    }

    deleteTask(id) {
        return this.http.delete("http://localhost:3000/api/tasks/" + id)
            .map(res => res.json());
    }

    updateTask(task) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put("http://localhost:3000/api/tasks/" + task._id, JSON.stringify(task), { headers: headers })
            .map(res => res.json());
    }
} 