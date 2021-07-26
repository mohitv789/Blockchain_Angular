import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { DetailComponent } from './blockchain/detail/detail.component';
import { ConductTransactionComponent } from './conduct-transaction/conduct-transaction.component';
import { InfoComponent } from './info/info.component';
import { PoolComponent } from './pool/pool.component';

const appRoutes: Routes = [
  { path: 'wallet', component: InfoComponent },
  { path: 'blockchain', component: BlockchainComponent, children: [   
    { path: ':id', component: DetailComponent },    
  ]},
  { path: 'transact', component: ConductTransactionComponent },
  { path: 'transaction-pool', component: PoolComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
