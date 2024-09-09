import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function App() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-4 border-gradient-to-r from-yellow-300 via-green-300 to-blue-400">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold mb-2 flex items-center justify-center">
              <img
                src="https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWMOi8ktmpmX2fwxODaTiJO0elulbOSg_IQYmBQk4oOMXjgqORxwgVUMX_QrD0YSees_xGVWh_KrWCpLBP4I_hOzCp6J4jcqdW_8AOHwJ9OK.png?r=4c8"
                alt=""
                width="202px"
              />
            </CardTitle>
            <CardDescription className="text-lg text-indigo-700 font-semibold p-4">
              Test your word-guessing skills!
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4 text-purple-800">
              Guess the hidden word one letter at a time. But be careful - you
              only have 6 incorrect guesses before the game is over!
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <button>Start Now</button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default App;
