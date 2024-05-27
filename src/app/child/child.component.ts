import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, viewChild } from '@angular/core';
import { CompcomService } from '../services/compcom.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { ChildSiblingComponent } from '../child-sibling/child-sibling.component';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule,ChildSiblingComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers:[CompcomService]
})

export class ChildComponent implements OnInit,AfterViewInit {
constructor(public compcomService:CompcomService,public _router:Router){}
 
@ViewChild('nam') nam?:ElementRef;

  @Input() pmsg:string="";
  @Output() messageparent=new EventEmitter();
xx:string="Radhe Radhe";
  sendtochilddata(){
this.messageparent.emit(this.xx)
  }

  getreferencedata(x:any){
    console.log(x);
    
  }
ngOnInit(){
  
  //console.log("hello ",this.pmsg);
}

ngAfterViewInit(): void {
 
  this.nam!.nativeElement.textContent="hello";
  console.log(this.nam!.nativeElement.textContent); 
  this.nam!.nativeElement.style.color="green";
  this.nam!.nativeElement.style.backgroundColor="red"; 
  
}

getdatabyservice(id:number){
  this.compcomService.getData(id).subscribe(d=>{
    var obj={
      "userId": d.userId,
      "id": d.id,
      "title": d.title,
      "completed": false
    }
console.log(id,obj);

this._router.navigate(['childsibling/',id])
  })
}

}
