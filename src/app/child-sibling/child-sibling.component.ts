import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child-sibling',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-sibling.component.html',
  styleUrl: './child-sibling.component.css'
})
export class ChildSiblingComponent {

}
