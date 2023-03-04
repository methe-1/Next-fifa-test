
// import { promises as fs } from 'fs';
// import path from 'path';
import players from './players.json';

const playerService = async () => {
    try {
        // const jsonDirectory = path.join(process.cwd(), 'src/backend');
        // const players = await fs.readFile(jsonDirectory + '/players.json', 'utf8');
        return players;
    } catch (error) {
        console.log('error returning the players from service', error);
        throw new Error('Service Layer Error' );
    }  
}

export default playerService;