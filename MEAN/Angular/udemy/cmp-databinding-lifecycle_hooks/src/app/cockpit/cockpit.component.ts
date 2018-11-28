import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output() createdServer = new EventEmitter<{name: string, content: string}>();
  @Output() createdBlueprint = new EventEmitter<{name: string, content: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.createdServer.emit({name: this.newServerName, content: this.newServerContent});
  }

  onAddBlueprint() {
    this.createdBlueprint.emit({name: this.newServerName, content: this.newServerContent});
  }

}
