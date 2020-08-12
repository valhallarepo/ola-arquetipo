import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public mobileQuery: MediaQueryList;

  constructor(
    public media: MediaMatcher,
    public changeDetectorRef: ChangeDetectorRef) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this.mobileQuery.addListener(() => changeDetectorRef.detectChanges());
  }

  ngOnInit(): void {
  }

}
