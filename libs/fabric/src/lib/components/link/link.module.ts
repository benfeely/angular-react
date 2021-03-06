import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { FabLinkComponent } from './link.component';

const components = [FabLinkComponent];

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
  schemas: [NO_ERRORS_SCHEMA],
})
export class FabLinkModule {
  constructor() {
    // Add any React elements to the registry (used by the renderer).
    registerElement('Link', () => Link);
  }
}
