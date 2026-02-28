import {
  Box,
  Chip,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import { useNavigate } from '@tanstack/react-router';
import AppBrand from '../AppBrand';
import ThemeToggle from '../ThemeToggle';

type OrderStatus = 'Paid' | 'Processing' | 'Cancelled';

interface OrderRow {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: OrderStatus;
}

const orders: OrderRow[] = [
  { id: '#1024', customer: 'Misty Waterflower', product: 'Water Badge Kit', amount: '$164.00', status: 'Paid' },
  { id: '#1025', customer: 'Brock Harrison', product: 'Rock Trainer Pack', amount: '$229.00', status: 'Processing' },
  { id: '#1026', customer: 'Erika Celadon', product: 'Grass Potion Set', amount: '$88.00', status: 'Cancelled' },
  { id: '#1027', customer: 'Lt. Surge', product: 'Electric Battle Box', amount: '$312.00', status: 'Paid' },
  { id: '#1028', customer: 'Sabrina', product: 'Psychic Focus Bundle', amount: '$142.00', status: 'Processing' },
];

const navItems = [
  { label: 'Dashboard', icon: <DashboardRoundedIcon fontSize="small" />, selected: true },
  { label: 'Orders', icon: <ShoppingCartRoundedIcon fontSize="small" /> },
  { label: 'Invoices', icon: <ReceiptRoundedIcon fontSize="small" /> },
  { label: 'Settings', icon: <SettingsRoundedIcon fontSize="small" /> },
];

const statusColorMap: Record<OrderStatus, 'success' | 'warning' | 'error'> = {
  Paid: 'success',
  Processing: 'warning',
  Cancelled: 'error',
};

const shellCardSx = (mode: 'light' | 'dark') => ({
  backgroundColor: mode === 'dark' ? '#061427' : 'background.paper',
  border: '1px solid',
  borderColor: 'divider',
  boxShadow:
    mode === 'dark' ? '0 24px 60px rgba(1, 9, 21, 0.55)' : '0 24px 60px rgba(23, 51, 85, 0.16)',
  color: 'text.primary',
});

export default function OrderDashboard() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100dvh',
        p: { xs: 2, md: 3 },
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'radial-gradient(circle at 18% 22%, rgba(12, 79, 159, 0.36), rgba(2, 9, 19, 0.9) 36%), radial-gradient(circle at 80% 0%, rgba(0, 127, 255, 0.22), transparent 45%), linear-gradient(180deg, #020817 0%, #01040e 100%)'
            : 'radial-gradient(circle at 14% 18%, rgba(104, 160, 223, 0.28), transparent 38%), radial-gradient(circle at 90% 0%, rgba(106, 163, 227, 0.2), transparent 42%), linear-gradient(180deg, #d9e4f2 0%, #cfdceb 100%)',
      }}
    >
      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Paper
            sx={(theme) => ({
              ...shellCardSx(theme.palette.mode),
              p: 2,
              position: { lg: 'sticky' },
              top: { lg: 24 },
            })}
          >
            <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="space-between" mb={2.5}>
              <Box>
                <AppBrand titleVariant="subtitle1" titleComponent="span" />
                <Typography variant="body2" color="text.secondary">
                  Order Dashboard
                </Typography>
              </Box>
              <ThemeToggle />
            </Stack>
            <List disablePadding sx={{ mb: 2 }}>
              {navItems.map((item) => (
                <ListItemButton
                  key={item.label}
                  selected={item.selected}
                  sx={{
                    borderRadius: 1.5,
                    mb: 0.5,
                    color: 'text.secondary',
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(31, 157, 255, 0.18)',
                      color: 'text.primary',
                    },
                    '&:hover': {
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'rgba(12, 36, 70, 0.65)'
                          : 'rgba(74, 150, 213, 0.14)',
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: 'inherit', minWidth: 34 }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              ))}
            </List>
            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate({ to: '/' })}
              sx={{
                backgroundColor: 'text.primary',
                color: 'background.paper',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'secondary.light',
                },
              }}
            >
              Back to Pokedex
            </Button>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, lg: 9 }}>
          <Stack spacing={2.5}>
            <Paper sx={(theme) => ({ ...shellCardSx(theme.palette.mode), p: 2 })}>
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={2}
                alignItems={{ xs: 'stretch', md: 'center' }}
                justifyContent="space-between"
              >
                <Box>
                  <Typography variant="h5" fontWeight={700}>
                    Dashboard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Track your recent order activity
                  </Typography>
                </Box>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                  <TextField
                    size="small"
                    placeholder="Search orders"
                    InputProps={{ startAdornment: <SearchRoundedIcon sx={{ mr: 1, color: 'text.secondary' }} /> }}
                    sx={{
                      minWidth: { xs: '100%', sm: 240 },
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark' ? '#030B18' : 'rgba(255, 255, 255, 0.55)',
                        color: 'text.primary',
                        '& fieldset': { borderColor: 'divider' },
                        '&:hover fieldset': { borderColor: 'primary.light' },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                          boxShadow: (theme) =>
                            theme.palette.mode === 'dark'
                              ? '0 0 0 1px rgba(31, 157, 255, 0.3)'
                              : '0 0 0 1px rgba(13, 110, 186, 0.3)',
                        },
                      },
                      '& .MuiInputBase-input::placeholder': {
                        color: 'text.secondary',
                        opacity: 1,
                      },
                    }}
                  />
                  <Chip
                    label="This month"
                    sx={{
                      bgcolor: (theme) =>
                        theme.palette.mode === 'dark' ? 'rgba(1, 10, 22, 0.46)' : 'rgba(255, 255, 255, 0.5)',
                      border: '1px solid',
                      borderColor: 'divider',
                      color: 'text.primary',
                    }}
                  />
                </Stack>
              </Stack>
            </Paper>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Paper sx={(theme) => ({ ...shellCardSx(theme.palette.mode), p: 2 })}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <AttachMoneyRoundedIcon sx={{ color: 'primary.light' }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Revenue
                      </Typography>
                      <Typography variant="h5" fontWeight={700}>
                        $28,430
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Paper sx={(theme) => ({ ...shellCardSx(theme.palette.mode), p: 2 })}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <TrendingUpRoundedIcon sx={{ color: 'primary.light' }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Conversion
                      </Typography>
                      <Typography variant="h5" fontWeight={700}>
                        16.2%
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Paper sx={(theme) => ({ ...shellCardSx(theme.palette.mode), p: 2 })}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Inventory2RoundedIcon sx={{ color: 'primary.light' }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Open Orders
                      </Typography>
                      <Typography variant="h5" fontWeight={700}>
                        42
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
            <Paper sx={(theme) => ({ ...shellCardSx(theme.palette.mode), overflow: 'hidden' })}>
              <Box sx={{ px: 2, py: 1.5, borderBottom: '1px solid', borderColor: 'divider' }}>
                <Typography fontWeight={700}>Recent Orders</Typography>
              </Box>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: 'primary.light', borderColor: 'divider' }}>Order</TableCell>
                    <TableCell sx={{ color: 'primary.light', borderColor: 'divider' }}>Customer</TableCell>
                    <TableCell sx={{ color: 'primary.light', borderColor: 'divider' }}>Product</TableCell>
                    <TableCell sx={{ color: 'primary.light', borderColor: 'divider' }}>Amount</TableCell>
                    <TableCell sx={{ color: 'primary.light', borderColor: 'divider' }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id} hover>
                      <TableCell sx={{ color: 'text.primary', borderColor: 'divider' }}>
                        {order.id}
                      </TableCell>
                      <TableCell sx={{ color: 'text.secondary', borderColor: 'divider' }}>
                        {order.customer}
                      </TableCell>
                      <TableCell sx={{ color: 'text.secondary', borderColor: 'divider' }}>
                        {order.product}
                      </TableCell>
                      <TableCell sx={{ color: 'text.primary', borderColor: 'divider' }}>
                        {order.amount}
                      </TableCell>
                      <TableCell sx={{ borderColor: 'divider' }}>
                        <Chip size="small" color={statusColorMap[order.status]} label={order.status} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
