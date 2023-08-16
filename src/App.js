import './App.css';
import cheetah from './images/cheetah.jpeg'
import mandril from './images/mandril.jpg'
import whiteTiger from './images/white-tiger.jpg'

function App() {
  return (
      <div className='wrapper'>
        <div className='card'>
          <img src={cheetah} alt='cheetah'/>
          <div className='intro'>
            <h1>Cheetah</h1>
            <p> The cheetah (Acinonyx jubatus) is a remarkable and distinctive large cat known for its incredible speed and agility.</p>
          </div>
        </div>
        <div className='card'>
          <img src={mandril} alt='cheetah'/>
          <div className='intro'>
            <h1>Madril</h1>
            <p> The mandrill (Mandrillus sphinx) is a species of Old World monkey native to the rainforests and coastal areas of central and western Africa </p>
          </div>
        </div>
        <div className='card'>
          <img src={whiteTiger} alt='cheetah'/>
          <div className='intro'>
            <h1>White tiger</h1>
            <p> The white tiger (Panthera tigris) is a rare color variant of the Bengal tiger (Panthera tigris tigris), which is a species of big cat found in the Indian subcontinent. </p>
          </div>
        </div>
      </div>
  );
}

export default App;
