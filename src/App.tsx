import React from 'react';
import Box from '@material-ui/core/Box';
import { AppBar, Dashboard } from './components';

const App: React.FC = () => {
  return (
    <Box
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
      bgcolor="background.default"
    >
      <AppBar />
      <Box
        style={{
          flex: 1,
          flexDirection: 'column',
          display: 'flex',
        }}
      >
         <Dashboard />
      </Box>
    </Box>
  );
}

export default App