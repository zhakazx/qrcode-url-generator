import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Main() {
  return (
    <main className="flex flex-col md:flex-row gap-8 row-start-2 w-full md:justify-center items-center sm:items-start">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <div className="flex flex-row gap-2">
          <Input 
            type="text"
            id="url" 
            placeholder="Enter URL ..." 
          />
          <Button>Generate</Button>
        </div>
      </div>
    </main>
  );
}