import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: string[] = [];

  add(message: string): void {
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
    console.log('Messagem limpa!');
  }

  getMessages(): string[] {
    return this.messages;
  }
}
