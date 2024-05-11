import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';

// Necessary to solve the problem of losing internet connection
LOAD_WASM().subscribe();
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),  NgxScannerQrcodeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
