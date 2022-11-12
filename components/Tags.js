import Link from "next/link";

const Tags = () => {
  return (
    <div className="flex flex-wrap gap-2 py-8 border-b">
      {tags.map((tag) => (
        <Link key={tag.id} href={`tag/${tag.tagLink}`}>
          <a className="text-xs text-gray-400 font-soehne px-5 py-1 border rounded-sm">
            {tag.name}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Tags;
const tags = [
  { id: 1, name: "Programing", tagLink: "programing" },
  { id: 2, name: "Data Science", tagLink: "data-science" },
  { id: 3, name: "Technology", tagLink: "technology" },
  { id: 4, name: "Self Improvement", tagLink: "self-improvement" },
  { id: 5, name: "Writing", tagLink: "writing" },
  { id: 6, name: "Relationship", tagLink: "relationship" },
  { id: 7, name: "Machine Learning", tagLink: "machine-learning" },
  { id: 8, name: "Productivity", tagLink: "productivity" },
  { id: 9, name: "Politics", tagLink: "politics" },
];
