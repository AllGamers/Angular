import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.scss']
})
export class MiComponenteComponent implements OnInit {
  
  // Este metodo lo realiza a traves del llamado a una clase
  public taskList:Task[]=[];   
  public element:string='';
  public localHour:string='';
  public editedValue:string='';
  
  constructor(){}

  ngOnInit():void{
    this.getHour();
  }
  
  public getHour(){
    setInterval(() => {
      let time = new Date();
      this.localHour=`${time}`; 
    }, 1000);
  }

  public addToList(cad:string) {
    let nuevo:Task={action:cad};
    this.taskList.push(nuevo);
    /*Realiza un push a nuestro arreglo realizando una nueva instancia a la clase TaskComponent*/
    //this.taskList.push(new TaskComponent);
  }

  public deleteTask(index:number){
    if(index>-1){
      this.taskList.splice(index, 1);
    }  
  }

  public editTask(index:number,cad:string){
    if(cad.length>0){
      this.taskList[index].action=cad;
    }else{
      alert('Favor de colocar el nuevo valor que le gustaria cambiar');
    }
  }
}
