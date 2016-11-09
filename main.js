import "babel-polyfill";
import Cycle from '@cycle/core';
import {div, label, input, hr, h1, makeDOMDriver} from '@cycle/dom';

function main(sources) {
  const sinks = {
    DOM: sources.DOM.select('.field').events('input')
      .map(ev => ev.target.value)
      .startWith('')
      .map(name =>
        div('#root', [
          label('Name:'),
          input('.field', {attributes: {type: 'text', value: name}}),
          hr(),
          h1(name?`Hello, ${name}!`:'Hello! Please enter your name...'),
        ])
      )
  };
  return sinks;
}

Cycle.run(main, { DOM: makeDOMDriver('#app-container') });