import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

import Upload from "../../../public/images-outline.svg";
import Photo from "../../../public/photo.jpg";
import Image from "next/image";
import Thumb_Up from "../../../public/thumbs-up-outline.svg";
import Comment from "../../../public/chatbox-ellipses-outline.svg";
import Share from "../../../public/arrow-redo-outline.svg";

function Post() {
  return (
    <div className="post m-8 flex flex-col justify-center">
      <Card className="h-[100px] w-[480px]">
        <CardHeader>
          <CardTitle className="flex">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="user pl-4 flex w-[95%] items-center">
              <Input placeholder="What's on your mind," />
              <Image
                // onClick={}
                className="h-8 w-8 ml-10"
                src={Upload}
                alt="Upload option icon"
              />
              <p className="ml-4">Photos</p>
            </div>
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className="h-[560px] w-[480px] mt-4">
        <CardHeader>
          <CardTitle className="flex">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="user pl-4">
              <p className="text-xl">Nepal Police</p>
              <p className="text-sm">10hrs</p>
            </div>
          </CardTitle>
          <CardDescription>
            <p>Beautiful Drawing of Radha Krishna by Nirjana Panta.😯❤️</p>
            <Image
              className="h-[350px] w-[450px] pt-3"
              src={Photo}
              alt="RadhaKrishan Image"
            />
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export default Post;
