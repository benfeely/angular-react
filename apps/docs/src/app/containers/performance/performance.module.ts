import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularReactFabricModule } from '@angular-react/fabric';

import { MaterialModule } from '../../material.module';
import { ReactComponentsModule } from '../../react-components';
import { SharedModule } from '../../shared';
import { ComponentsModule } from '../../components';

import { AngularPerfComponent } from './angular-perf/angular-perf.component';
import { MixedPerfComponent } from './mixed-perf/mixed-perf.component';
import { PerformanceComponent } from './performance.component';
import { ProfilesComponent } from './profiles/profiles.component';


const components = [
  AngularPerfComponent,
  MixedPerfComponent,
  PerformanceComponent,
  ProfilesComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    AngularReactFabricModule,
    MaterialModule,
    ReactComponentsModule,
    SharedModule,
    ComponentsModule,
  ],
  declarations: components,
  exports: components,
})
export class PerformanceModule { }

export {
  AngularPerfComponent,
  MixedPerfComponent,
  PerformanceComponent,
  ProfilesComponent,
}
