import { Component, Input } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { IJob } from '../../../../../../shared/types/job';

@Component({
  selector: 'app-job-details-description',
  standalone: true,
  imports: [NgxSkeletonLoaderModule],
  templateUrl: './job-details-description.component.html',
  styleUrl: './job-details-description.component.less',
})
export class JobDetailsDescriptionComponent {
  @Input() public job: IJob | null;
  @Input() public isLoading: boolean | null;
}