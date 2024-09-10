import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-app-header',
  standalone: true,
  imports: [],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppHeaderComponent {

}
