import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() createdServer = new EventEmitter<{name: string, content: string}>();
  @Output() createdBlueprint = new EventEmitter<{name: string, content: string}>();

  @ViewChild('serverNameInput') serverNameInput: ElementRef;
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.createdServer.emit({
      name: this.serverNameInput.nativeElement.value,
      content: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint() {
    this.createdBlueprint.emit({
      name: this.serverNameInput.nativeElement.value,
      content: this.serverContentInput.nativeElement.value
    });
  }
}
