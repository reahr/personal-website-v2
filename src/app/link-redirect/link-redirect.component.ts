import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LINK_REDIRECTS } from '../links/link-redirects';

@Component({
  selector: 'app-link-redirect',
  templateUrl: './link-redirect.component.html',
  styleUrls: ['./link-redirect.component.scss']
})
export class LinkRedirectComponent implements OnInit {
  target: string | null = null;

  constructor(private route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.target = LINK_REDIRECTS[slug] ?? null;

    if (this.target && isPlatformBrowser(this.platformId)) {
      window.location.replace(this.target);
    }
  }
}
