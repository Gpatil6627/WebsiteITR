import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page Components
import Home from './assets/Pages/Home';
import About from './assets/Pages/About';
import Explore from './assets/Pages/Explore';
import Login from './assets/Pages/Login';
import PG from './assets/Pages/Pranayama';
import MG from './assets/Pages/meditation';
import HelpPage from './assets/Pages/Help';
import ProfilePage from './assets/Pages/Profile';
import SignUp from './assets/Pages/Signup';
import Asan from "./assets/Pages/Asan";
import YogaMantras from './assets/Pages/Mantra';
import asanas from './assets/Components/AsanData';
import meditationData from './assets/Components/MeditationData';

// Navbar Components
import MainNav from './assets/Components/MainNav';
import ExploreNav from './assets/Components/ExploreNav';
import Nav3 from './assets/Components/LoginNav';
import mantras from './assets/Components/MantraData';
import pranayamas from './assets/Components/PranayamaData';

function App() {
  const [selectedId, setSelectedId] = useState('');
  const [allAsanas, setAll] = useState([]);

  const [selectedMantraId, setSelectedMantraId] = useState('');
  const [allMantras, setAllMantras] = useState([]);
  
  const[selectedPranayamId, setSelectedPranayamId] = useState('');
  const[allPranayamas, setAllPranayamas] = useState([]);

  const[selectedMeditationId, setSelectedMeditationId] = useState('');
  const[allMeditations, setAllMeditations] = useState([]);
const receiveAsanas = (data) => {
  setAsanasFromChild((prev) => {
    const newItems = data.filter((item) => !prev.some((p) => p.id === item.id));
    return [...prev, ...newItems];
  });
};

const receiveMantras = (data) => {
  setMantrasFromChild((prev) => {
    const newItems = data.filter((item) => !prev.some((p) => p.id === item.id));
    return [...prev, ...newItems];
  });
};

const receivePranayamas = (data) => {
  setPranayamasFromChild((prev) => {
    const newItems = data.filter((item) => !prev.some((p) => p.id === item.id));
    return [...prev, ...newItems];
  });
}
const receiveMeditations = (data) => {
  setMeditationsFromChild((prev) => {
    const newItems = data.filter((item) => !prev.some((p) => p.id === item.id));
    return [...prev, ...newItems];
  });
};

useEffect(() => {
  if (!selectedId) return;
  const match = asanas.find((a) => a.id === selectedId);
  if (match && !allAsanas.some((a) => a.id === match.id)) {
    setAll((prev) => [...prev, match]);
  }
}, [selectedId]);

useEffect(() => {
  if (!selectedMantraId) return;
  const match = mantras.find((m) => m.id === selectedMantraId);
  if (match && !allMantras.some((m) => m.id === match.id)) {
    setAllMantras((prev) => [...prev, match]);
  }
}, [selectedMantraId]);
useEffect(() => {
  if (!selectedPranayamId) return;  
  const match = pranayamas.find((p) => p.id === selectedPranayamId);
  if (match && !allPranayamas.some((p) => p.id === match.id)) {
    setAllPranayamas((prev) => [...prev, match]); 
  }
}, [selectedPranayamId]);

useEffect(() => {
  if (!selectedMeditationId) return;  
  const match = meditationData.find((m) => m.id === selectedMeditationId);
  if (match && !allMeditations.some((m) => m.id === match.id
)) {
    setAllMeditations((prev) => [...prev, match]); 
  }
}, [selectedMeditationId]);

  return (
    <div style={{ minHeight: '100vh', overflowY: 'auto' }}>
      <Router>
        <Routes>
          <Route path="/" element={<><MainNav /><Home /></>} />
          <Route path="/about" element={<><MainNav /><About /></>} />
          <Route path="/explore" element={<><ExploreNav /><Explore /></>} />
          <Route path="/login" element={<><Nav3 /><Login /></>} />
          <Route path="/signup" element={<><MainNav /><SignUp /></>} />
          <Route
            path="/profile"
            element={
              <ProfilePage
                allAsanas={allAsanas}
                setAll={setAll}
                allMantras={allMantras}
                setAllMantras={setAllMantras}
                allPranayamas={allPranayamas}
                setAllPranayamas={setAllPranayamas}
                allMeditations={allMeditations}
                setAllMeditations={setAllMeditations}
              />
            }
          />
          <Route path="/help" element={<><Nav3 /><HelpPage /></>} />
          <Route path="/pranayama" element={<>
          <ExploreNav /><PG 
          pranayamas={pranayamas}
          setSelectedPranayamId={setSelectedPranayamId}
          />
          </>} />
          <Route path="/meditation" element={<><ExploreNav />
          <MG 
          setSelectedMeditationId={setSelectedMeditationId}
          meditationData={meditationData}
          />
          </>} />
          <Route
            path="/mantras"
            element={
              <>
                <ExploreNav />
                <YogaMantras
                  mantras={mantras}
                  setSelectedMantraId={setSelectedMantraId}
                />
              </>
            }
          />
          <Route
            path="/asan"
            element={
              <>
                <ExploreNav />
                <Asan
                  setSelectedId={setSelectedId}
                  asanas={asanas}
                />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;