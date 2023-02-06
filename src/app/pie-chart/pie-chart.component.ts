import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  providers: [MessageService]
})
export class PieChartComponent implements OnInit {
  box1: any;
  box2: any;
  data: any;
  msgs: Message[] = [];
  clicked: boolean = true;
  constructor() { }
  ngOnInit() {
  }
  pieChart() {
    this.data = {
      labels: ['box 1', 'box 2'],
      datasets: [
        {
          data: [this.box1, this.box2],
          backgroundColor: [
            "#42A5F5",
            "#FFA726"
          ],
          hoverBackgroundColor: [
            "#64B5F6",
            "#FFB74D"
          ]
        }
      ]
    };
  }
  getVal() {
    if ((this.box1 || this.box2) <= 100) {
      this.pieChart();
      this.clicked = false;
    } else {
      this.clicked = true;
      this.msgs = [
        { severity: 'error', summary: 'Error', detail: 'Invalid Value Please Enter Valid value' }
      ]
    }
  }
  setValue1(v: any) {
    if (v.target.value < 100) {
      this.box2 = 100 - v.target.value;
    } else {
      this.box2 = 0;
    }
  }
  setValue2(v: any) {
    if (v.target.value < 100) {
      this.box1 = 100 - v.target.value;
    } else {
      this.box1 = 0;
    }
  }
}
