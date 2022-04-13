import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';

import toastyImg from 'public/toasty.png';

interface ToastySlideInProps {
  show: boolean;
}

const ToastySlideIn: React.FC<ToastySlideInProps> = ({ show }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        marginBottom: '-4px',
        display: show ? 'block' : 'none',
      }}
      className="toasty"
    >
      <Image
        alt="Toasty"
        src={toastyImg}
        width={256}
        height={256}
      />
    </Box>
  );
};

export default ToastySlideIn;
