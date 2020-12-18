import React from 'react';
import { defaultPropTypes, getDefaultProps } from './properties';

const propTypes = {
  children: defaultPropTypes.children.isRequired,
  isCenter: defaultPropTypes.isCenter.isRequired,
  overlayClassName: defaultPropTypes.overlayClassName,
  overlayStyle: defaultPropTypes.overlayStyle,
  zIndex: defaultPropTypes.zIndex,
  onRequestClose: defaultPropTypes.onRequestClose,
};

class Overlay extends React.Component {
  static get defaultProps() {
    const defaultProps = getDefaultProps();
    return {
      overlayClassName: defaultProps.overlayClassName,
      overlayStyle: defaultProps.overlayStyle,
      zIndex: defaultProps.zIndex,
      onRequestClose: defaultProps.onRequestClose,
    };
  }
  constructor(props) {
    super(props);

    this.overlay = undefined;

    this.className = props.isCenter ?
      'modal-overlay modal-overlay-center modal-overlay-alignCenter' :
      'modal-overlay';
    this.className = props.overlayClassName ? `${this.className} ${props.overlayClassName}` : this.className;

    this.style = props.zIndex ? { zIndex: props.zIndex } : {};
    this.style = props.overlayStyle ? { ...this.style, ...props.overlayStyle } : this.style;

    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    if (typeof this.props.onRequestClose === 'function') {
      this.props.onRequestClose();
    }
  }

  getDOMRootNode() {
    return this.overlay;
  }

  render() {
    return (
      <div
        ref={(node) => { this.overlay = node; }}
        className={this.className}
        style={this.style}
        role="button"
        tabIndex="0"
        onClick={this.onClose}
      >
        {this.props.children}
      </div>
    );
  }
}

Overlay.propTypes = propTypes;

export default Overlay;
