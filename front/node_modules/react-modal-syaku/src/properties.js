import PropTypes from 'prop-types';

const defaultPropTypes = {
  children: PropTypes.node,
  id: PropTypes.string,

  beforeOpen: PropTypes.func,
  afterOpen: PropTypes.func,
  doneClose: PropTypes.func,

  isOpen: PropTypes.bool,
  onClose: PropTypes.func,

  zIndex: PropTypes.number,

  overlayClassName: PropTypes.string,
  overlayStyle: PropTypes.shape({}),
  isOverlayClose: PropTypes.bool,

  onRequestClose: PropTypes.func,
  isCloseButton: PropTypes.bool,
  isEscClose: PropTypes.bool,
  isAutoFocus: PropTypes.bool,

  className: PropTypes.string,
  style: PropTypes.shape(),
  containerClassName: PropTypes.string,
  containerStyle: PropTypes.shape({}),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  isCenter: PropTypes.bool,
  left: PropTypes.number,
  top: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
};

const defaultProperties = {
  children: null,
  id: null,

  beforeOpen: null,
  afterOpen: null,
  doneClose: null,

  isOpen: false,
  onClose: null,

  zIndex: 3000,

  overlayClassName: null,
  overlayStyle: null,
  isOverlayClose: true,

  onRequestClose: null,
  isCloseButton: true,
  isEscClose: true,
  isAutoFocus: true,

  className: null,
  style: {},
  containerClassName: null,
  containerStyle: {},
  width: '50%',
  height: null,

  isCenter: true,
  left: null,
  top: null,
  right: null,
  bottom: null,

  modalLimit: 20,
};

let defaultProps = Object.assign({}, defaultProperties);
const setDefaultProps = (props) => {
  defaultProps = Object.assign(defaultProps, props);
};

const getDefaultProps = () => defaultProps;


export { defaultPropTypes, defaultProperties, setDefaultProps, getDefaultProps };
