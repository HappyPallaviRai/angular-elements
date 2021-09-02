import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: '<div>this is my {{ message }}</div>',
  styles: [`
  div{
    border: 1px;
    background: salmon;
    padding: 10 px;
    font-family: sana-serif;
  }
  `]
})
export class AlertComponent implements OnInit {

  @Input() message: string;
  constructor() { }

  ngOnInit(): void {
  }

}
