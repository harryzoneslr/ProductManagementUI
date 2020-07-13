import { Component, OnInit } from '@angular/core';
import * as Chart from 'chartjs';

@Component({
  selector: 'dash-board',
  templateUrl: './dashBoard.component.html',
  styleUrls: ['./dashBoard.component.css']
})
export class DashBoardComponent implements OnInit {
  constructor() { }

  ngOnInit() {

    var chart = document.getElementById('conversionsChart');

    if (typeof Chart !== 'undefined' && chart) {
      new Chart(chart, {
        type: 'bar',
        options: {
          scales: {
            yAxes: [{
              ticks: {
                callback: function(value) {
                  return value + '%';
                }
              }
            }]
          }
        },
        data: {
          labels: ['Oct 1', 'Oct 2', 'Oct 3', 'Oct 4', 'Oct 5', 'Oct 6', 'Oct 7', 'Oct 8', 'Oct 9', 'Oct 10', 'Oct 11', 'Oct 12'],
          datasets: [{
            label: '2020',
            data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32]
          }, {
            label: '2019',
            data: [15, 10, 20, 12, 7, 0, 8, 16, 18, 16, 10, 22],
            backgroundColor: '#d2ddec',
            hidden: true
          }]
        }
      });
    }


  }


}
