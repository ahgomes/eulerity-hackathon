import PetList from '../components/PetList.jsx';
import Options from '../components/Options.jsx';
import Download from '../components/Download.jsx';
import TopHead from '../components/TopHead.jsx';
import Modal from '../components/Modal.jsx';
import { useSelector } from 'react-redux';

export default function Home() {
    const selectCount = useSelector((state) => state.select.count);

    return (
        <div className="App">
          <header className="App-header">
              <TopHead />
              <Options/>
          </header>
          <main>
              <PetList/>
              <Modal/>
          </main>
          <footer className={(selectCount > 0) ? 'to-download' : ''}>
              <Download/>
          </footer>
        </div>
    );
}
