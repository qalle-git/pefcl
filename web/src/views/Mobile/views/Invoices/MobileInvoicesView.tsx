import InvoiceItem from '@components/InvoiceItem';
import { Heading2, Heading5 } from '@components/ui/Typography/Headings';
import { unpaidInvoicesAtom } from '@data/invoices';
import { Box, Stack, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MobileInvoicesView = () => {
  const { t } = useTranslation();
  const [invoices] = useAtom(unpaidInvoicesAtom);

  const hasInvoices = (invoices?.length ?? 0) > 0;

  return (
    <Box p={4}>
      <Stack spacing={0.25}>
        <Heading2>{t('Invoices')}</Heading2>
        <Heading5>{t('Handle your unpaid invoices')}</Heading5>
      </Stack>

      {!hasInvoices && (
        <Stack marginTop={8} alignItems="center">
          <Typography color="text.secondary">{t('There is nothing to see here.')}</Typography>
        </Stack>
      )}

      <Stack spacing={1} marginTop={4}>
        {invoices.map((invoice) => (
          <InvoiceItem key={invoice.id} invoice={invoice} />
        ))}
      </Stack>
    </Box>
  );
};

export default MobileInvoicesView;
