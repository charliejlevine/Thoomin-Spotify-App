import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  test: any;
  constructor(private testService: TestService) {}

  ngOnInit() {
    this.testService.getHelloWorld().subscribe((t: any) => {
      this.test = t.message;
    });
  }
}
