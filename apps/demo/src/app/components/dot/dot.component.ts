// tslint:disable:no-output-rename
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { COLORS } from '../triangle/triangle.component';


@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DotComponent {

  @Input() x: string;
  @Input() y: string;
  @Input() size: string;

  activeColor = COLORS.default;

  onMouseEnter = ev => {
    this.activeColor = COLORS.hover;
  }

  onMouseLeave = ev => {
    this.activeColor = COLORS.default;
  }

}
