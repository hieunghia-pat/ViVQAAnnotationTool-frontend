import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { NavItem } from './model/nav-item';
import { Router } from '@angular/router';
import { NavService } from 'src/app/services/nav.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.css'],
  animations: [
    trigger('indicatorRotate', [
        state('collapsed', style({ transform: 'rotate(0deg)' })),
        state('expanded', style({ transform: 'rotate(180deg)' })),
        transition('expanded <=> collapsed',
            animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
        ),
    ])
]
})
export class MenuListItemComponent implements OnInit {
  expanded: boolean = false;

  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem = {displayName : "", iconName : ""};
  @Input() depth: number;
  
  @Input() clicked: boolean = false;
  @Output() clickedChange: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(public navService: NavService,
    public router: Router) {
    this.depth = 0;

  }
  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
        this.router.navigate([item.route]);
    }

    if (item.children && item.children.length) {
        this.expanded = !this.expanded;
    }

    this.clickedChange.emit(false)
}

  ngOnInit(): void {
  }

}
