/* eslint-disable import/order */
/* eslint-disable import/no-named-as-default */
import { Route, Router, Routes } from 'react-router-dom';
import CarList from './CarList';
import {
  Box, Container, Divider, Typography,
} from '@mui/material';
import CartDetalis from './CartDetalis';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Container>
      <Box mt={3} mb={2}>
        <Typography variant="h1" fontSize="h3.fontSize">
          Тестовое приложение Аукционы
        </Typography>
      </Box>
      <Box mb={3}>
        <Divider />
      </Box>
      <Routes>
        <Route path="/" element={<CarList />} />
        <Route path="/:id" element={<CartDetalis />} />
        {/* <Route path="*" element={<NoMatches />} /> */}
      </Routes>
    </Container>
  );
}

export default App;
