import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  pageTitle: string = '';
  constructor(private _location: Location, private route: Router) {
    this.route.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.pageTitle = this.getTitle(route.routerState, route.routerState.root).join('-');
        }
      }
    );
   }

  ngOnInit(): void {
  }
  public getTitle(state: any, parent:any): any {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }
  onBack() {
    this._location.back();
  }
}
