import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

function USerProfile() {
  return (
    <div className="container">
      <div className="profile">
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="big-image">
                <img
                  className="h-[480px] w-[100%] bg-black rounded-xl"
                  src="Photo by Julien Riedel from Pexels: https://www.pexels.com/photo/dolomiti-19869392/"
                  alt="User Background Images"
                />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="user_description flex flex-col items-start gap-4 ">
              <p className="user-intro">Organization Name</p>
              <p className="user-intro">Short Bio</p>
              <p className="user-intro">Contact Number: 98*******</p>
              <p className="user-intro">Email: email@gmail.com</p>
              <p className="user-intro">Address: Sadhakpur Bauniya, Kailali</p>
              <p className="user-intro">Establised Date:</p>
              <p className="user-intro"></p>
              <div className="event flex gap-4 flex-wrap">
                <Button className="px-8" variant="outline">
                  Upcoming Events
                </Button>
                <Button className="px-8" variant="outline">
                  View Events
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default USerProfile;
