import { Component, OnInit, Input,ViewEncapsulation, OnChanges, SimpleChange, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'], 
  encapsulation: ViewEncapsulation.Emulated  // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element :{type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  
  constructor() { 
    console.log('constructor called!');
    
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChnages called!');
    console.log(changes); 
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');

    
  }
  ngDoCheck(){
    console.log('ngDoCheck called!');
    
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called!  ');
    console.log('Text content of paragraph: ', this.paragraph.nativeElement.textContent);
    
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!  ');

  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit called!  ');

    console.log('text Content: '+ this.header.nativeElement.textContent);


  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!  ');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called!  ');
  }
}
