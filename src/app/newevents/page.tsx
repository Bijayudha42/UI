import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

function UpcominEvents() {
  return (
    <div className="">
      <div className="Upcoming_Events evetns w-[100%] h-96]">
        <div className="Events-details text-4xl text-center m-4">
          <p className="titles font-extrabold ">Upcoming Events</p>
          <p className="titles text-xl">
            Check out some of our featured events!
          </p>
        </div>
        <div className="main flex flex-wrap">
          <Card className="w-[22rem] h-[32rem] m-2">
            <CardHeader>
              <CardTitle>
                <img
                  className="w-100% h-64 bg-black"
                  src="npg.jpg"
                  alt="Event Image"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="event-details text-2xl font-bold">
                Software Development competition
              </p>
              <p className="event-details font-bold">Price: Rs. 2,00,000</p>
              <p className="event-details font-bold">DEADLINE: 18th Magh</p>
            </CardContent>
            <CardFooter>
              <div className="event-button flex gap-3 flex-wrap">
                <Button className="px-10" variant="outline">
                  Register
                </Button>
                <Button className="px-10" variant="outline">
                  View More
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card className="w-[22rem] h-[32rem] m-2">
            <CardHeader>
              <CardTitle>
                <img
                  className="w-100% h-64 bg-black"
                  src="npg.jpg"
                  alt="Event Image"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="event-details text-2xl font-bold">
                Software Development competition
              </p>
              <p className="event-details font-bold">Price: Rs. 2,00,000</p>
              <p className="event-details font-bold">DEADLINE: 18th Magh</p>
            </CardContent>
            <CardFooter>
              <div className="event-button flex gap-3 flex-wrap">
                <Button className="px-10" variant="outline">
                  Register
                </Button>
                <Button className="px-10" variant="outline">
                  View More
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card className="w-[22rem] h-[32rem] m-2">
            <CardHeader>
              <CardTitle>
                <img
                  className="w-100% h-64 bg-black"
                  src="npg.jpg"
                  alt="Event Image"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="event-details text-2xl font-bold">
                Software Development competition
              </p>
              <p className="event-details font-bold">Price: Rs. 2,00,000</p>
              <p className="event-details font-bold">DEADLINE: 18th Magh</p>
            </CardContent>
            <CardFooter>
              <div className="event-button flex gap-3 flex-wrap">
                <Button className="px-10" variant="outline">
                  Register
                </Button>
                <Button className="px-10" variant="outline">
                  View More
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card className="w-[22rem] h-[32rem] m-2">
            <CardHeader>
              <CardTitle>
                <img
                  className="w-100% h-64 bg-black"
                  src="npg.jpg"
                  alt="Event Image"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="event-details text-2xl font-bold">
                Software Development competition
              </p>
              <p className="event-details font-bold">Price: Rs. 2,00,000</p>
              <p className="event-details font-bold">DEADLINE: 18th Magh</p>
            </CardContent>
            <CardFooter>
              <div className="event-button flex gap-3 flex-wrap">
                <Button className="px-10" variant="outline">
                  Register
                </Button>
                <Button className="px-10" variant="outline">
                  View More
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="View_Events"></div>
    </div>
  );
}

export default UpcominEvents;
