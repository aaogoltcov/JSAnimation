'use strict';

export default class Collapse {
  constructor() {
    this.collapseButton = document.querySelector('[data-toggle="collapse"]');
    this.collapseText = document.querySelector('[id="collapseExample"]');
    this.collapseButton.addEventListener('click', event => {
      event.preventDefault();
      if ( this.collapseText.classList.contains('show') ) {
        this.collapseText.classList.remove('show');
        this.collapseText.classList.remove('collapse');
        this.collapseText.classList.add('collapsing');
        this.collapseText.classList.add('close_anime');
        window.setTimeout(() => {
          this.collapseText.classList.remove('collapsing');
          this.collapseText.classList.remove('close_anime');
          this.collapseText.classList.add('collapse');
        }, 1000)
      } else {
        this.collapseText.classList.remove('collapse');
        this.collapseText.classList.add('collapsing');
        this.collapseText.classList.add('open_anime');
        window.setTimeout(() => {
          this.collapseText.classList.remove('collapsing');
          this.collapseText.classList.remove('open_anime');
          this.collapseText.classList.add('collapse');
          this.collapseText.classList.add('show');
        }, 1000)


      }

    })
  }
}
