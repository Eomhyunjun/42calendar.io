/**
 * Modal Component
 * @author: Seok Kyun. Choi. 최석균 (Syaku)
 * @site: http://syaku.tistory.com
 * @since: 2017. 8. 31.
 */
import 'core-js/fn/array/from';
import 'core-js/fn/array/for-each';
import shortid from 'shortid';
import Modal, { open, close, setDefaultProps, getDefaultProps } from './Modal';

export default Modal;
export const createId = () => shortid.generate();
export {
  Modal,
  open,
  close,
  setDefaultProps,
  getDefaultProps,
};
