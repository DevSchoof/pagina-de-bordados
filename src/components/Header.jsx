import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import logo from '../assets/logo.png';
import { Icon, IconButton } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsappIcon from '@mui/icons-material/Whatsapp';

export default function Header() {
    return (
        <AppBar position="fixed" elevation={2}
            sx={{
                backgroundColor: '#fce5e9',
            }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ height: 120, marginRight: 8, cursor: 'pointer' }}
                        onClick={() => window.location.href = '/'}
                    />
                </Box>
                <Box>
                    {/* <IconButton
                        onClick={() => window.open('https://www.facebook.com/beneconfeccoesbraganca?mibextid=ZbWKwL', '_blank')}
                        sx={{
                            color: '#3b5998',
                            width: {xs: 30, sm: 40, md: 60},
                            height: {xs: 30, sm: 40, md: 60},
                        }} >
                        <FacebookRoundedIcon sx={{
                            width: {xs: 30, sm: 40, md: 60},
                            height: {xs: 30, sm: 40, md: 60},
                        }} />
                    </IconButton> */}
                    <IconButton
                        onClick={() => window.open('https://www.instagram.com/bordados_da_be?igsh=aW8xem1he', '_blank')}
                        sx={{
                            color: '#d62976',
                            width: {xs: 30, sm: 50, md: 60},
                            height: {xs: 30, sm: 50, md: 60},
                        }} >
                        <InstagramIcon sx={{
                            width: {xs: 30, sm: 50, md: 60},
                            height: {xs: 30, sm: 50, md: 60},
                        }} />
                    </IconButton>
                    <IconButton
                        onClick={() => window.open('https://wa.me/5511915625606', '_blank')}
                        sx={{
                            color: '#25d366',
                            width: {xs: 30, sm: 50, md: 60},
                            height: {xs: 30, sm: 50, md: 60},
                        }} >
                        <WhatsappIcon sx={{
                            width: {xs: 30, sm: 50, md: 60},
                            height: {xs: 30, sm: 50, md: 60},
                        }} />
                    </IconButton>
                    <IconButton
                        onClick={() => window.open('https://t.me/+5511915625606', '_blank')}
                        sx={{
                            color: '#24A1DE',
                            width: {xs: 30, sm: 50, md: 60},
                            height: {xs: 30, sm: 50, md: 60},
                        }} >
                        <TelegramIcon sx={{
                            width: {xs: 30, sm: 50, md: 60},
                            height: {xs: 30, sm: 50, md: 60},
                        }} />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}


