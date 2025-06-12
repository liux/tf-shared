import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TfPreferenceEditorComponent } from 'tf-shared';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TfPreferenceEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tf-preference';
  dropdownOptions = [
    {
      key: '11111',
      value: '122211231',
    },
  ];
  data =
    '{"2021":{"schoolcode":"10287","level":{"国家级":{"number":500,"level":{"创新训练":"Z","创业训练":"E","创业实践":"K","工程实践":"Z","天目启航":"Z","自由探索":"Z"},"numberFormat":"000"},"省级":{"number":500,"level":{"创新训练":"Y","创业训练":"T","创业实践":"P","工程实践":"Y","天目启航":"Y","自由探索":"Y"},"numberFormat":"000"},"校级":{"number":10000,"level":{"创新训练":"X","创业训练":"X","创业实践":"X","工程实践":"X","天目启航":"X","自由探索":"X"},"numberFormat":"00000"},"院级":{"number":10000,"level":{"创新训练":"W","创业训练":"W","创业实践":"W","工程实践":"W","天目启航":"W","自由探索":"W"},"numberFormat":"00000"}}},"2022":{"schoolcode":"10287","level":{"国家级":{"number":500,"level":{"创新训练":"Z","创业训练":"E","创业实践":"K","工程实践":"Z","天目启航":"Z","自由探索":"Z"},"numberFormat":"000"},"省级":{"number":500,"level":{"创新训练":"Y","创业训练":"T","创业实践":"P","工程实践":"Y","天目启航":"Y","自由探索":"Y"},"numberFormat":"000"},"校级":{"number":10000,"level":{"创新训练":"X","创业训练":"X","创业实践":"X","工程实践":"X","天目启航":"X","自由探索":"X"},"numberFormat":"00000"},"院级":{"number":10000,"level":{"创新训练":"W","创业训练":"W","创业实践":"W","工程实践":"W","天目启航":"W","自由探索":"W"},"numberFormat":"00000"}}},"2023":{"Level":{"国家级":{"level":{"创新训练":"Z","创业训练":"E","创业实践":"K","工程实践":"Z","天目启航":"Z","自由探索":"Z"},"Number":500,"NumberFormat":"000"},"省级":{"level":{"创新训练":"Y","创业训练":"T","创业实践":"P","工程实践":"Y","天目启航":"Y","自由探索":"Y"},"Number":500,"NumberFormat":"000"},"校级":{"level":{"创新训练":"X","创业训练":"X","创业实践":"X","工程实践":"X","天目启航":"X","自由探索":"X"},"Number":10003,"NumberFormat":"00000"},"院级":{"level":{"创新训练":"W","创业训练":"W","创业实践":"W","工程实践":"W","天目启航":"W","自由探索":"W"},"Number":10000,"NumberFormat":"00000"}},"SchoolCode":"10287"},"2024":{"Level":{"国家级":{"level":{"创新训练":"Z","创业训练":"E","创业实践":"K","工程实践":"Z","天目启航":"Z","自由探索":"Z"},"Number":500,"NumberFormat":"000"},"省级":{"level":{"创新训练":"Y","创业训练":"T","创业实践":"P","工程实践":"Y","天目启航":"Y","自由探索":"Y"},"Number":500,"NumberFormat":"000"},"校级":{"level":{"创新训练":"X","创业训练":"X","创业实践":"X","工程实践":"X","天目启航":"X","自由探索":"X"},"Number":500,"NumberFormat":"00000"},"院级":{"level":{"创新训练":"W","创业训练":"W","创业实践":"W","工程实践":"W","天目启航":"W","自由探索":"W"},"Number":674,"NumberFormat":"00000"}},"SchoolCode":"10287"},"2025":{"Level":{"国家级":{"level":{"创新训练":"Z","创业训练":"E","创业实践":"K","工程实践":"Z","天目启航":"Z","自由探索":"Z"},"Number":500,"NumberFormat":"000"},"省级":{"level":{"创新训练":"Y","创业训练":"T","创业实践":"P","工程实践":"Y","天目启航":"Y","自由探索":"Y"},"Number":500,"NumberFormat":"000"},"校级":{"level":{"创新训练":"X","创业训练":"X","创业实践":"X","工程实践":"X","天目启航":"X","自由探索":"X"},"Number":958,"NumberFormat":"00000"},"院级":{"level":{"创新训练":"W","创业训练":"W","创业实践":"W","工程实践":"W","天目启航":"W","自由探索":"W"},"Number":506,"NumberFormat":"00000"}},"SchoolCode":"10287"},"2026":{"schoolcode":"10287","level":{"国家级":{"number":0,"level":{"创新训练":"Z","创业训练":"E","创业实践":"K","工程实践":"Z","天目启航":"Z","自由探索":"Z"},"numberFormat":"000"},"省级":{"number":0,"level":{"创新训练":"Y","创业训练":"T","创业实践":"P","工程实践":"Y","天目启航":"Y","自由探索":"Y"},"numberFormat":"000"},"校级":{"number":0,"level":{"创新训练":"X","创业训练":"X","创业实践":"X","工程实践":"X","天目启航":"X","自由探索":"X"},"numberFormat":"00000"},"院级":{"number":0,"level":{"创新训练":"W","创业训练":"W","创业实践":"W","工程实践":"W","天目启航":"W","自由探索":"W"},"numberFormat":"00000"}}},"2027":{"schoolcode":"10287","level":{"国家级":{"number":0,"level":{"创新训练":"Z","创业训练":"E","创业实践":"K","工程实践":"Z","天目启航":"Z","自由探索":"Z"},"numberFormat":"000"},"省级":{"number":0,"level":{"创新训练":"Y","创业训练":"T","创业实践":"P","工程实践":"Y","天目启航":"Y","自由探索":"Y"},"numberFormat":"000"},"校级":{"number":0,"level":{"创新训练":"X","创业训练":"X","创业实践":"X","工程实践":"X","天目启航":"X","自由探索":"X"},"numberFormat":"00000"},"院级":{"number":0,"level":{"创新训练":"W","创业训练":"W","创业实践":"W","工程实践":"W","天目启航":"W","自由探索":"W"},"numberFormat":"00000"}}}}';
}
