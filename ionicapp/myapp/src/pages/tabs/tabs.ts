import { Component } from '@angular/core';

import { MyTask } from '../mytask/mytask';
import { AboutPage } from '../about/about';
import { Settings } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MyTask;
  tab2Root: any = Settings;
  tab3Root: any = AboutPage;

  constructor() {

  }
}
