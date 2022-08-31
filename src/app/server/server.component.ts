import { Component } from "@angular/core";

@Component({
    selector: '[#app-server]',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.scss'],
    styles: [`
    img{
            width: 100px;
            height:auto;
        }
    .isTMNT{
        color: white;
    }
    
    `]
})
export class ServerComponent {
    ninjaStrength: number = 10;
    ninjaName: string = "donatelo";
    ninjaStars: number = 25;
    ninjaTime: string = "";
    itNinja:number = 0;

    randomImage = ["../../assets/images/destructor.jpg","../../assets/images/bebop.jpg","../../assets/images/rockSteady.jpg","../../assets/images/razard.jpg","../../assets/images/torka.png"];

    constructor(){
        
        this.ninjaName = Math.random() > 0.5 ? "TMNT" : "FOOTCLAN";
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        this.ninjaTime = today.toUTCString();
    }

    getNinjaStars(){
        return this.ninjaStars;
    }

    getColor(){
        this.itNinja++;
        return this.ninjaName === "TMNT"? "green": "red";
    }

    randomImg(){
    
        if(this.itNinja >= 5){
            const index = Math.floor(Math.random() * 5);
            return this.randomImage[index];
        }
        
        return this.randomImage[0];
       
    }
}