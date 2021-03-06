import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Dialog, DialogContent, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { FabDialogComponent, FabDialogContentComponent, FabDialogFooterComponent } from './dialog.component';

const components = [FabDialogComponent, FabDialogContentComponent, FabDialogFooterComponent];

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
  schemas: [NO_ERRORS_SCHEMA],
})
export class FabDialogModule {
  constructor() {
    // Add any React elements to the registry (used by the renderer).
    registerElement('Dialog', () => Dialog);
    registerElement('DialogContent', () => DialogContent);
    registerElement('DialogFooter', () => DialogFooter);
  }
}
