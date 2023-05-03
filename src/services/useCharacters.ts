import { useEffect, useState } from 'react';

import Character from '../models/Character';
import { LordOfRingsAPI } from './LordOfRingsAPI';

export function useCharacters() {
  // Define state for characters data
  const [characters, setCharacters] = useState<Character[]>([]);

  // Fetch characters data and store it in state
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await LordOfRingsAPI.get('/character');
        setCharacters(response.data.docs);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacters();
  }, []);

  // Return the characters data
  return characters;
}
