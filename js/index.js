'use strict';

const site = {
  title: 'Green site',
  headers: ['Header1', 'Test', 'Header3', 'New article'],
  showHeaders() {
    console.log(this);
    this.headers.forEach(function (header, index) {
      console.log(this.title);
      console.log(that.title);
      console.log(`header ${index}: ${header}`);
      const test = () => {
        console.log(this);
      };
      test();
    }, this);
  },
};

site.showHeaders();
