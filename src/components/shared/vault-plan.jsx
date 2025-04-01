// VaultPlanCard.tsx
import React from 'react';
import {Card, CardContent, CardActions, Typography, Button, Box, Divider} from '@mui/material';

const VaultPlanCard = ({title, size, insurance, access, useCase, price}) => {
    return (
        <Card elevation={0} variant="elevation" sx={{height: '100%'}}>
            <CardContent>
                <Typography variant="h5" gutterBottom>{title}</Typography>
                <Typography variant="body2" color="text.secondary">Size: {size}</Typography>
                <Typography variant="body2" color="text.secondary">Access: {access}</Typography>
                <Typography variant="body2" color="text.secondary">Insurance: {insurance}</Typography>
                <Typography variant="body2" color="text.secondary">Best for: {useCase}</Typography>
                <Divider sx={{my: 2}}/>
                <Typography variant="h6">{price}</Typography>
            </CardContent>
            <CardActions>
                <Button
                    color="secondary"
                    variant="contained"
                    disableElevation={true}
                    fullWidth={true}>
                    Choose Plan
                </Button>
            </CardActions>
        </Card>
    );
};

export default VaultPlanCard;
