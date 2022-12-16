import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit{
  title='Mon épicerie en ligne !';
  ngOnInit(): void {
  $('p').html('test jquery test')
  }
}
