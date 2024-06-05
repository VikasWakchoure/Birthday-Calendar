// src/components/Calendar.tsx
import React, { useState } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';

const Calendar: React.FC<{ onDateSelect: (date: Date | null) => void }> = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Select a date"
        value={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          onDateSelect(date);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
