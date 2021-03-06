import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgaModule} from "../../theme/nga.module";
import {routing} from "./tinytimes-reports.routing";
import {ChartModule} from "angular2-highcharts";
import {EasyqService, WebdisService} from "../../shared/service";
import {TinytimesReports} from "./tinytimes-reports.component";
import {Hour24ChannelDailySummaryComponent} from "./gf-channel/hour-24-channel-daily-summary.component";
import {Hour24ChannelDailyDetailsComponent} from "./gf-channel/hour-24-channel-daily-details.component";
import {Hour24ChannelWeeklySummaryComponent} from "./gf-channel/hour-24-channel-weekly-summary.component";
import {MeSimpleTableModule} from "../../shared/component/me-simple-table/me-simple-table.module";
import {MeSimpleChartModule} from "../../shared/component/me-simple-chart/me-simple-chart.module";
import {MeReportDescModule} from "../../shared/component/me-report-desc/me-report-desc.module";
import {NumToPercentPipe} from "../../shared/pipes/format";
import {AnchorLiveShowDayComponent} from "./anchor/anchor-live-show-day.component";
import {MainHotUserClickComponent} from "./top-position/main-hot-user-click.component";
import {AnchorLiveShowComponent} from "./anchor/anchor-live-show.component";
import {ServerFilterTipsModule} from "../../shared/component/server-filter-tips/server-filter-tips.module";
import {AnchorBrokerFlatComponent} from "./broker/anchor-broker-flat.component";
import {BrokerLiveShowDayComponent} from "./broker/broker-live-show-day.component";
import {TimeTransformPipe} from "../../shared/pipes/format/time-transform.pipe";
import {AnchorLivePrivateComponent} from "./anchor/anchor-live-private.component";
import {AnchorLiveEntryComponent} from "./anchor/anchor-live-entry.component";
import {AnchorLiveShowSummaryComponent} from "./anchor/anchor-live-show-summary.component";
import {AnchorDataSourceComponent} from "./anchor/anchor-data-source.component";
import {AnchorTypeExposedDayComponent} from "./data-weekly-report/anchor-type-exposed-day.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    ChartModule,
    MeSimpleTableModule,
    MeSimpleChartModule,
    MeReportDescModule,
    ServerFilterTipsModule,
    routing
  ],
  declarations: [
    TinytimesReports,
    Hour24ChannelDailySummaryComponent,
    Hour24ChannelDailyDetailsComponent,
    Hour24ChannelWeeklySummaryComponent,
    AnchorLiveShowComponent,
    AnchorLiveShowDayComponent,
    AnchorLivePrivateComponent,
    AnchorLiveEntryComponent,
    AnchorLiveShowSummaryComponent,
    AnchorDataSourceComponent,
    MainHotUserClickComponent,
    AnchorBrokerFlatComponent,
    BrokerLiveShowDayComponent,
    AnchorTypeExposedDayComponent,
    NumToPercentPipe,
    TimeTransformPipe
  ],
  providers: [
    EasyqService,
    WebdisService
  ]

})
export default class TinytimesReportsModule {
}
