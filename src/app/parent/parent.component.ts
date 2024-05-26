import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, QueryList, ViewChild, ViewChildren, viewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ChildSiblingComponent } from '../child-sibling/child-sibling.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,ChildSiblingComponent],
  templateUrl:'./parent.component.html',
  styleUrl: './parent.component.css',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ParentComponent  implements AfterViewInit{
@ViewChild(ChildSiblingComponent) childcomp!:ChildSiblingComponent;
@ViewChild('child') child!:ChildComponent;




  constructor(){}
  ngAfterViewInit(): void {
    console.log(this.childcomp);

    //console.log("hello");
    console.log(this.child);

  }
chmsg:string='';

    pmessage:string="mera pyara bachha";
    
    getchilddata(x:string){
console.log(x);
    }


    clickforchildsibling(){

    }
}
