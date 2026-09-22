import { Component, OnDestroy } from '@angular/core';
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

  private routeSub: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private meta: Meta) {
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

      if (data['noIndex']) {
        this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
      } else {
        this.meta.removeTag("name='robots'");
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
