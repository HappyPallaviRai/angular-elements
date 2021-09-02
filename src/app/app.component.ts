import { Component, Injector } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { createCustomElement} from '@angular/elements';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-elements';
  content = null;
  constructor(injector:Injector, domSanitizer: DomSanitizer){
    const angularElement = createCustomElement(AlertComponent, {injector: injector})
    customElements.define('my-alert', angularElement); // not angular but javascript
    setTimeout(() => {
      this.content = domSanitizer.bypassSecurityTrustHtml('<my-alert message= "hi"></my-alert>')
    }, 1000);
    
  }
}
