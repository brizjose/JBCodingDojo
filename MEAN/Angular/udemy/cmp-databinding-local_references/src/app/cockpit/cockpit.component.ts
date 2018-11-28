import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() createdServer = new EventEmitter<{name: string, content: string}>();
  @Output() createdBlueprint = new EventEmitter<{name: string, content: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer(name: HTMLInputElement, content: HTMLInputElement) {
    console.log(name.value, content.value);
    this.createdServer.emit({name: name.value, content: content.value});
  }

  onAddBlueprint(name: HTMLInputElement, content: HTMLInputElement) {
    console.log(name.value, content.value);
    this.createdBlueprint.emit({name: name.value, content: content.value});
  }

}
