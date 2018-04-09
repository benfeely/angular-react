// tslint:disable:no-output-rename
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { COLORS } from '../../components/triangle/triangle.component';


@Component({
  selector: 'app-react-dot',
  templateUrl: './react-dot.component.html',
  styleUrls: ['./react-dot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [ 'react-renderer' ],
})
export class ReactDotComponent {

  @Input() x: string;
  @Input() y: string;
  @Input() size: string;
  @Input() text: string;

  activeColor = COLORS.default;
  style: ReactDotStyle = {
    width: this.size,
    lineHeight: this.size,
    height: this.size,
    left: this.x,
    top: this.y,
    color: this.activeColor.text,
    backgroundColor: this.activeColor.bg,
  }

  onMouseEnter = ev => {
    this.activeColor = COLORS.hover;
  }

  onMouseLeave = ev => {
    this.activeColor = COLORS.default;
  }

}

interface ReactDotStyle {
  display?: string,
  position?: string,
  textAlign?: string,
  borderRadius?: string,
  cursor?: string,

  width?: string,
  lineHeight?: string,
  height?: string,
  left?: string,
  top?: string,
  color?: string,
  backgroundColor?: string,
}

interface ReactDotProps {
  style: ReactDotStyle
  onMouseEnter?: (ev) => void,
  onMouseLeave?: (ev) => void,
}

export class ReactDot extends React.Component {

  private filteredProps: ReactDotProps = {
    style: {
      display: 'block',
      position: 'absolute',
      textAlign: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
    }
  }

  private setStyle(name: string, value: string) {
    this.filteredProps.style[name] = value;
  }


  constructor(props) {
    super(props);

    this.filteredProps.style = { ...this.filteredProps.style, ...this.props['style'] };
    this.filteredProps.onMouseEnter = this.props['onMouseEnter'];
    this.filteredProps.onMouseLeave = this.props['onMouseLeave'];

    console.log(this.filteredProps, this.props['style']);
    // this.setStyle('width', props['style']['size']);
    // this.setStyle('lineHeight', props['size']);
    // this.setStyle('height', props['size']);
    // this.setStyle('left', props['x']);
    // this.setStyle('top', props['y']);
    // this.setStyle('color', props['color']);
    // this.setStyle('backgroundColor', props['backgroundColor']);

    // this.filteredProps.onMouseEnter = props['mouseenter'];
    // this.filteredProps.onMouseLeave = props['mouseleave'];
  }

  render() {
    return React.createElement('div', this.filteredProps, [this.props['text'], ...this.props.children as any]);
  }

}
