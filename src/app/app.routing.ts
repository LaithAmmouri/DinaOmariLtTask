import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search';
import {ResultpageComponent} from './resultpage'


const routes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'resultpage/:id', component: ResultpageComponent },

];

export const appRoutingModule = RouterModule.forRoot(routes);
export const routingComponents = [SearchComponent,ResultpageComponent]