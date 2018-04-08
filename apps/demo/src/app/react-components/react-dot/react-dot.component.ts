import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

@Component({
  selector: 'app-react-dot',
  template: `
    <ReactDot [size]="size" [x]="x" [y]="y" [text]="hover ? '*' + text + '*' : text"></ReactDot>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [ 'react-renderer' ],
})
export class ReactDotComponent implements OnChanges {

  @Input() x: number;
  @Input() y: number;
  @Input() size: number;
  @Input() text: string;

  hover = false;
  // style: { [k: string]: any };
  // bgColor: string;

  ngOnChanges(changes: SimpleChanges) {
  //   const shapeChanged = 'x' in changes || 'y' in changes || 'size' in changes;

  //   if (shapeChanged) {
  //     this.updateStyle();
  //   }
  }

  // enter() {
  //   this.hover = true;
  //   this.bgColor = '#ff0';
  // }

  // leave() {
  //   this.hover = false;
  //   this.bgColor = undefined;
  // }

  // private updateStyle() {
  //   this.style = {
  //     width: this.size,
  //     height: this.size,
  //     left: this.x,
  //     top: this.y,
  //     borderRadius: '50%',
  //     lineHeight: this.size,
  //   };
  // }

}

export class ReactDot extends React.Component {

  private divStyle = {
    display: 'block',
    position: 'absolute',
    'text-align': 'center',
    'background-color': '#ddd',
    color: '#222',
    'border-radius': '50%',
    cursor: 'pointer',
  }


  constructor(props) {
    super(props);

    console.log(props);

    this.divStyle['width'] = this.props['size'];
    this.divStyle['line-height'] = this.props['size'];
    this.divStyle['height'] = this.props['size'];
    this.divStyle['left'] = this.props['x'];
    this.divStyle['top'] = this.props['y'];
  }

  render() {
    return React.createElement('div', { style: this.divStyle }, [this.props['text']]);
  }

}
