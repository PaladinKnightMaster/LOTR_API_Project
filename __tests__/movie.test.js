import dotenv from 'dotenv';
dotenv.config();
import { LordOfRingsAPI } from '../src/services/LordOfRingsAPI';

describe('movie API', () => {
  test('get movie by id', async () => {
    const response = await LordOfRingsAPI.get(`/movie/5cd95395de30eff6ebccde5c`);
    // console.log(response.data)
    expect(response.status).toBe(200);
    expect(response.data.docs[0]).toHaveProperty('name', 'The Fellowship of the Ring');
  });
});
