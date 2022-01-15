import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }            from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule }        from '@angular/material/toolbar';
import { MatCardModule }          from '@angular/material/card';
import { MatIconModule }          from '@angular/material/icon';
import { MatTooltipModule }       from '@angular/material/tooltip';
import { GrafanaPanelComponent }  from './components/grafana-panel/grafana-panel.component';
import { HomeComponent }          from './components/home/home.component';
import { DashboardsComponent }    from './components/dashboards/dashboards.component';
import { AppRoutingModule }       from './app-routing.module';
import { FlexModule }             from '@angular/flex-layout';
import { ScorebarComponent }      from './components/home/scorebar/scorebar.component';
import { PureroomTitleComponent } from './components/pureroom-title/pureroom-title.component';
import { MatSidenavModule }       from '@angular/material/sidenav';
import { MatButtonModule }        from '@angular/material/button';
import { MatDividerModule }       from '@angular/material/divider';

@NgModule({
            declarations: [
              AppComponent,
              GrafanaPanelComponent,
              HomeComponent,
              DashboardsComponent,
              ScorebarComponent,
              PureroomTitleComponent,
            ],
            imports: [
              BrowserModule,
              BrowserAnimationsModule,
              AppRoutingModule,
              MatToolbarModule,
              MatCardModule,
              MatIconModule,
              MatTooltipModule,
              AppRoutingModule,
              FlexModule,
              MatSidenavModule,
              MatButtonModule,
              MatDividerModule,
            ],
            providers:    [],
            bootstrap:    [ AppComponent ],
          })
export class AppModule {}
