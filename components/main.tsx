import { QrCode } from "lucide-react"
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Main() {
  return (
    <main className="flex flex-col md:flex-row gap-8 row-start-2 w-full md:justify-center items-center sm:items-start">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Generate</CardTitle>
            <CardDescription>Provide the URL you want to convert to a QR code.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input id="url" placeholder="e.g. https://example.com" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <QrCode className="mr-2 h-4 w-4" /> Create QR Code
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}