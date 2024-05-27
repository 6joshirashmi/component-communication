import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-child-sibling',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-sibling.component.html',
  styleUrl: './child-sibling.component.css'
})
export class ChildSiblingComponent implements AfterViewInit , OnInit{
  @ViewChildren('pid') pid!:QueryList<ElementRef>;
constructor(public _activatedroute:ActivatedRoute){}
ids?:number;
name?: string;
from?: string;
  ngOnInit(): void {
   this._activatedroute.paramMap.subscribe((parammap:any)=>{
this.ids=parammap.params.id;
const name = parammap.get('name');
if(this.ids !=0)
{console.log("sibling activatted",this.ids, parammap);}
   
this._activatedroute.queryParamMap.subscribe((parammap: any) => {
    
  // this.from? =parammap.get('from');
  console.log("sibling activatted",parammap,parammap.get('name'), parammap.get('from'));
});

})
  }

  ngAfterViewInit(): void {
    
    this.pid.first.nativeElement.style.backgroundColor="pink";
    this.pid.last.nativeElement.style.backgroundColor="black";
  }


}
