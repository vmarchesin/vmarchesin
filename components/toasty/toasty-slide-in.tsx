import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';

interface ToastySlideInProps {
  show: boolean;
}

const ToastySlideIn: React.FC<ToastySlideInProps> = ({ show }) => {
  if (!show) return null;
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        marginBottom: '-4px',
      }}
      className="toasty"
    >
      <Image
        alt="Toasty"
        src="/toasty.png"
        width={256}
        height={256}
      />
    </Box>
  );
};

export default ToastySlideIn;
