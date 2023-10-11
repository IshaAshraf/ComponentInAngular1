import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponent } from './myContainer/myContainer.component';
import { TopnavComponent } from './myContainer/topnav/topnav.component';
import { DatabindComponent } from './databind/databind.component';
import { ClassStyleComponent } from './class-style/class-style.component';
import { EventbindComponent } from './eventbind/eventbind.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { ParentComponent } from './parent/parent.component';
import { CardComponent } from './card/card.component';
import { Card2Component } from './card2/card2.component';
import { DesignutilityService } from './app-services/designutility.service';
import { HomeComponent } from './home/home.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Contact2Component } from './contact2/contact2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ApiService } from './shared/api.service';
import { HttpClientModule } from '@angular/common/http';
// import { AppDirectivesComponent } from './app-directives/app-directives.component';
import { TestdirectiveDirective } from './appDirective/testdirective.directive';
import { DropdownComponent } from './dropdown/dropdown.component';
import { BirdsComponent } from './birds/birds.component';
import { AnimalsComponent } from './animals/animals.component';
import { GamesComponent } from './games/games.component';
import { ArraysofobjectComponent } from './arraysofobject/arraysofobject.component';
import { ArrComponent } from './arr/arr.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgForTaskComponent } from './ng-for-task/ng-for-task.component';
import { NgForDynamicComponent } from './ng-for-dynamic/ng-for-dynamic.component';
import { LoopsComponent } from './loops/loops.component';
import { MapmethodComponent } from './mapmethod/mapmethod.component';
import { PromiseComponent } from './promise/promise.component';
import { SyncComponent } from './sync/sync.component';
import { SelectcountryComponent } from './selectcountry/selectcountry.component';
import { NestedarrComponent } from './nestedarr/nestedarr.component';
import { SelectboxxxComponent } from './selectboxxx/selectboxxx.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ParentLifecyclehookComponent } from './parent-lifecyclehook/parent-lifecyclehook.component';
import { ChildLifecyclehookComponent } from './child-lifecyclehook/child-lifecyclehook.component';
import { InputComponent } from './input/input.component';
import { InputautoComponent } from './inputauto/inputauto.component';
import { MappingchangenameComponent } from './mappingchangename/mappingchangename.component';
// import { AppServicesComponent } from './app-services/message.service';

import { NgxSpinnerModule } from 'ngx-spinner';
import { MyLoaderComponent } from './my-loader/my-loader.component'; // Import the NgxSpinnerModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopnavComponent,
    DatabindComponent,
    ClassStyleComponent,
    EventbindComponent,
    TwoWayComponent,
    NgifComponent,
    NgswitchComponent,
    NgforComponent,
    ParentComponent,
    CardComponent,
    Card2Component,
    HomeComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Contact2Component,
    EmployeeDashboardComponent,
    // AppDirectivesComponent,
    TestdirectiveDirective,
    DropdownComponent,
    BirdsComponent,
    AnimalsComponent,
    GamesComponent,
    ArraysofobjectComponent,
    ArrComponent,
    NgForComponent,
    NgForTaskComponent,
    NgForDynamicComponent,
    LoopsComponent,
    MapmethodComponent,
    PromiseComponent,
    SyncComponent,
    SelectcountryComponent,
    NestedarrComponent,
    SelectboxxxComponent,
    CalculatorComponent,
    ParentLifecyclehookComponent,
    ChildLifecyclehookComponent,
    InputComponent,
    InputautoComponent,
    MappingchangenameComponent,
    MyLoaderComponent,
  
    // AppServicesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot()// Add NgxSpinnerModule to the imports
  ],
  providers: [DesignutilityService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
