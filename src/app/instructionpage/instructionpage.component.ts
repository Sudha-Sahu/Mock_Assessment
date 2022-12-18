import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-instructionpage',
  templateUrl: './instructionpage.component.html',
  styleUrls: ['./instructionpage.component.scss']
})
export class InstructionpageComponent {
  constructor(public router: Router) { }

  gotoCourses() {
    this.router.navigate(['/register']);
  }

  ngOnInit() {
  }
}
