import React from 'react';
import Confirm, { ConfirmBox } from '../Confirm';

class ConfirmExample extends React.Component {
  constructor(props) {
    super(props);

    this.onSave = this.onSave.bind(this);

    this.state = {
      save: 'no',
    };
  }

  onSave() {
    Confirm(
      '삭제하시겠습니까?',
      () => { this.setState({ save: 'ok' }); },
      () => { this.setState({ save: 'no' }); },
    );

    Confirm(
      '삭제하시겠습니까222?',
      () => { console.log('확인22'); },
      () => { console.log('취소22'); },
    );
  }

  render() {
    return (
      <div>
        <h3># Confirm</h3>
        <button type="button" className="btn btn-default" onClick={() => this.onSave('isOpen')}>저장</button>
        <p />
        {this.state.save}
        <ConfirmBox />
        <hr />
        <pre>
          {`
          onSave() {
            Confirm(
              '삭제하시겠습니까?',
              () => { console.log('확인'); },
              () => { console.log('취소'); },
            );

            Confirm(
              '삭제하시겠습니까222?',
              () => { console.log('확인22'); },
              () => { console.log('취소22'); },
            );
          }

          <button type="button" className="btn btn-default" onClick={() => this.onSave('isOpen')}>저장</button>

          <ConfirmBox /> // only one
          `}
        </pre>
        <hr />
        <pre>
          {`
          /**
            * @author: Seok Kyun. Choi. 최석균 (Syaku)
            * @site: https://github.com/syakuis
            * @email: syaku@naver.com
            * @since: 2018. 1. 11.
            */
            import React from 'react';
            import { observable, action } from 'mobx';
            import { observer } from 'mobx-react';
            // import { Modal, open, close, createId } from 'react-modal-syaku';
            import { Modal, createId, open, close } from './Modal';

            // confirm 한번에 활성화하는 갯수 제한.
            const confirmLimit = 10;

            const syncConfirm = observable({
              confirm: [],
              active: action((id, message, apply, cancel, alert = false) => {
                let confirm = syncConfirm.confirm.slice();

                confirm.push({
                  id, message, apply, cancel, alert,
                });

                if (confirm.length > confirmLimit) {
                  confirm = confirm.slice(0, confirmLimit);
                }

                syncConfirm.confirm.replace(confirm);
              }),
              destroy: action((id) => {
                syncConfirm.confirm = syncConfirm.confirm.filter(item => item.id !== id);
              }),
            });

            const reset = (id) => {
              syncConfirm.destroy(id);
              close(id);
            };

            const onCancel = (id, cancel) => {
              reset(id);
              if (typeof cancel === 'function') cancel(id);
            };

            const onApply = (id, apply) => {
              reset(id);
              if (typeof apply === 'function') apply(id);
            };

            const ConfirmBox = observer(() => (
              syncConfirm.confirm.map(item => (
                <Modal
                  key={item.id}
                  id={item.id}
                  isCloseButton={false}
                  height={0}
                >
                  {
                    <div className="message-body">
                      <div className="confirm-message">
                        {item.message}
                      </div>
                      <hr />
                      <div className="text-right">
                        {
                          !item.alert ?
                            <button type="button" className="btn btn-danger" onClick={() => onCancel(item.id, item.cancel)}>
                              <i className="fa fa-ban" aria-hidden="true" /> 취소
                            </button> : null
                        }
                        <span>&nbsp;</span>
                        <button type="button" className="btn btn-success" onClick={() => onApply(item.id, item.apply)}>
                          <i className="fa fa-check" aria-hidden="true" /> 확인
                        </button>
                      </div>
                    </div>
                  }
                </Modal>
              ))
            ));

            const Confirm = (message, apply, cancel) => {
              const id = createId();
              syncConfirm.active(id, message, apply, cancel);
              open(id);
            };

            export default Confirm;
            export { ConfirmBox };


          `}
        </pre>
      </div>
    );
  }
}

export default ConfirmExample;
