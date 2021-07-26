import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { InfoService } from './info/info.service';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { BlockchainService } from './blockchain/blockchain.service';
import { ListComponent } from './blockchain/list/list.component';
import { DetailComponent } from './blockchain/detail/detail.component';
import { ItemComponent } from './blockchain/list/item/item.component';
import { TransactionComponent } from './blockchain/detail/transaction/transaction.component';
import { ConductTransactionComponent } from './conduct-transaction/conduct-transaction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoolComponent } from './pool/pool.component';
import { MiningComponent } from './pool/mining/mining.component';
import { PoolService } from './pool/pool.service';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    BlockchainComponent,
    ListComponent,
    DetailComponent,
    ItemComponent,
    TransactionComponent,
    ConductTransactionComponent,
    HeaderComponent,
    SidenavListComponent,
    PoolComponent,
    MiningComponent
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InfoService,BlockchainService,PoolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
