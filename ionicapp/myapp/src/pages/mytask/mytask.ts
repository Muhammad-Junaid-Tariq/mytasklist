import { Component,OnInit } from '@angular/core';
import { TaskService } from '../../app/services/task.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'my-tasks',
  templateUrl: 'mytask.html'
})
export class MyTask implements OnInit{
  items=[];
  title:String;
  constructor(public navCtrl: NavController,private taskser:TaskService) {
  }

  ngOnInit(){
    this.taskser.getTask()
    .subscribe(res => this.items = res);
  }

  onSubmit(form:any){
    var newtask = {
      title:this.title,
      isDone:false
    }
    this.taskser.saveTask(newtask)
        .subscribe(res => {
          this.items.push(res);
          this.title="";
        });
  }

  updateStatus(task){
    var updatedtask={
      _id:task._id,
      title:task.title,
      isDone:!task.isDone
    };

    this.taskser.updateTask(updatedtask)
       .subscribe(res => {
         task.isDone = !task.isDone;
       });
  }

  onDelete(id){
    var task = this.items;
    this.taskser.deleteTask(id)
       .subscribe(res =>{
         for(var i=0;i<task.length;i++){
           if(task[i]._id == id){
             task.splice(i,1);
           }
         }
       });
  }
}
