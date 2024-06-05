// src/components/BirthdayList.tsx
import React from 'react';

interface Birthday {
  text: string;
  pages: { title: string }[];
}

const BirthdayList: React.FC<{ birthdays: Birthday[] }> = ({ birthdays }) => (
  <div>
    <h3>Birthdays on Selected Date</h3>
    <ul>
      {birthdays.map((birthday, index) => (
        <li key={index}>
          {birthday.pages[0].title} - {birthday.text}
        </li>
      ))}
    </ul>
  </div>
);

export default BirthdayList;
