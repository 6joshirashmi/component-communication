import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, viewChild } from '@angular/core';



@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent implements OnInit,AfterViewInit {
constructor(){}
 
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
}
