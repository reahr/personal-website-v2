import { Component, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'Reah Rajmangal';
  hideFooter = false;
  hideNavLinks = false;
  fullBleed = false;

  private routeSub: Subscription;
  private navEndSub: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {

    // Only access browser APIs when running in the browser.
    if (isPlatformBrowser(this.platformId)) {
      // Prevent native scroll restoration from interfering with manual handling.
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
    }

    // Handle route-specific layout and SEO metadata.
    // This runs on both the server and browser.
    this.routeSub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe(data => {
      this.hideFooter = !!data['hideFooter'];
      this.hideNavLinks = !!data['hideNavLinks'];
      this.fullBleed = !!data['fullBleed'];

      if (data['noIndex']) {
        this.meta.updateTag({
          name: 'robots',
          content: 'noindex, nofollow'
        });
      } else {
        this.meta.removeTag("name='robots'");
      }
    });

    // Scroll handling should only run in the browser.
    if (isPlatformBrowser(this.platformId)) {

      this.navEndSub = this.router.events.pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      ).subscribe(event => {

        const fragment = this.router.parseUrl(event.urlAfterRedirects).fragment;

        setTimeout(() => {
          const target = fragment
            ? document.getElementById(fragment)
            : null;

          if (target) {
            const top =
              target.getBoundingClientRect().top +
              window.scrollY -
              110;

            window.scrollTo({
              top,
              left: 0
            });

          } else {
            window.scrollTo({
              top: 0,
              left: 0
            });
          }
        });

      });

    } else {
      // Avoid creating a browser-only subscription during SSR.
      this.navEndSub = new Subscription();
    }
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.navEndSub.unsubscribe();
  }
}