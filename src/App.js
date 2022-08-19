import './App.css';
import Backdrop from './components/Backdrop';
import Modal from './components/Modal';
import Todo from './components/Todo';

function App() {
  return (
<div>    
      <div className='h1'><h1>MY TODO BABAVARAPRASAD</h1></div>
      <Todo text='basic react'></Todo>
      <Todo text='medium react'></Todo>
      <Todo text='Expert react'></Todo>
</div>
  );
}

export default App;
