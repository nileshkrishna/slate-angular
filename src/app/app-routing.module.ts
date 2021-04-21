import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AlphaTradingComponent } from './alpha-trading/alpha-trading.component';

// does not work if reading the values from some other list



const routes: Routes =[];

/* [
        { path: 'dashboard', component: AlphaTradingComponent },
        //{ path: 'interfund', component: AlphaTradingComponent, header: 'Interfund' },
        //{ path: 'optimizer', component: AlphaTradingComponent, header: 'Optimizer' },
        //{ path: 'alpha-trading', component: AlphaTradingComponent, header: 'Alpha Trading' }
        { path: '**', redirectTo:'dashboard' },
    ];
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
