import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

// hooks
import useRedux from '../hooks/useRedux';

// actions
import { handleDialog } from '../redux/actions';

// dialog box design
const PortalElement = document.getElementById('overlays');

const Dialog = ({
    open,
    hasHeader,
    hasBody,
    hasFooter,
    onConfirm
}) => {

    const { dispatch } = useRedux()

    return (
        <>
            {ReactDOM.createPortal(
                <Modal isOpen={open} centered>
                    {hasHeader &&
                        <ModalHeader toggle={hasHeader.cancleButton && (() => dispatch(handleDialog()))}>
                            {hasHeader.header}
                        </ModalHeader>
                    }
                    {hasBody &&
                        <ModalBody>
                            {hasBody.children}
                        </ModalBody>
                    }
                    {hasFooter &&
                        <ModalFooter>
                            {hasFooter.confirmButton &&
                                <Button color='primary' onClick={onConfirm}>
                                    {hasFooter.confirmButtonText ? hasFooter.confirmButtonText : 'Ok'}
                                </Button>
                            }
                            {hasFooter.cancleButton &&
                                <Button onClick={() => dispatch(handleDialog())}>
                                    {hasFooter.cancleButtonText ? hasFooter.cancleButtonText : 'Cancle'}
                                </Button>
                            }
                        </ModalFooter>
                    }
                </Modal>,
                PortalElement
            )}
        </>
    )
}


const ConfirmationDialog = () => {

    const { dispatch, selector } = useRedux();

    const dialogToggle = selector((state) => state.AppConfig.isDialogOpen)
    const dialogConfig = selector((state) => state.AppConfig.dialogConfig)

    // confirm action
    const onConfirm = () => {
        dispatch(handleDialog())
        dialogConfig.actionCallback(true);
    }

    return (
        <>
            {dialogConfig.body &&
                <Dialog
                    open={dialogToggle}
                    hasHeader={dialogConfig.body.hasHeader}
                    hasBody={dialogConfig.body.hasBody}
                    hasFooter={dialogConfig.body.hasFooter}
                    onConfirm={onConfirm}
                />
            }
        </>
    )
}

export default ConfirmationDialog