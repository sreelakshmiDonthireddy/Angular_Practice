import { Component } from '@angular/core';
import { SignalService } from '../services/signal.service';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css']
})
export class SignalComponent {
  constructor(private signalService: SignalService) {}

  sendSignal() {
    this.signalService.sendSignal('Hello from SignalComponent!');
  }
}
