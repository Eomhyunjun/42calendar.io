const getBrowser = () => {
  const userAgent = navigator.userAgent.toLowerCase();

  const result = {
    text: null,
    firefox: false,
    msie: false,
    edge: false,
    chrome: false,
    safari: false,
  };

  if (userAgent.indexOf('firefox') > -1) {
    result.firefox = true;
    result.text = 'firefox';
  } else if (userAgent.indexOf('msie') > -1) {
    result.msie = true;
    result.text = 'msie';
  } else if (userAgent.indexOf('ie') > -1) {
    result.msie = true;
    result.text = 'msie';
  } else if (userAgent.indexOf('edge') > -1) {
    result.edge = true;
    result.text = 'edge';
  } else if (userAgent.indexOf('trident') > -1) {
    result.msie = true;
    result.text = 'msie';
  } else if (userAgent.indexOf('chrome') > -1) {
    result.chrome = true;
    result.text = 'chrome';
  } else if (userAgent.indexOf('safari') > -1) {
    result.safari = true;
    result.text = 'safari';
  }
  return result;
};

const doc = document;
const docBody = doc.body;

// 스크롤바 활성화 여부 판단
const isScrollBarDisable = () => doc.body.clientHeight < window.innerHeight;

// 윈도우 스크롤바의 넓이를 계산한다. 크로스 브라우저를 지원한다.
const getScrollBarWidth = () => {
  const inner = doc.createElement('p');
  inner.style.width = '100%';
  inner.style.height = '100%';

  const outer = doc.createElement('div');
  outer.style.position = 'absolute';
  outer.style.top = '0px';
  outer.style.left = '0px';
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.height = '100px';
  outer.style.overflow = 'hidden';
  outer.appendChild(inner);

  docBody.appendChild(outer);

  const w1 = inner.offsetWidth;
  const h1 = inner.offsetHeight;
  outer.style.overflow = 'scroll';
  let w2 = inner.offsetWidth;
  let h2 = inner.offsetHeight;
  if (w1 === w2 && outer.clientWidth) {
    w2 = outer.clientWidth;
  }
  if (h1 === h2 && outer.clientHeight) {
    h2 = outer.clientHeight;
  }

  docBody.removeChild(outer);

  // return [(w1 - w2), (h1 - h2)];
  return w1 - w2;

  // const scrollDiv = doc.createElement('div');
  // scrollDiv.style.visibility = 'hidden';
  // scrollDiv.style.width = '100px';
  // scrollDiv.style.msOverflowStyle = 'scrollbar';
  // doc.body.appendChild(scrollDiv);

  // const widthNoScroll = scrollDiv.offsetWidth;
  // scrollDiv.style.overflow = 'scroll';

  // const scrollDivInner = doc.createElement('div');
  // scrollDivInner.style.width = '100%';
  // scrollDiv.appendChild(scrollDivInner);

  // const widthWithScroll = scrollDivInner.offsetWidth;

  // scrollDiv.parentNode.removeChild(scrollDiv);

  // return widthNoScroll - widthWithScroll;
};

const scrollbarHidden = (syncModal) => {
  const { body } = doc;

  const thisBrowser = getBrowser();
  const scrollbarWidth = getScrollBarWidth();

  if (syncModal.modal.length > 0) {
    body.style.overflow = 'hidden';
    if (!thisBrowser.msie) body.style.paddingRight = `${scrollbarWidth}px`;
  } else {
    body.style.overflow = '';
    if (!thisBrowser.msie) body.style.paddingRight = '';
  }
};

export { isScrollBarDisable, scrollbarHidden };
