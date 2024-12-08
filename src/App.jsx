import './App.css';
import InputBox from './components/InputBox';

function App() {
  return (
    <div className="App bg-gray-800 w-full h-screen p-4 " >
        <h1 className=' text-4xl text-stone-400 font-bold'>
           Currency Converter App
        </h1>
        <InputBox></InputBox>

    </div>
  );
}

export default App;
