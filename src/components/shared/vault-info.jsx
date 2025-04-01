import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    Grid,
    Box,
    Link,
    Divider
} from '@mui/material';

const FieldRow = ({label, value, isLink, isImportant}) => (
    <Grid size={{xs: 12, sm: 6}}>
        <Typography variant="subtitle2" color="text.secondary">
            {label}
        </Typography>
        <Typography
            variant="body1"
            color={isImportant ? 'error' : 'text.primary'}
            fontWeight={isImportant ? 'bold' : 'normal'}>
            {isLink ? <Link href="#">{value}</Link> : value}
        </Typography>
    </Grid>
);

const VaultInfo = ({consignment}) => {
    return (
        <Box sx={{maxWidth: 900, mx: 'auto', mt: 4, px: 2}}>
            <Card elevation={4} sx={{borderRadius: 4, padding: 2}}>
                <CardContent>
                    <Typography variant="h5" gutterBottom align="center" fontWeight="bold">
                        Vault Consignment Details
                    </Typography>

                    <Divider sx={{mb: 3}}/>

                    <Grid container spacing={3}>
                        <FieldRow label="Vault Number" value={consignment.vault_number} isLink/>
                        <FieldRow label="Depositor Name" value={consignment.depositor_name}/>
                        <FieldRow label="Occupation" value={consignment.occupation}/>
                        <FieldRow label="Address" value={consignment.address}/>
                        <FieldRow label="Nationality" value={consignment.nationality}/>
                        <FieldRow label="Date of Birth" value={consignment.date_of_birth}/>
                        <FieldRow label="Deposit S/N" value={consignment.deposit_s_n}/>
                        <FieldRow label="Deposit Date" value={consignment.deposit_date}/>
                        <FieldRow label="Consignments Label Numbers" value={consignment.consignments_label_numbers}/>
                        <FieldRow label="Consignments Serial Numbers" value={consignment.consignments_serial_numbers}/>
                        <FieldRow label="Item" value={consignment.item}/>
                        <FieldRow label="Worth" value={consignment.worth}/>
                        <FieldRow label="Weight" value={consignment.weight}/>
                        <FieldRow label="Purity" value={consignment.purity}/>
                        <FieldRow label="Carat" value={consignment.carat}/>
                        <FieldRow label="Demurage Charges" value={consignment.demurage_charges}/>
                        <FieldRow label="Security Status" value={consignment.security_status} isImportant/>
                        <FieldRow label="Next of Kin" value={consignment.next_of_kin} isImportant/>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default VaultInfo;
