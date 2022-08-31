import {Injectable,EventEmitter} from "@angular/core";


export class ColorStatus{
   
    color!:string;
    estado!:string;
    id!:number;
    constructor(){}

    statusColor = new EventEmitter<{color:string ,status:string,id:number}>();

    changeColor(status:string, id:number){
        switch(status){
            case 'active':
                this.color = 'blue';
                this.estado = status;
                this.id = id;
                this.statusColor.emit({color:this.color,status:this.estado,id:this.id});
            break;
            case 'inactive':
                this.color = 'yellow';
                this.estado = status;
                this.id = id;
                this.statusColor.emit({color:this.color,status:this.estado,id:this.id});
            break;
            case 'unknown':
                this.color = 'red';
                this.estado = status;
                this.id = id;
                this.statusColor.emit({color:this.color,status:this.estado,id:this.id});
            break;

        }
    }

}