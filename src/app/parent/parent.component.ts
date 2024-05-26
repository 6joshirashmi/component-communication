import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ViewChild } from '@angular/core';
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
@ViewChild('app-child-sibling') childcomp!:ChildSiblingComponent;

  constructor(){}
  ngAfterViewInit(): void {
    console.log(this.childcomp!);

  }
chmsg:string='';
    pmessage:string="mera pyara bachha";
    
    getchilddata(x:string){
console.log(x);
    }


    clickforchildsibling(){

    }
}
