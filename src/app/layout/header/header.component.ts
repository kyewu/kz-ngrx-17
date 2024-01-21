import {NgForOf} from '@angular/common';
import {Component, OnInit, inject} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterLink} from '@angular/router';
import {Store} from '@ngrx/store';
import {selectUrl} from '@shared/store/router.selectors';
import {map} from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatTabsModule, NgForOf, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private readonly routerStore = inject(Store);
  url$ = this.routerStore.select(selectUrl);
  navbarLinks = [
    {
      label: 'Home',
      active: false,
      url: '/home',
    },
    {
      label: 'Counter',
      active: false,
      url: '/counter',
    },
    {
      label: 'Others',
      active: false,
      url: '',
    },
  ];
  activeLink = this.navbarLinks[0];
  background: ThemePalette = 'primary';

  ngOnInit(): void {
    this.url$.pipe(map((url) => url ?? '')).subscribe((url) => {
      const activeLink = this.navbarLinks.filter((link: any) => link.url === url);
      this.activeLink = activeLink ? activeLink[0] : this.navbarLinks[0];
    });
  }

  setActive(activeLink: any): void {
    this.activeLink = activeLink;
    this.navbarLinks.map((link) => ({...link, active: activeLink.url === link.url}));
  }
}
