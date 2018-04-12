import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatTabsModule,
  MatToolbarModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatSliderModule,
} from '@angular/material';

const componentModules = [
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatTabsModule,
  MatToolbarModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatSliderModule,
]
@NgModule({
  imports: componentModules,
  exports: componentModules,
})
export class MaterialModule { }
