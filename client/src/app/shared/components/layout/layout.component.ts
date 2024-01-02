import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { AuthAvatarComponent } from '../auth-avatar/auth-avatar.component';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    RouterLink,
    AuthAvatarComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.less',
})
export class LayoutComponent {
  public isCollapsed = false;
}
