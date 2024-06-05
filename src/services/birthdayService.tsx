// src/services/birthdayService.ts
import axios from 'axios';

const API_URL = 'https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births';

export const fetchBirthdays = async (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const response = await axios.get(`${API_URL}/${month}/${day}`);
  return response.data.births;
};
