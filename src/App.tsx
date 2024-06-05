// src/App.tsx
import React, { useState } from 'react';
import Calendar from './components/Calendar';
import BirthdayList from './components/BirthdayList';
import { fetchBirthdays } from './services/birthdayService';

const App: React.FC = () => {
  const [birthdays, setBirthdays] = useState<any[]>([]);

  const handleDateSelect = async (date: Date | null) => {
    if (date) {
      const fetchedBirthdays = await fetchBirthdays(date);
      setBirthdays(fetchedBirthdays);
    }
  };

  return (
    <div>
      <h1>Birthday Calendar</h1>
      <Calendar onDateSelect={handleDateSelect} />
      <BirthdayList birthdays={birthdays} />
    </div>
  );
};

export default App;
