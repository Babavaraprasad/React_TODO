
function Modal(props)
{
function cancelHandler()
{
props.onCancel();
}
function confirmHandler()
{
props.onConfirm();
}
//here instead of separate functions for buttons confirm and cancel
//we can directly write {props.confirmHandler} in onclick attribute

return(
<div className="modal">
    <p className="paragraph">
        Are you sure you want to delete?
    </p>
    <button className="btn-confirm" onClick={confirmHandler}>confirm</button>

    <br/>
    <button className="btn-cancel" onClick={cancelHandler}>cancel</button>
</div>
    )
}
export default Modal;