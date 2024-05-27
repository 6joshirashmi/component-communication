import { AfterViewInit, Component, QueryList, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildSiblingComponent } from './child-sibling/child-sibling.component';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'component-comunication';
  @ViewChild(ChildComponent) childcompLst!:QueryList<ChildComponent>;
  ngAfterViewInit(): void {
   console.log(this.childcompLst);
   // this.childcomp.last.nativeElement.style.backgroundColor="black";
  }


}
