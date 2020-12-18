import { decorate, observable, action, computed } from 'mobx';
import { defaultProperties } from './properties';

class ModalStore {
  modal = []

  get current() {
    const firstIndex = 0;
    if (this.modal.length === firstIndex) return null;
    return this.modal[firstIndex];
  }

  isOpen(id) {
    return this.modal.indexOf(id) > -1;
  }

  open(id) {
    let modal = this.modal.slice();
    if (modal.indexOf(id) === -1) {
      modal.unshift(id);

      if (modal.length > defaultProperties.modalLimit) {
        modal = modal.slice(0, defaultProperties.modalLimit);
      }
      this.modal.replace(modal);
    }
  }

  close(id) {
    const modal = this.modal.slice();
    const index = modal.indexOf(id);
    if (index > -1) {
      modal.splice(index, 1);
      this.modal.replace(modal);
    }
  }
}

export default decorate(ModalStore, {
  modal: observable,
  current: computed,
  open: action,
  close: action,
});
