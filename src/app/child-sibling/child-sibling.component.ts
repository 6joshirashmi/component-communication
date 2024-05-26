import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-child-sibling',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-sibling.component.html',
  styleUrl: './child-sibling.component.css'
})
export class ChildSiblingComponent implements AfterViewInit{
  @ViewChildren('pid') pid!:QueryList<ElementRef>;
  ngAfterViewInit(): void {
    
    this.pid.first.nativeElement.style.backgroundColor="pink";
    this.pid.last.nativeElement.style.backgroundColor="black";
  }
}
