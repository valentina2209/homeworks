import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Container>
                    <Box sx={{ textAlign: 'center', mt: 10 }}>
                        <Typography variant="h4">Щось пішло не так (MUI працює)</Typography>
                        <Button variant="contained" onClick={() => window.location.reload()}>
                            Оновити
                        </Button>
                    </Box>
                </Container>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;