import {Component, NgZone, OnInit} from '@angular/core';
import {SignalRService} from '../signalr.service';
import {ClockTime} from '../clock-time.model';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {
  // public variables declaration
  public currentMessage: ClockTime;
  public allMessages: ClockTime;
  public canSendMessage: Boolean;
  // constructor of the class to inject the service in the constuctor and call events.
  constructor(private _signalRService: SignalRService, private _ngZone: NgZone) {
    // this can subscribe for events
    this.subscribeToEvents();
    // this can check for conenction exist or not.
    this.canSendMessage = _signalRService.connectionExists;
    // this method call every second to tick and respone tansfered to client.
    setInterval(() => {
      this._signalRService.sendTime();
    }, 1000);
  }
  private subscribeToEvents(): void {
    // if connection exists it can call of method.
    this._signalRService.connectionEstablished.subscribe(() => {
      this.canSendMessage = true;
    });

    // finally our service method to call when response received from server
    // event and transfer response to some variable to be shwon on the browser.
    this._signalRService.messageReceived.subscribe((message: ClockTime) => {
      this._ngZone.run(() => {
        this.allMessages = message;
      });
    });
  }
}
