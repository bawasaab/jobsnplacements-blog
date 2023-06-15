import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SharedModule } from '../shared/shared.module';
import { SectionLeftComponent } from "./section-left/section-left.component";
import { SectionRightComponent } from "./section-right/section-right.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css'],
    imports: [CommonModule, RouterOutlet, RouterModule, HeaderComponent, FooterComponent,
        SharedModule, SectionLeftComponent, SectionRightComponent]
})
export class LayoutComponent implements OnInit {
  mobileQuery: MediaQueryList;
  mybreakpoint!: number;
  sideLeft!: number;
  sideRight!: number;
  content!: number;

  fillerNav = [
    {
      name: 'about us',
      link: 'about-us'
    },
    {
      name: 'contact us',
      link: 'contact-us'
    }
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.mybreakpoint = (window.innerWidth <= 600) ? 1 : 5;
    this.sideLeft = this.mybreakpoint == 5 ? 1 : 1;
    this.sideRight = this.mybreakpoint == 5 ? 1 : 1;
    this.content = this.mybreakpoint == 5 ? 3 : 1;
  }

  handleSize(event: any) {
    this.mybreakpoint = (event.target.innerWidth <= 600) ? 1 : 5;
    this.sideLeft = this.mybreakpoint == 5 ? 1 : 1;
    this.sideRight = this.mybreakpoint == 5 ? 1 : 1;
    this.content = this.mybreakpoint == 5 ? 3 : 1;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
