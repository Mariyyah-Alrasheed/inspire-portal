import { pageInfo } from "./pageInfo";
import { Bell } from "lucide-react";
import ProfileMenu from "./ProfileMenu";

type HeaderProps = {
  pathname: string;
};

export default function Header({ pathname }: HeaderProps) {
  const info = pageInfo[pathname] || {
    title: "Welcome",
    description: "",
  };

  return (
    <header className="flex justify-between items-center border-b-2 p-6">
      <div className="">
        <h1 className="text-2xl font-bold">{info.title}</h1>
        <p className="text-muted-foreground">{info.description}</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell className="w-6 h-6 text-gray-700" />
          {/* Badge التنبيه */}
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <div className="flex items-center gap-2">
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}
