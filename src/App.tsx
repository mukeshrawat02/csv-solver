import React from 'react';
import Box from '@material-ui/core/Box';
import { AppBar } from './components';

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
        CSV Loading.....
      </Box>
    </Box>
  );
}

export default App