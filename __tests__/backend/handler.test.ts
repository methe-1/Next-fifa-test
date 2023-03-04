import { NextApiRequest, NextApiResponse } from "next";
import { getPlayers } from "../../src/backend/";
import { createMocks, RequestMethod } from "node-mocks-http";

describe("Handler", () => {
  const authToken = process.env.AUTH_TOKEN;
  const gatewayID = process.env.DEVICE_ID;

  function mockRequestResponse(method: RequestMethod = "GET") {
    const { req, res }: { req: NextApiRequest; res: NextApiResponse } =
      createMocks({ method });
    req.headers = {
      "Content-Type": "application/json",
      "X-SESSION-TOKEN": authToken,
    };
    req.query = { gatewayID: `${gatewayID}` };
    return { req, res };
  }

  it("should send back a player json", async () => {
    const { req, res } = mockRequestResponse();
    const players = await getPlayers(req, res);
    expect(players).toEqual(players);
  });


});
