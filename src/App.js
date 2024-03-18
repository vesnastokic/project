import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Navigation from './components/Navigation';
import ThankYou from './components/ThankYou'; // Import the ThankYou component

function App() {
  return (
    <div className="App">
      <Navigation />
      <LoginForm />
      <ThankYou /> {/* To include the ThankYou component */}
    </div>
  );
}

export default App;
