/**
 * Modal Component
 * @author: Seok Kyun. Choi. 최석균 (Syaku)
 * @site: http://syaku.tistory.com
 * @since: 2017. 8. 31.
 */
import React, { Component } from 'react';
import withModal, { open, close } from './withModal';
import { defaultPropTypes, setDefaultProps, getDefaultProps } from './properties';

const propTypes = {
  children: defaultPropTypes.children.isRequired,
  zIndex: defaultPropTypes.zIndex,

  onRequestClose: defaultPropTypes.onRequestClose.isRequired,
  isCloseButton: defaultPropTypes.isCloseButton.isRequired,

  className: defaultPropTypes.className,
  style: defaultPropTypes.style,
  containerClassName: defaultPropTypes.containerClassName,
  containerStyle: defaultPropTypes.containerStyle,
  width: defaultPropTypes.width,
  height: defaultPropTypes.height,

  left: defaultPropTypes.left,
  top: defaultPropTypes.top,
  right: defaultPropTypes.right,
  bottom: defaultPropTypes.bottom,
};

const setPosition = (value, position) => {
  if (!value) return {};
  return { [position]: value };
};

class Modal extends Component {
  static get defaultProps() {
    const defaultProps = getDefaultProps();
    return {
      zIndex: defaultProps.zIndex,
      className: defaultProps.className,
      style: defaultProps.style,
      width: defaultProps.width,
      height: defaultProps.height,
      containerClassName: defaultProps.containerClassName,
      containerStyle: defaultProps.containerStyle,
      left: defaultProps.left,
      top: defaultProps.top,
      right: defaultProps.right,
      bottom: defaultProps.bottom,
    };
  }

  constructor(props) {
    super(props);

    this.modal = undefined;
    this.focus = false;

    this.onFocus = this.onFocus.bind(this);

    let style = Object.assign({}, props.style);
    if (props.width && (props.width > 0 || props.width !== '')) {
      style = { ...style, width: props.width };
    }
    if (props.height && (props.height > 0 || props.height !== '')) {
      style = { ...style, height: props.height };
    }

    const left = setPosition(props.left, 'left');
    style = { ...style, ...left };
    const top = setPosition(props.top, 'top');
    style = { ...style, ...top };
    const right = setPosition(props.right, 'right');
    style = { ...style, ...right };
    const bottom = setPosition(props.bottom, 'bottom');
    style = { ...style, ...bottom };

    if (props.zIndex) {
      style = { ...style, zIndex: props.zIndex };
    }

    this.style = style;

    this.closeButton = props.isCloseButton ? (
      <span className="modal-close" role="button" tabIndex="0" onClick={() => { this.props.onRequestClose(); }} />
    ) : null;
  }

  onFocus() {
    if (this.modal && !this.focus) {
      this.focus = true;
      this.modal.focus();
    }
  }

  getDOMRootNode() {
    return this.modal;
  }

  render() {
    return (
      <div
        ref={(node) => { this.modal = node; }}
        className={`modal-wrapper${this.props.className ? ` ${this.props.className}` : ''}`}
        style={this.style}
        role="button"
        tabIndex="0"
        onClick={(e) => { e.stopPropagation(); }}
      >
        <div
          className={`modal-container${this.props.containerClassName ? ` ${this.props.containerClassName}` : ''}`}
          style={this.props.containerStyle ? this.props.containerStyle : {}}
        >
          {
            this.closeButton
          }
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = propTypes;

export default withModal(Modal);
export { open, close, setDefaultProps, getDefaultProps };
