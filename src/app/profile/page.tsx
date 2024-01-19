import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BgImage from "../../../public/background image.png";
import ProfileImg from "../../../public/profile_image.jpg";
import Edit from "../../../public/pencil-outline.svg";
import Image from "next/image";

function Profile() {
  return (
    <div className="container sm:w-full">
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="bg-image">
              <Image
                className="h-[300px]  object-cover"
                src={BgImage}
                alt="User Background Image"
              />
            </div>
            <div className="">
              <div className=" flex flex-col items-center justify-center ">
                <Image
                  className="rounded-full h-[200px] w-[200px] border-4 relative top-[-80px]"
                  src={ProfileImg}
                  alt="User Profile Image"
                />
                <h3 className="text-2xl relative bottom-[70px]">
                  Win Bijay Win
                </h3>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="relative bottom-14 flex flex-col gap-4">
          <CardDescription className="text-2xl text-black">
            <p>Intro</p>
          </CardDescription>
          <p>Students of Computer Egineeering ❤️</p>
          <Button variant="outline">Edit Bio</Button>
        </CardContent>
      </Card>

      <div className="collections">
        <Carousel>
          <CarouselContent className="-ml-2 md:-ml-4">
            <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default Profile;
