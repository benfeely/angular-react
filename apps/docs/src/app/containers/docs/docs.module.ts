import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularReactFabricModule } from '@angular-react/fabric';

import { MaterialModule } from '../../material.module';
import { ReactComponentsModule } from '../../react-components';
import { SharedModule } from '../../shared';
import { ComponentsModule } from '../../components';

import { DocsComponent } from './docs.component';


const components = [
  DocsComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    AngularReactFabricModule,
    ComponentsModule,
    MaterialModule,
    ReactComponentsModule,
    SharedModule,
  ],
  declarations: components,
  exports: components,
})
export class DocsModule { }

export {
  DocsComponent,
}
