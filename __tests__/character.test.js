import dotenv from 'dotenv';
dotenv.config();
import { LordOfRingsAPI } from '../src/services/LordOfRingsAPI';


describe('character API', () => {
  test('get all characters', async () => {
    const response = await LordOfRingsAPI.get('/character');
    expect(response.status).toBe(200);
  });
});
