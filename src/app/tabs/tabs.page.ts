import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { earthOutline, gitCompareOutline, mapOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {
  constructor() {
    addIcons({
      earthOutline,
      mapOutline,
      gitCompareOutline,
    });
  }
}