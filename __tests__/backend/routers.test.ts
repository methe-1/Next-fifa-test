import { NextApiRequest, NextApiResponse } from "next";
import { RouteHandler } from "../../src/backend/";
import playersExpected from "../../src/backend/players.json";
import { createMocks, RequestMethod } from "node-mocks-http";

describe("router", () => {
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
    const players = await RouteHandler(req, res, {
        GET: () => playersExpected
      });
    expect(players).toEqual(playersExpected);
  });
  
  it.todo("should be a GET method");
});
