import { RouterModule } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularReactFabricModule } from '@angular-react/fabric';

import { ReactComponentsModule } from '../react-components';

import { DotComponent } from './dot/dot.component';
import { TriangleComponent } from './triangle/triangle.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material.module';
import { IconsComponent } from './icons/icons.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';
import { SharedModule } from '../shared';


const components = [
  DotComponent,
  IconsComponent,
  NavbarComponent,
  SubNavComponent,
  TriangleComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularReactFabricModule,
    ReactComponentsModule,
    MaterialModule,
    SharedModule,
  ],
  declarations: components,
  exports: components,
})
export class ComponentsModule { }

export {
  DotComponent,
  IconsComponent,
  NavbarComponent,
  TriangleComponent,
}
