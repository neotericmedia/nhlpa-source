import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { REQUEST } from '@nguniversal/aspnetcore-engine/tokens';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public mainNav: string;
  private request;
  private routerSub$: Subscription;
  // This will go at the END of your title for example "Home - Angular Universal..." <-- after the dash (-)
  private endPageTitle: string = 'Angular Universal and ASP.NET Core Starter';
  // If no Title is provided, we'll use a default one before the dash(-)
  private defaultPageTitle: string = 'My App';

  constructor(
    public translate: TranslateService,
    private injector: Injector,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private meta: Meta) {
    translate.setDefaultLang('en');
    translate.use('en');
    this.request = this.injector.get(REQUEST);
    console.log(this.request);
  }

  ngOnInit() {
    this._changeTitleOnNavigation();
    this.translate.get('header.nav').subscribe(
      nav => {
        this.mainNav = nav;
      }
    );
  }

  ngOnDestroy() {
    this.routerSub$.unsubscribe();
  }

  private _changeTitleOnNavigation() {
    this.routerSub$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data)
      )
      .subscribe(event => {
        this._setMetaAndLinks(event);
      });
  }

  private _setMetaAndLinks(event) {
    // Set Title if available, otherwise leave the default Title
    const title = event['title']
      ? `${event['title']} - ${this.endPageTitle}`
      : `${this.defaultPageTitle} - ${this.endPageTitle}`;

    this.title.setTitle(title);
    const metaData = event['meta'] || [];
    const linksData = event['links'] || [];
    for (let i = 0; i < metaData.length; i++) {
      this.meta.updateTag(metaData[i]);
    }
    // for (let i = 0; i < linksData.length; i++) {
    //   this.linkService.addTag(linksData[i]);
    // }
  }




}
