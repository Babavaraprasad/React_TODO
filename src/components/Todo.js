import Modal from "./Modal";
import { useState } from "react";
import Backdrop from "./Backdrop";
function Todo(props) {
  const [modalisopen, setmodalisopen] = useState(false);

  function deletehandler() {
    setmodalisopen(true);
  }
  function closeModalHandler(){
    setmodalisopen(false);
  }
  return (
    <div className="Card">
      <h2>{props.text}</h2>
      <div className="button">
        <button className="btn" onClick={deletehandler}>
          Delete
        </button>
        {modalisopen?<Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>:null}
        {modalisopen?<Backdrop onCancel={closeModalHandler}/>:null}
      </div>
    </div>
  );
}

export default Todo;
