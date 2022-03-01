import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
const materialcomponent = [
MatGridListModule,
MatInputModule,
MatButtonModule
]


@NgModule({
  exports: [materialcomponent],
  imports: [materialcomponent]
})
export class MaterialModule {

}
