import dotenv from 'dotenv';
dotenv.config();
import { LordOfRingsAPI } from '../src/services/LordOfRingsAPI';

describe('quote API', () => {
  test('get quotes by movie id', async () => {
    const movieId = '5cd95395de30eff6ebccde5c';
    const response = await LordOfRingsAPI.get(`/movie/${movieId}/quote`);
    expect(response.status).toBe(200);
  });
});
