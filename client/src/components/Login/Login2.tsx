import * as React from 'react';
import { useNavigate } from '@tanstack/react-router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import ForgotPassword from './ForgotPassword';
import AppTheme from './shared-theme/AppTheme';
// import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';
import AzureIcon from './AzureIcon';
import AppBrand from '../AppBrand';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  color: '#f5f8ff',
  backgroundColor: '#061427',
  border: '1px solid rgba(77, 130, 198, 0.32)',
  boxShadow: '0 24px 60px rgba(1, 9, 21, 0.75)',
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    background:
      'radial-gradient(circle at 18% 22%, rgba(12, 79, 159, 0.36), rgba(2, 9, 19, 0.9) 36%), radial-gradient(circle at 80% 0%, rgba(0, 127, 255, 0.22), transparent 45%), linear-gradient(180deg, #020817 0%, #01040e 100%)',
    backgroundRepeat: 'no-repeat',
  },
}));

const socialButtonSx = {
  color: '#eaf3ff',
  borderColor: 'rgba(98, 152, 226, 0.35)',
  backgroundColor: 'rgba(1, 10, 22, 0.46)',
  '&:hover': {
    borderColor: 'rgba(118, 178, 255, 0.7)',
    backgroundColor: 'rgba(12, 36, 70, 0.65)',
  },
};

export default function SignIn(props: { disableCustomTheme?: boolean }) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateInputs()) {
      return;
    }

    if (emailError || passwordError) {
      return;
    }

    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    navigate({ to: '/dashboard' });
  };

  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <AppBrand titleVariant="subtitle1" titleComponent="span" />
        </Box>
        <Card variant="outlined">
          {/* <SitemarkIcon /> */}
          <Typography
            component="h1"
            variant="h4"
            sx={{
              width: '100%',
              fontSize: 'clamp(2rem, 10vw, 2.15rem)',
              fontWeight: 700,
              color: '#f4f8ff',
              textAlign: 'center',
            }}
          >
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="email" sx={{ color: '#9ec8f8', mb: 0.75 }}>
                Email
              </FormLabel>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? 'error' : 'primary'}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#030b18',
                    color: '#f4f8ff',
                    '& fieldset': {
                      borderColor: 'rgba(94, 149, 221, 0.28)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(94, 149, 221, 0.6)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1f9dff',
                      boxShadow: '0 0 0 1px rgba(31, 157, 255, 0.3)',
                    },
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: 'rgba(206, 224, 246, 0.52)',
                    opacity: 1,
                  },
                  '& .MuiFormHelperText-root': {
                    color: emailError ? '#ff8080' : 'rgba(206, 224, 246, 0.75)',
                  },
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password" sx={{ color: '#9ec8f8', mb: 0.75 }}>
                Password
              </FormLabel>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#030b18',
                    color: '#f4f8ff',
                    '& fieldset': {
                      borderColor: 'rgba(94, 149, 221, 0.28)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(94, 149, 221, 0.6)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1f9dff',
                      boxShadow: '0 0 0 1px rgba(31, 157, 255, 0.3)',
                    },
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: 'rgba(206, 224, 246, 0.52)',
                    opacity: 1,
                  },
                  '& .MuiFormHelperText-root': {
                    color: passwordError ? '#ff8080' : 'rgba(206, 224, 246, 0.75)',
                  },
                }}
              />
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  sx={{
                    color: 'rgba(149, 194, 246, 0.7)',
                    '&.Mui-checked': { color: '#2f9fff' },
                  }}
                />
              }
              label="Remember me"
              sx={{ color: '#d7e6fb' }}
            />
            <ForgotPassword open={open} handleClose={handleClose} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
              sx={{
                backgroundColor: '#f4f7ff',
                color: '#061427',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#e2ebff',
                },
              }}
            >
              Login
            </Button>
            <Link
              component="button"
              type="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{
                alignSelf: 'center',
                color: '#b4d5ff',
                '&:hover': { color: '#e3efff' },
              }}
            >
              Forgot your password?
            </Link>
          </Box>
          <Divider sx={{ color: 'rgba(187, 212, 242, 0.9)', borderColor: 'rgba(77, 130, 198, 0.28)' }}>
            or
          </Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => navigate({ to: '/dashboard' })}
              startIcon={<AzureIcon />}
              sx={socialButtonSx}
            >
              Login with Azure AD
            </Button>
            {/* <Button
              fullWidth
              variant="outlined"
              onClick={() => alert('Login with Google')}
              startIcon={<GoogleIcon />}
              sx={socialButtonSx}
            >
              Login with Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert('Login with Facebook')}
              startIcon={<FacebookIcon />}
              sx={socialButtonSx}
            >
              Login with Facebook
            </Button> */}
            <Typography sx={{ textAlign: 'center', color: '#d7e6fb' }}>
              Don&apos;t have an account?{' '}
              <Link
                href="/material-ui/getting-started/templates/sign-in/"
                variant="body2"
                sx={{
                  alignSelf: 'center',
                  color: '#9bc9ff',
                  fontWeight: 600,
                  '&:hover': { color: '#ddecff' },
                }}
              >
                Sign up
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignInContainer>
    </AppTheme>
  );
}
