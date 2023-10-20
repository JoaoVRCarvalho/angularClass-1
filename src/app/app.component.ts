import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-primeira-aula';
  list = [{
    name: 'abobora',
    valor: 32
  }, {
    name: 'arroz',
    valor: 22
  }]

  add(): void {
    console.log('add?');
  }
}
