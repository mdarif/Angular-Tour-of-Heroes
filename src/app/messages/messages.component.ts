import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  /**
   * Edit the constructor with a parameter that declares a public
   * messageService property. Angular injects the singleton MessageService
   * into that property when it creates the MessagesComponent.
   */

  constructor(public messageService: MessageService) {}
  // The messageService property must be public because you're going to bind to it in the template.
}
