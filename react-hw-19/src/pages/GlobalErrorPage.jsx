import { useRouteError, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Paper, Fade } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const GlobalErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const is404 = error?.status === 404 || error?.statusText === 'Not Found';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100vw',
        background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        p: 2
      }}
    >
      <Fade in={true} timeout={800}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            maxWidth: 550,
            borderRadius: 4,
            bgcolor: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            color: '#fff'
          }}
        >
          <Box sx={{ position: 'relative', display: 'inline-flex', mb: 3 }}>
            <Box sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              bgcolor: is404 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(245, 158, 11, 0.3)',
              filter: 'blur(25px)',
              borderRadius: '50%'
            }} />
            <WarningAmberIcon
              sx={{
                fontSize: 90,
                color: is404 ? '#60a5fa' : '#fbbf24',
                position: 'relative'
              }}
            />
          </Box>

          <Typography variant="h3" fontWeight="800" gutterBottom sx={{ letterSpacing: '-0.02em' }}>
            {is404 ? "404" : "Помилка"}
          </Typography>

          <Typography variant="h5" sx={{ mb: 2, opacity: 0.9, fontWeight: 500 }}>
            {is404 ? "Сторінку не знайдено" : "Упс! Щось зламалося"}
          </Typography>

          <Typography variant="body1" sx={{ mb: 5, color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.6 }}>
            {is404
              ? "Ми обшукали весь сайт, але не знайшли нічого за цією адресою. Можливо, посилання застаріло."
              : "Стався неочікуваний технічний збій. Ми вже намагаємось усе виправити."}
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => is404 ? navigate('/') : window.location.reload()}
              sx={{
                py: 1.5,
                px: 4,
                borderRadius: '12px',
                textTransform: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                background: is404
                  ? 'linear-gradient(45deg, #2563eb, #3b82f6)'
                  : 'linear-gradient(45deg, #dc2626, #ef4444)',
                boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.39)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(37, 99, 235, 0.23)',
                },
                transition: 'all 0.2s ease-in-out'
              }}
            >
              {is404 ? "На головну" : "Оновити сторінку"}
            </Button>
          </Box>
        </Paper>
      </Fade>
    </Box>
  );
};

export default GlobalErrorPage