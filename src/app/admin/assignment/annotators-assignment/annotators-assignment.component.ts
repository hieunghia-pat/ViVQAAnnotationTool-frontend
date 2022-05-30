import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-annotators-assignment',
  templateUrl: './annotators-assignment.component.html',
  styleUrls: ['./annotators-assignment.component.css']
})
export class AnnotatorsAssignmentComponent implements OnInit {

  @Input() user!: UserInterface;

  @Output() selectedUsername: EventEmitter<UserInterface> = new EventEmitter<UserInterface>();

  constructor() { }

  ngOnInit(): void {
  }

  public selectUsername() {
    this.selectedUsername.emit(this.user)
  }

}
