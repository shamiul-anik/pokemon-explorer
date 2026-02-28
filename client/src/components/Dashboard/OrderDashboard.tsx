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

const shellCardSx = {
  backgroundColor: '#061427',
  border: '1px solid rgba(77, 130, 198, 0.32)',
  boxShadow: '0 24px 60px rgba(1, 9, 21, 0.55)',
  color: '#f5f8ff',
};

export default function OrderDashboard() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100dvh',
        p: { xs: 2, md: 3 },
        background:
          'radial-gradient(circle at 18% 22%, rgba(12, 79, 159, 0.36), rgba(2, 9, 19, 0.9) 36%), radial-gradient(circle at 80% 0%, rgba(0, 127, 255, 0.22), transparent 45%), linear-gradient(180deg, #020817 0%, #01040e 100%)',
      }}
    >
      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Paper sx={{ ...shellCardSx, p: 2, position: { lg: 'sticky' }, top: { lg: 24 } }}>
            <Stack direction="row" spacing={1.5} alignItems="center" mb={2.5}>
              <Box>
                <AppBrand titleVariant="subtitle1" titleComponent="span" />
                <Typography variant="body2" color="rgba(206, 224, 246, 0.75)">
                  Order Dashboard
                </Typography>
              </Box>
            </Stack>
            <List disablePadding sx={{ mb: 2 }}>
              {navItems.map((item) => (
                <ListItemButton
                  key={item.label}
                  selected={item.selected}
                  sx={{
                    borderRadius: 1.5,
                    mb: 0.5,
                    color: '#d7e6fb',
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(31, 157, 255, 0.2)',
                      color: '#f4f8ff',
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(12, 36, 70, 0.65)',
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
                backgroundColor: '#f4f7ff',
                color: '#061427',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#e2ebff',
                },
              }}
            >
              Back to Pokedex
            </Button>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, lg: 9 }}>
          <Stack spacing={2.5}>
            <Paper sx={{ ...shellCardSx, p: 2 }}>
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
                  <Typography variant="body2" color="rgba(206, 224, 246, 0.75)">
                    Track your recent order activity
                  </Typography>
                </Box>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                  <TextField
                    size="small"
                    placeholder="Search orders"
                    InputProps={{ startAdornment: <SearchRoundedIcon sx={{ mr: 1, color: '#9ec8f8' }} /> }}
                    sx={{
                      minWidth: { xs: '100%', sm: 240 },
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: '#030b18',
                        color: '#f4f8ff',
                        '& fieldset': { borderColor: 'rgba(94, 149, 221, 0.28)' },
                        '&:hover fieldset': { borderColor: 'rgba(94, 149, 221, 0.6)' },
                        '&.Mui-focused fieldset': {
                          borderColor: '#1f9dff',
                          boxShadow: '0 0 0 1px rgba(31, 157, 255, 0.3)',
                        },
                      },
                      '& .MuiInputBase-input::placeholder': {
                        color: 'rgba(206, 224, 246, 0.52)',
                        opacity: 1,
                      },
                    }}
                  />
                  <Chip
                    label="This month"
                    sx={{
                      bgcolor: 'rgba(1, 10, 22, 0.46)',
                      border: '1px solid rgba(98, 152, 226, 0.35)',
                      color: '#eaf3ff',
                    }}
                  />
                </Stack>
              </Stack>
            </Paper>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Paper sx={{ ...shellCardSx, p: 2 }}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <AttachMoneyRoundedIcon sx={{ color: '#9ec8f8' }} />
                    <Box>
                      <Typography variant="body2" color="rgba(206, 224, 246, 0.75)">
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
                <Paper sx={{ ...shellCardSx, p: 2 }}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <TrendingUpRoundedIcon sx={{ color: '#7bc1ff' }} />
                    <Box>
                      <Typography variant="body2" color="rgba(206, 224, 246, 0.75)">
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
                <Paper sx={{ ...shellCardSx, p: 2 }}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Inventory2RoundedIcon sx={{ color: '#66b0ff' }} />
                    <Box>
                      <Typography variant="body2" color="rgba(206, 224, 246, 0.75)">
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
            <Paper sx={{ ...shellCardSx, overflow: 'hidden' }}>
              <Box sx={{ px: 2, py: 1.5, borderBottom: '1px solid rgba(77, 130, 198, 0.28)' }}>
                <Typography fontWeight={700}>Recent Orders</Typography>
              </Box>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: '#9ec8f8', borderColor: 'rgba(77, 130, 198, 0.28)' }}>Order</TableCell>
                    <TableCell sx={{ color: '#9ec8f8', borderColor: 'rgba(77, 130, 198, 0.28)' }}>Customer</TableCell>
                    <TableCell sx={{ color: '#9ec8f8', borderColor: 'rgba(77, 130, 198, 0.28)' }}>Product</TableCell>
                    <TableCell sx={{ color: '#9ec8f8', borderColor: 'rgba(77, 130, 198, 0.28)' }}>Amount</TableCell>
                    <TableCell sx={{ color: '#9ec8f8', borderColor: 'rgba(77, 130, 198, 0.28)' }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id} hover>
                      <TableCell sx={{ color: '#f4f8ff', borderColor: 'rgba(77, 130, 198, 0.2)' }}>
                        {order.id}
                      </TableCell>
                      <TableCell sx={{ color: '#d7e6fb', borderColor: 'rgba(77, 130, 198, 0.2)' }}>
                        {order.customer}
                      </TableCell>
                      <TableCell sx={{ color: '#d7e6fb', borderColor: 'rgba(77, 130, 198, 0.2)' }}>
                        {order.product}
                      </TableCell>
                      <TableCell sx={{ color: '#f4f8ff', borderColor: 'rgba(77, 130, 198, 0.2)' }}>
                        {order.amount}
                      </TableCell>
                      <TableCell sx={{ borderColor: 'rgba(77, 130, 198, 0.2)' }}>
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
