/**
 * 현재 modalId 는 componentDid 상태에서만 확인할 수 있다.
 * @author: Seok Kyun. Choi. 최석균 (Syaku)
 * @site: http://syaku.tistory.com
 * @since: 2017. 9. 16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import shortid from 'shortid';
import '_resources/modal.css';
import ModalStore from './ModalStore';
import { defaultPropTypes, getDefaultProps } from './properties';
import { isScrollBarDisable, scrollbarHidden } from './utils';
import Overlay from './Overlay';

const doc = document;
const docBody = doc.body;

let reactModal = doc.getElementById('react-modal');

if (!reactModal) {
  reactModal = doc.createElement('div');
  reactModal.setAttribute('id', 'react-modal');

  // docBody.insertBefore(
  //   reactModal,
  //   docBody.hasChildNodes() ? docBody.childNodes[0] : null,
  // );

  docBody.appendChild(reactModal);
}

const propTypes = {
  children: defaultPropTypes.children.isRequired,
  id: defaultPropTypes.id,

  isCenter: defaultPropTypes.isCenter,
  left: defaultPropTypes.left,
  top: defaultPropTypes.top,
  right: defaultPropTypes.right,
  bottom: defaultPropTypes.bottom,

  beforeOpen: defaultPropTypes.beforeOpen,
  afterOpen: defaultPropTypes.afterOpen,
  doneClose: defaultPropTypes.doneClose,

  isOpen: defaultPropTypes.isOpen,
  onClose: defaultPropTypes.onClose,

  zIndex: defaultPropTypes.zIndex,

  overlayClassName: defaultPropTypes.overlayClassName,
  overlayStyle: defaultPropTypes.overlayStyle,
  isOverlayClose: defaultPropTypes.isOverlayClose,

  isCloseButton: defaultPropTypes.isCloseButton,
  isEscClose: defaultPropTypes.isEscClose,
  isAutoFocus: defaultPropTypes.isAutoFocus,
};

const modalStore = new ModalStore();

const withModal = (Component) => {
  const Modal = observer(class Modal extends React.Component {
    static get defaultProps() {
      const defaultProps = getDefaultProps();
      return {
        id: defaultProps.id,
        isCenter: defaultProps.isCenter,
        left: defaultProps.left,
        top: defaultProps.top,
        right: defaultProps.right,
        bottom: defaultProps.bottom,
        beforeOpen: defaultProps.beforeOpen,
        afterOpen: defaultProps.afterOpen,
        doneClose: defaultProps.doneClose,
        isOpen: defaultProps.isOpen,
        onClose: defaultProps.onClose,
        zIndex: defaultProps.zIndex,
        overlayClassName: defaultProps.overlayClassName,
        overlayStyle: defaultProps.overlayStyle,
        isOverlayClose: defaultProps.isOverlayClose,
        isEscClose: defaultProps.isEscClose,
        isCloseButton: defaultProps.isCloseButton,
        isAutoFocus: defaultProps.isAutoFocus,
      };
    }

    static get propTypes() {
      return propTypes;
    }

    constructor(props) {
      super(props);

      this.id = props.id || shortid.generate();

      this.ele = doc.createElement('div');
      this.ele.setAttribute('id', this.id);

      this.isCenter = props.isCenter;
      if (props.left !== null || props.top !== null
        || props.right !== null || props.bottom !== null) {
        this.isCenter = false;
      }

      this.beforeOpenOnce = false;
      this.afterOpenOnce = false;
      this.doneCloseOnce = false;

      this.isKeydownEventListener = false;
      this.isResizeEventListener = false;

      this.onOpen = this.onOpen.bind(this);
      this.onRequestClose = this.onRequestClose.bind(this);
      this.onEscClose = this.onEscClose.bind(this);
      this.onResizeEventListener = this.onResizeEventListener.bind(this);

      this.isOpen = modalStore.isOpen(this.id);
    }

    componentWillMount() {
      if (this.props.isOpen) {
        this.onOpen();
        this.isOpen = modalStore.isOpen(this.id);
      }
      this.onEventBeforeOpen();
    }

    componentDidMount() {
      if (this.isOpen) reactModal.appendChild(this.ele);

      this.onEventAfterOpen();

      this.isScrollBarDisable = isScrollBarDisable();
      if (!this.isScrollBarDisable) scrollbarHidden(modalStore);

      if (this.props.isEscClose &&
          this.isOpen && !this.isKeydownEventListener && modalStore.current === this.id) {
        window.addEventListener('keydown', this.onEscClose);
        this.isKeydownEventListener = true;
      }

      if (!this.isResizeEventListener && modalStore.current === this.id) {
        this.onResizeEventListener();
        window.addEventListener('resize', this.onResizeEventListener);
        this.isResizeEventListener = true;
      }

      if (this.id === modalStore.current && this.props.isAutoFocus) this.modal.onFocus();
    }

    componentWillUpdate() {
      this.isOpen = modalStore.isOpen(this.id);

      this.onEventBeforeOpen();
      if (!this.isOpen) this.onEventDoneClose();
    }

    componentDidUpdate() {
      const ele = doc.getElementById(this.id);
      if (ele && !this.isOpen) reactModal.removeChild(this.ele);
      if (!ele && this.isOpen) reactModal.appendChild(this.ele);

      this.onEventAfterOpen();

      if (this.props.isEscClose) {
        window.removeEventListener('keydown', this.onEscClose);
        this.isKeydownEventListener = false;

        if (this.isOpen && modalStore.current === this.id) {
          window.addEventListener('keydown', this.onEscClose);
          this.isKeydownEventListener = true;
        }
      }

      this.onResizeEventListener();
      window.removeEventListener('resize', this.onResizeEventListener);
      this.isResizeEventListener = false;

      if (modalStore.current === this.id) {
        window.addEventListener('resize', this.onResizeEventListener);
        this.isResizeEventListener = true;
      }

      if (!this.isScrollBarDisable) scrollbarHidden(modalStore);

      if (!this.isOpen) {
        this.beforeOpenOnce = false;
        this.afterOpenOnce = false;
      } else {
        this.doneCloseOnce = false;
      }

      if (this.id === modalStore.current && this.props.isAutoFocus) this.modal.onFocus();
    }

    componentWillUnmount() {
      if (this.props.isEscClose) window.removeEventListener('keydown', this.onEscClose);
      window.removeEventListener('resize', this.onResizeEventListener);
      const ele = doc.getElementById(this.id);
      if (ele) reactModal.removeChild(this.ele);
    }

    onRequestClose() {
      if (typeof this.props.onClose === 'function') {
        this.props.onClose(this.id);
      } else {
        modalStore.close(this.id);
      }
      this.isOpen = false;
    }

    onEscClose(e) {
      if (e.keyCode === 27) {
        this.onRequestClose();
      }
    }

    onEventBeforeOpen() {
      if (this.isOpen && !this.beforeOpenOnce && typeof this.props.beforeOpen === 'function') {
        this.props.beforeOpen();
        this.beforeOpenOnce = true;
      }
    }

    onEventAfterOpen() {
      if (this.isOpen && !this.afterOpenOnce && typeof this.props.afterOpen === 'function') {
        this.props.afterOpen();
        this.afterOpenOnce = true;
      }
    }

    onEventDoneClose() {
      if (!this.doneCloseOnce && typeof this.props.doneClose === 'function') {
        this.props.doneClose();
        this.doneCloseOnce = true;
      }
    }

    onResizeEventListener() {
      // resize 이벤트를 통해 모달의 세로 정렬을 조작한다.
      // 모달 높이가 브라우저보다 클 경우 중앙 정렬을 하지 않는 다.
      if (!this.isCenter || !this.modal || !this.overlay) return;
      const modal = this.modal.getDOMRootNode();
      const overlay = this.overlay.getDOMRootNode();
      if (modal) {
        const windowHeight = window.innerHeight;
        if (windowHeight < modal.offsetHeight) {
          overlay.classList.remove('modal-overlay-alignCenter');
        } else {
          overlay.classList.add('modal-overlay-alignCenter');
        }
      }
    }

    onOpen() {
      modalStore.open(this.id);
    }

    render() {
      if (!modalStore.isOpen(this.id)) return null;
      const {
        isCenter, overlayClassName, overlayStyle, ...props
      } = this.props;
      return ReactDOM.createPortal(
        <Overlay
          ref={(node) => { this.overlay = node; }}
          zIndex={this.props.zIndex}
          isCenter={this.isCenter}
          overlayClassName={overlayClassName}
          overlayStyle={overlayStyle}
          onRequestClose={this.props.isOverlayClose ? this.onRequestClose : null}
        >
          <Component
            {...props}
            ref={(node) => { this.modal = node; }}
            onRequestClose={this.onRequestClose}
          />
        </Overlay>,
        this.ele,
      );
    }
  });

  return Modal;
};

export const open = (id) => { modalStore.open(id); };
export const close = (id) => { modalStore.close(id); };
export default withModal;
