import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserProfileAvatar(props: props) {
  return (
    <Avatar>
      <AvatarImage
        src={props.icon ? props.icon : "https://github.com/shadcn.png"}
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

interface props {
  icon?: string;
}

// src={props.icon? props.icon : "https://github.com/shadcn.png"}
