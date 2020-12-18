
import React from 'react';
import { Modal, open } from '../Modal';

class Trigger extends React.Component {
  constructor(props) {
    super(props);

    this.beforeOpen = this.beforeOpen.bind(this);
    this.afterOpen = this.afterOpen.bind(this);
    this.doneClose = this.doneClose.bind(this);

    this.state = {
      beforeModal: 'close',
    };
  }

  beforeOpen() {
    this.setState({ beforeModal: 'open' });
  }

  afterOpen() {
    this.afterNode.style.color = 'red';
  }

  doneClose() {
    this.setState({ beforeModal: 'close' });
  }

  render() {
    return (
      <div>
        <div className="alert alert-info" role="alert">
          모달이 열리기 전에 임의의 함수를 실행할 수 있다.
        </div>
        <h3># before</h3>
        <p>beforeModal : {this.state.beforeModal}</p>
        <button type="button" className="btn btn-default" onClick={() => open('isOpen')}>before Open</button>&nbsp;
        <p />
        <pre>
          {`
            beforeOpen() {
              this.setState({ beforeModal: 'good!!!' });
            }

            doneClose() {
              this.setState({ beforeModal: 'close' });
            }

            ... skip ...
            <Modal
              beforeOpen={this.beforeOpen}
              doneClose={this.doneClose}
          `}
        </pre>

        <Modal
          id="isOpen"
          beforeOpen={this.beforeOpen}
          doneClose={this.doneClose}
        >
          before modal 활성화 (beforeModal: {this.state.beforeModal})
        </Modal>

        <h3># afterOpen</h3>
        <button type="button" className="btn btn-default" onClick={() => open('isOpen2')}>after Open</button>&nbsp;
        <p />
        <pre>
          {`
            afterOpen() {
              this.afterNode.style.color = 'red';
            }

            ... skip ...
            <Modal
              afterOpen={this.afterOpen}>
              <p ref={(node) => { this.afterNode = node; }}>after modal 활성화</p>
            </Modal>
          `}
        </pre>

        <Modal
          id="isOpen2"
          afterOpen={this.afterOpen}
        >
          <p ref={(node) => { this.afterNode = node; }}>after modal 활성화</p>
          <button type="button" className="btn btn-default" onClick={() => open('isOpen22')}>Open 22</button>
          <div>
            <Modal
              id="isOpen22"
            >
              22
            </Modal>
          </div>
        </Modal>

      </div>
    );
  }
}

export default Trigger;
