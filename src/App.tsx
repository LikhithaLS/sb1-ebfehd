import React from 'react';
import Header from './components/Layout/Header';
import MapView from './components/Map/MapView';
import SpeciesList from './components/Sidebar/SpeciesList';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex">
        <div className="w-96 p-4 overflow-y-auto">
          <SpeciesList />
        </div>
        <div className="flex-1 relative">
          <MapView />
        </div>
      </div>
    </div>
  );
}

export default App;