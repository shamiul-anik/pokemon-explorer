import * as React from "react";
import { useNavigate } from "@tanstack/react-router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import ForgotPassword from "./ForgotPassword";
import AzureIcon from "./AzureIcon";
import AppBrand from "../AppBrand";
import ThemeToggle from "../ThemeToggle";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 24px 60px rgba(1, 9, 21, 0.75)"
      : "0 24px 60px rgba(23, 51, 85, 0.18)",
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  minHeight: "100dvh",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  background:
    theme.palette.mode === "dark"
      ? "radial-gradient(circle at 18% 22%, rgba(12, 79, 159, 0.36), rgba(2, 9, 19, 0.9) 36%), radial-gradient(circle at 80% 0%, rgba(0, 127, 255, 0.22), transparent 45%), linear-gradient(180deg, #020817 0%, #01040e 100%)"
      : "radial-gradient(circle at 14% 18%, rgba(104, 160, 223, 0.28), transparent 38%), radial-gradient(circle at 90% 0%, rgba(106, 163, 227, 0.2), transparent 42%), linear-gradient(180deg, #d9e4f2 0%, #cfdceb 100%)",
}));

export default function SignIn() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validateInputs = () => {
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateInputs()) {
      return;
    }

    navigate({ to: "/dashboard" });
  };

  return (
    <SignInContainer direction="column" justifyContent="space-between">
      <Box
        component="header"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <AppBrand titleVariant="subtitle1" titleComponent="span" />
        <ThemeToggle />
      </Box>

      <Card variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{
            width: "100%",
            fontSize: "clamp(2rem, 10vw, 2.15rem)",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 2,
          }}
        >
          <FormControl>
            <FormLabel htmlFor="email" sx={{ color: "text.secondary", mb: 0.75 }}>
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
              color={emailError ? "error" : "primary"}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#030B18" : "rgba(255, 255, 255, 0.55)",
                  color: "text.primary",
                  "& fieldset": {
                    borderColor: "divider",
                  },
                  "&:hover fieldset": {
                    borderColor: "primary.light",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main",
                    boxShadow: (theme) =>
                      theme.palette.mode === "dark"
                        ? "0 0 0 1px rgba(31, 157, 255, 0.3)"
                        : "0 0 0 1px rgba(13, 110, 186, 0.3)",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "text.secondary",
                  opacity: 0.75,
                },
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password" sx={{ color: "text.secondary", mb: 0.75 }}>
              Password
            </FormLabel>
            <TextField
              error={passwordError}
              helperText={passwordErrorMessage}
              name="password"
              placeholder="******"
              type="password"
              id="password"
              autoComplete="current-password"
              required
              fullWidth
              variant="outlined"
              color={passwordError ? "error" : "primary"}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#030B18" : "rgba(255, 255, 255, 0.55)",
                  color: "text.primary",
                  "& fieldset": {
                    borderColor: "divider",
                  },
                  "&:hover fieldset": {
                    borderColor: "primary.light",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main",
                    boxShadow: (theme) =>
                      theme.palette.mode === "dark"
                        ? "0 0 0 1px rgba(31, 157, 255, 0.3)"
                        : "0 0 0 1px rgba(13, 110, 186, 0.3)",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "text.secondary",
                  opacity: 0.75,
                },
              }}
            />
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                sx={{
                  color: "text.secondary",
                  "&.Mui-checked": { color: "primary.main" },
                }}
              />
            }
            label="Remember me"
            sx={{ color: "text.secondary" }}
          />
          <ForgotPassword open={open} handleClose={handleClose} />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={validateInputs}
            sx={{
              color: "background.paper",
              fontWeight: 700,
              backgroundColor: "text.primary",
              "&:hover": {
                backgroundColor: "secondary.light",
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
              alignSelf: "center",
              color: "primary.light",
              "&:hover": { color: "primary.main" },
            }}
          >
            Forgot your password?
          </Link>
        </Box>
        <Divider sx={{ color: "text.secondary", borderColor: "divider" }}>or</Divider>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => navigate({ to: "/dashboard" })}
            startIcon={<AzureIcon />}
            sx={{
              color: "text.primary",
              borderColor: "divider",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "rgba(1, 10, 22, 0.46)" : "rgba(255, 255, 255, 0.5)",
              "&:hover": {
                borderColor: "primary.light",
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark"
                    ? "rgba(12, 36, 70, 0.65)"
                    : "rgba(74, 150, 213, 0.14)",
              },
            }}
          >
            Login with Azure AD
          </Button>
          <Typography sx={{ textAlign: "center", color: "text.secondary" }}>
            Don&apos;t have an account?{" "}
            <Link
              href="/material-ui/getting-started/templates/sign-in/"
              variant="body2"
              sx={{
                alignSelf: "center",
                color: "primary.main",
                fontWeight: 600,
                "&:hover": { color: "secondary.main" },
              }}
            >
              Sign up
            </Link>
          </Typography>
        </Box>
      </Card>
    </SignInContainer>
  );
}
