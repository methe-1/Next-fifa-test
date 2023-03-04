import { playerService } from '../../src/backend/';
import playersExpected from  '../../src/backend/players.json';

describe('Service', () => {

  it('return players', async () => {
    const players =  await playerService();
    expect(players).toEqual(playersExpected);
  })
  
})
