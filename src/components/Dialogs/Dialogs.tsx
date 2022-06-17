import React from 'react';
import styles from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import { StoreType} from '../../Redux/state';

type DialogsPropsType = {
   /* state: StateDataType
    changeMessage:(newMessage: string)=> void
    addMessage:(id: string)=> void*/
    store: StoreType
}

export function Dialogs(props: DialogsPropsType) {


    let dialogDataElement = props.store.getState().dialogs.dialogData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);


    let messageDataElement = props.store.getState().dialogs.messageData.map(message => <Message text={message.messageText}
                                                                                     id={message.id}/>)

    let newTextareaValue = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        let value: any = newTextareaValue.current?.value
        props.store.addMessage(value)

    }
    const onChangeMessage = () => {
        let value: any = newTextareaValue.current?.value
        props.store.changeMessage(value)

    }



    return (

        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogDataElement}
            </div>
            <div className={styles.messages}>
                <textarea onChange={onChangeMessage} ref={newTextareaValue} ></textarea>
                <button onClick={addMessage}>send</button>
                {messageDataElement}
            </div>
        </div>
    )
}

