import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-path',
  templateUrl: './test-path.component.html',
  styleUrls: ['./test-path.component.css']
})
export class TestPathComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onLoadServer(){
      this.route.navigate(['servers']);
  }

}
