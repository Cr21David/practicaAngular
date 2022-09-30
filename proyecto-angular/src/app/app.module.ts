import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoguinModule } from './modules/loguin/loguin.module';
import { FormularioCompraModule} from './modules/formulario-compra/formulario-compra.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoguinModule,
    FormularioCompraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
