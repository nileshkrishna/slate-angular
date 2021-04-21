import { Component } from '@angular/core';
import { componentMappings} from '../component-mappings';
import { ComponentMapping } from '../ui-model';





@Component({
  selector: 'navigation-tabs',
  templateUrl: './navigation-tabs.component.html',
  styleUrls: ['./navigation-tabs.component.scss']
})
export class NavigationTabsComponent {
 

tabs:ComponentMapping[]
=componentMappings;

}
