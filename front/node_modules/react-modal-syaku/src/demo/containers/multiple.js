import React from 'react';
import { Modal, open } from '../Modal';

class Multiple extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeTest = this.onChangeTest.bind(this);

    this.state = {
      text: '',
    };
  }

  onChangeTest(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <h3># multiple modal</h3>
        <div className="alert alert-info" role="alert">
          여러 모달이 활성화된 순서대로 열고 닫을 수 있다. 모달 source code 순서와 상관없다.

        </div>
        <button type="button" className="btn btn-default" onClick={() => open('isOpen')}>Open #1</button>&nbsp;
        <button type="button" className="btn btn-default" onClick={() => open('isOpen2')}>Open #2</button>
        <p />
        <pre>
          {`
            <Modal
              id="isOpen3"
              width="500px"
              height="500px"
              style={{ backgroundColor: 'gray', color: '#fff' }}
              isCenter={false}
            >
              Child 활성화
            </Modal>

            <Modal
              id="isOpen"
              isOpen
            >
              Open #1 활성화
              <button type="button" className="btn btn-default" onClick={() => open('isOpen3')}>
                Child Open
              </button>
            </Modal>

            <Modal
              id="isOpen2"
              isOpen
              width="300px"
              height="300px"
            >
              Open #2 활성화
            </Modal>
          `}
        </pre>

        <Modal
          id="isOpen3"
          width="500px"
          height="500px"
          style={{ backgroundColor: 'gray', color: '#fff' }}
          isCenter={false}
        >
          Child 활성화
          <input type="text" value={this.state.text} onChange={this.onChangeTest} />
        </Modal>

        <Modal
          id="isOpen"
          isOpen
        >
          Open #1 활성화
          <button type="button" className="btn btn-default" onClick={() => open('isOpen3')}>
            Child Open
          </button>
        </Modal>

        <Modal
          id="isOpen2"
          isOpen
          width="300px"
          height="300px"
        >
          Open #2 활성화
        </Modal>
      </div>
    );
  }
}

export default Multiple;
