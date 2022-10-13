import { Directive, Output, EventEmitter, HostListener  } from '@angular/core';

@Directive({
  selector: '[appScrollTracker]'
})
export class ScrollTrackerDirective {
  @Output() scrollingFinished = new EventEmitter<void>();
  emitted = false;
  constructor() { }
  @HostListener("window:scroll", [])
  onScroll(): void {
    console.log('this.emmited',this.emitted)
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.emitted) {
      this.emitted = true;
      this.scrollingFinished.emit();
    } else if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) {
      this.emitted = false;
    }
  }

}





