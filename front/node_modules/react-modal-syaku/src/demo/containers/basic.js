import React from 'react';
import { Modal, open, close, createId } from '../Modal';

class Basic extends React.Component {
  constructor(props) {
    super(props);

    this.id = createId();

    this.onChangeTest = this.onChangeTest.bind(this);

    this.state = {
      text: '',
    };
  }

  onOpen(name) {
    this.setState({ [name]: true });
  }

  onClose(name) {
    this.setState({ [name]: false });
  }

  onChangeTest(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <h3># basic</h3>
        <button type="button" className="btn btn-default" onClick={() => { open(this.id); }}>Open</button>
        <p />
        <pre>
          {`
            <button type="button" className="btn btn-default" onClick={() => { open(this.id); }}>Open</button>
            <Modal
              id={this.id}
              isOpen={false}
            >
          `}
        </pre>

        <Modal
          id={this.id}
          isOpen={false}
        >
          <div>
            esc 키로 닫을 수 있다.
            <input type="text" value={this.state.text} onChange={this.onChangeTest} />
          </div>
        </Modal>
        <hr />
        <h3># inside scrollbar : modal container scrollbar</h3>
        <button type="button" className="btn btn-default" onClick={() => open('isOpenScrollbar')}>Open</button>
        <p />
        <pre>
          {`
            id="isOpenScrollbar"
            width={500}
            height={500}
            containerStyle={{
              overflowY: 'auto',
              padding: '10px 0px 10px 10px',
            }}
          `}
        </pre>

        <Modal
          id="isOpenScrollbar"
          width={500}
          height={500}
          containerStyle={{
            overflowY: 'auto',
            padding: '10px 0px 10px 10px',
          }}
        >
          <div style={{ height: 1200 }}>
            esc 키로 닫을 수 있다.
          </div>
        </Modal>
        <hr />
        <h3># button close, esc disable</h3>
        <button type="button" className="btn btn-default" onClick={() => open('isOpenButtonClose')}>Open</button>
        <p />
        <pre>
          {`
          id="isOpenButtonClose"
          isEscClose={false}
          isCloseButton={false}
          `}
        </pre>

        <Modal
          id="isOpenButtonClose"
          isEscClose={false}
          isCloseButton={false}
        >
          <div>
            esc 키로 닫을 수 없다.
            <button type="button" className="btn btn-danger" onClick={() => close('isOpenButtonClose')}>Close</button>
          </div>
        </Modal>
        <hr />
        <h3># style modify</h3>
        <button type="button" className="btn btn-default" onClick={() => open('isOpen2')}>Open</button>
        <p />
        <pre>
          {`
          id="isOpen2"
          className="fontSize-20"
          style={{ color: '#fff', background: 'gray' }}
          width={500}
          height={500}
          `}
        </pre>

        <Modal
          id="isOpen2"
          className="fontSize-20"
          style={{ color: '#fff', background: 'gray' }}
          width={500}
          height={500}
        >
          <div>
            모달의 크기 그리고 `css class, style` 를 변경하였다.<br />
            esc 키로 닫을 수 있다.
          </div>
        </Modal>
        <hr />
        <h3># modal container style modify</h3>
        <button type="button" className="btn btn-default" onClick={() => open('isOpen21')}>Open</button>
        <p />
        <pre>
          {`
          id="isOpen21"
          containerStyle={{ padding: 0 }}
          width={500}
          `}
        </pre>

        <Modal
          id="isOpen21"
          containerStyle={{ padding: 0 }}
          width={500}
        >
          <div className="panel panel-default" style={{ marginBottom: 0, height: '100%' }}>
            <div className="panel-heading">Panel heading without title</div>
            <div className="panel-body">
              Panel content<br />
              Panel content<br />
              Panel content<br />
              Panel content<br />
              Panel content<br />
              Panel content<br />
              Panel content<br />
            </div>
          </div>
        </Modal>
        <hr />
        <h3># no center</h3>
        <button type="button" className="btn btn-default" onClick={() => open('isOpen3')}>Open</button>
        <p />
        <pre>
          {`
          id="isOpen3"
          isCenter={false}
          height={500}
          style={{ margin: 10 }}
          `}
        </pre>

        <Modal
          id="isOpen3"
          isCenter={false}
          height={500}
          style={{ margin: 10 }}
        >
          <div>
            기본적으로 `margin: 0` 이다. 원한다면 직접 `style` 에 `margin` 설정해야 한다.<br />
            esc 키로 닫을 수 있다.
          </div>
        </Modal>
        <hr />
        <h3># overlay click not close</h3>
        <button type="button" className="btn btn-default" onClick={() => open('isOpen4')}>Open</button>
        <p />
        <pre>
          {`
          id="isOpen4"
          isOverlayClose={false}
          `}
        </pre>

        <Modal
          id="isOpen4"
          isOverlayClose={false}
        >
          <div>
            배경을 클릭하면 모달이 닫히지 않는 다.
          </div>
        </Modal>
        <hr />
      </div>
    );
  }
}

export default Basic;
