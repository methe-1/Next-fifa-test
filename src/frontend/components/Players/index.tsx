import { FC, useState, useEffect } from "react";
import { cn } from "~frontend/utils";
import PaginationNav from "./PaginationNav";
import Crad from "./Card";

const initial_players = [
    {
        "firstname":"Eden",
        "lastname":"Hazard",
        "goal":93,
        "salary":118000000,
        "devise":"$",
        "pictureURl":"https://img.a.transfermarkt.technology/portrait/big/50202-1537861483.jpg?lm=1"
    },
    {
        "firstname":"Eden",
        "lastname":"Hazard",
        "goal":93,
        "salary":118000000,
        "devise":"$",
        "pictureURl":"https://img.a.transfermarkt.technology/portrait/big/50202-1537861483.jpg?lm=1"
    },
    {
        "firstname":"Eden",
        "lastname":"Hazard",
        "goal":93,
        "salary":118000000,
        "devise":"$",
        "pictureURl":"https://img.a.transfermarkt.technology/portrait/big/50202-1537861483.jpg?lm=1"
    },
    {
        "firstname":"Eden",
        "lastname":"Hazard",
        "goal":93,
        "salary":118000000,
        "devise":"$",
        "pictureURl":"https://img.a.transfermarkt.technology/portrait/big/50202-1537861483.jpg?lm=1"
    },
    {
        "firstname":"Eden",
        "lastname":"Hazard",
        "goal":93,
        "salary":118000000,
        "devise":"$",
        "pictureURl":"https://img.a.transfermarkt.technology/portrait/big/50202-1537861483.jpg?lm=1"
    }
]
const Search: FC<{ filter?: string }> = ({ filter }) => {
  const [players, setPlayers] = useState([]);

  // I would use Redux-Thunk, or UseQuery instead if I had enough time 
  useEffect(() => {
    fetch(`/api/players?filter=${filter}`)
    .then(res => res.json())
    .then((data: any) => {
      console.log('METHE', data);
      setPlayers(data)
    })
    .catch(err => console.log(err))
  }, [filter]);
  
  return (
    <>
      <div className="min-h-[60vh] xl:min-h-[60vh] flex flex-col items-center">
        <div className="flex flex-col flex-col-xs-12">
          {players.length ? (
            <div className="grid gap-5 grid-cols-3">
              {players.map(({ firstname, lastname, pictureURl: image }, index) => (
                <div key={index} className="h-[]">
                    <Crad
                        firstname={firstname || 'Krim'}
                        lastname={lastname || 'Benzima'}
                        image={image}
                    />
                </div>
                // <div key={index}>Player</div>
              ))}
            </div>
          ) : (
            <div className="grid place-items-center w-full min-h-[50vh]">
              <div className="bg-white text-black p-5 rounded-xl">
                Aucun Joueur trouvé!
              </div>
            </div>
          )}
        </div>
      </div>
      <PaginationNav />
    </>
  );
};

export default Search;
