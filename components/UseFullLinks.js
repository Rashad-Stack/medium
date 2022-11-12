import Link from "next/link";

const UseFullLinks = () => {
  return (
    <div className="flex flex-wrap gap-5 py-5">
      {links.map((link) => (
        <Link key={link.id} href={link.url}>
          <a className="text-sm text-gray-400">{link.name}</a>
        </Link>
      ))}
    </div>
  );
};

export default UseFullLinks;
const links = [
  { id: 1, name: "Help", url: "help" },
  { id: 2, name: "Status", url: "status" },
  { id: 3, name: "Writer", url: "writer" },
  { id: 4, name: "Blog", url: "blog" },
  { id: 5, name: "Careers", url: "careers" },
  { id: 6, name: "Privacy", url: "privacy" },
  { id: 7, name: "Terms", url: "terms" },
  { id: 8, name: "About", url: "about" },
  { id: 9, name: "Text to speech", url: "text-to-speech" },
];
