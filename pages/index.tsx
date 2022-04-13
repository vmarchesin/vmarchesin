import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import cs from 'classnames';
import Typewriter from 'typewriter-effect';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Box, Grid, Stack } from '@mui/material';

import { URLS } from 'utils/consts';

const icons = [
  { className: 'email', Icon: AlternateEmailIcon, href: URLS.MAIL },
  { className: 'github', Icon: GitHubIcon, href: URLS.GITHUB },
  { className: 'linkedin', Icon: LinkedInIcon, href: URLS.LINKEDIN },
  { className: 'telegram', Icon: TelegramIcon, href: URLS.TELEGRAM },
];

const Home: NextPage = () => {
  return (
    <Grid container spacing={2} height="100vh">
      <Grid item xs={0} sm={4} />
      <Grid item xs={12} sm={4} display="flex" justifyContent="center" alignItems="center">
        <Stack direction="column" spacing={3}>
          <Image
            className="logo"
            src="/logo-512.png"
            alt="Logo"
            width={256}
            height={256}
          />
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typewriter
              options={{
                strings: [
                  'Engineering Manager @Emplifi',
                  'Sometimes Frontend Developer',
                  'Also Backend Developer',
                  '@Prague, Czech Republic',
                  'Dolphin impersonator',
                  'Try the Konami Code',
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                skipAddStyles: true,
              }}
            />
          </Box>
          <Stack direction="row" spacing={2} display="flex" justifyContent="center" alignItems="center">
            {icons.map(({ Icon, className, href }) => (
              <Link key={href} href={href}>
                <a>
                  <Icon className={cs(className, 'hvr-buzz-out')} fontSize="large" />
                </a>
              </Link>
            ))}
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={0} sm={4} />
    </Grid>
  );
};

export default Home;
