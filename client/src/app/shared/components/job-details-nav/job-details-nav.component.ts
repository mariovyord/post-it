import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

interface ILink {
  url: string;
  title: string;
}

@Component({
  selector: 'app-job-details-nav',
  standalone: true,
  imports: [MatTabsModule, RouterModule],
  templateUrl: './job-details-nav.component.html',
  styleUrl: './job-details-nav.component.less',
})
export class JobDetailsNavComponent implements OnInit {
  public id: string;
  public activeLink: string;
  public links: ILink[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  public ngOnInit(): void {
    this.route.paramMap.subscribe((x) => {
      this.id = x.get('id') || '';
      this.setLinks(this.id);
      this.activeLink = this.router.url;
    });
  }

  public setLinks(id: string) {
    this.links = [
      {
        url: '/jobs/' + id,
        title: 'Обява',
      },
      {
        url: '/jobs/' + id + '/company',
        title: 'За нас',
      },
      {
        url: '/jobs/' + id + '/company/jobs',
        title: 'Всички обяви (3)',
      },
    ];
  }
}
