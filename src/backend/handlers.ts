import { NextApiRequest, NextApiResponse } from "next";
import playerService from "./service";

const getPlayers = async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    
    // this should be inject using a dependency injection system, Got No time to do it rn 👅 
    const players = await playerService();

    return res.status(200).json(players);
  };

export default getPlayers;