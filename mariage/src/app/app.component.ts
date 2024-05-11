import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mariage';
  scannedData: string='';

  onQrCodeScanned(scannedData: string) {
    this.scannedData = scannedData;
    // Utilisez les données scannées pour rechercher l'invité correspondant
    // et effectuez d'autres actions nécessaires.
  }
}
