import {Component, ViewEncapsulation} from "@angular/core";
import {ReportDescBody} from "../../../shared/component/me-report-desc/me-report-desc.component";

@Component({
  template: `
        <me-simple-table [table]="table" [settings]="settings"></me-simple-table>
        <me-report-desc [descBody]="descBody"></me-report-desc>
  `,
  styles: [
    `
    th.date {
      min-width: 100px;
    }
        `
  ],
  encapsulation: ViewEncapsulation.None,
})
export class BrokerLiveShowDayComponent {

  table: string = 'bproduct_me_broker_live_show_day';

  settings = {
    isRemoteDataSource: false,
    columns: {
      date: {
        title: '日期',
        type: 'string'
      },
      broker_id: {
        title: '家族ID',
        type: 'string'
      },
      name: {
        title: '名称',
        type: 'string'
      },
      fans: {
        title: '新增粉丝数',
        type: 'number'
      },
      hot_rate: {
        title: '亲密度',
        type: 'number'
      },
      e_income: {
        title: '收入',
        type: 'number'
      },
      live_duration: {
        title: '直播时长',
        type: 'number'
      },
      watch_duration: {
        title: '观看时长',
        type: 'number'
      },
      watch_user_cnt: {
        title: '观看人数',
        type: 'number'
      }

    }
  };
  descBody: ReportDescBody = {
    //报表生成链接
    url: "https://cloud.hiido.com/calculation/schedule/job/detail/6000021491",
    desc: "家族直播分析表",
    from: "2016-08-23",
    rows: [
      {
        name:　"收入",
        desc: "当天新增E豆收入,所有主播E豆收入累计"
      },
      {
        name: "直播时长",
        desc: "家族所有主播当日开播时长,单位：秒"
      },
      {
        name: "观看时长",
        desc: "家族所有主播当日开播观众观看总时长,单位：秒"
      },
      {
        name: "观看人数",
        desc: "家族所有主播当日开播观众总人数,UID去重"
      }

    ]
  };

}
