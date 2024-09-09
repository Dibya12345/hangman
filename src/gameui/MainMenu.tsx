import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export interface MainMenuProps {
  startGame: () => void;
}
function MainMenu({ startGame }: MainMenuProps) {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-4 border-gradient-to-r from-yellow-300 via-green-300 to-blue-400">
          <div className="relative h-48 overflow-hidden">
            <img
              src="https://cdn.dribbble.com/users/1163294/screenshots/3325990/comp_1.gif?height=400&width=600"
              alt="Hangman game illustration"
              className="w-full h-full object-cover"
            />
          </div>
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold mb-2 flex items-center justify-center">
              <img
                src="https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWMOi8ktmpmX2fwxODaTiJO0elulbOSg_IQYmBQk4oOMXjgqORxwgVUMX_QrD0YSees_xGVWh_KrWCpLBP4I_hOzCp6J4jcqdW_8AOHwJ9OK.png?r=4c8"
                alt=""
                width="202px"
              />
            </CardTitle>
          </CardHeader>

          <CardFooter className="flex justify-center">
            <button onClick={startGame}>Start Now</button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default MainMenu;
