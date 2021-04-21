import { ComponentMapping } from './ui-model';
import { AlphaTradingComponent } from './alpha-trading/alpha-trading.component';

export const componentMappings: ComponentMapping[] =
    [
        { path: 'dashboard', component: AlphaTradingComponent, header: 'Dashboard' },
        //{ path: 'interfund', component: AlphaTradingComponent, header: 'Interfund' },
        //{ path: 'optimizer', component: AlphaTradingComponent, header: 'Optimizer' },
        //{ path: 'alpha-trading', component: AlphaTradingComponent, header: 'Alpha Trading' }
    ];