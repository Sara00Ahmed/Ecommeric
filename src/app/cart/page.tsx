// src/app/cart/page.tsx

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ClientSideOnly from '../../component/ClientSideOnly'; // Correct relative path

const Cart = () => {
  return (
    <ClientSideOnly>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h5" component="div" sx={{ mt: 2 }}>
          Cart Page
        </Typography>
      </Box>
    </ClientSideOnly>
  );
};

export default Cart;
