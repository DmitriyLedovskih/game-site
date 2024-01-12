import { Gamepad, Newspaper, Trophy, User, UsersRound } from "lucide-react";

export const sidebarMenu = [
  {
    id: 1,
    title: "Главная",
    icon: Newspaper,
    href: "/",
  },
  {
    id: 2,
    title: "Матчи",
    icon: Gamepad,
    href: "/matches",
  },
  {
    id: 3,
    title: "Турниры",
    icon: Trophy,
    href: "/tournaments",
  },
  {
    id: 4,
    title: "Команды",
    icon: UsersRound,
    href: "/teams",
  },
  {
    id: 5,
    title: "Друзья",
    icon: User,
    href: "/friends",
    counter: 3,
  },
];
