import { Link } from "@tanstack/react-router";

type Link = {
  label: string;
  href: string;
};

const links: Link[] = [
  { label: "about", href: "/about" },
  { label: "work", href: "/work" },
  { label: "posts", href: "/posts" },
];

export function Header() {
  return (
    <div className="flex justify-between my-10">
      <Link to="/">{"dakribe"}</Link>
      <div>
        <ul className="flex gap-4">
          {links.map((link) => (
            <Link to={link.href}>{link.label}</Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
