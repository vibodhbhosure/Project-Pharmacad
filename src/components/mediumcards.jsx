import Link from "next/link";

const MediumCard = ({ article }) => {
  return (
    <div className="bg-[#f2fff0] rounded-lg p-8 shadow-lg w-full">
      <h2 className="text-xl font-bold mb-2 break-words">{article.title}</h2>
      <div
        className="text-gray-600 mb-4 break-all"
        dangerouslySetInnerHTML={{ __html: article.description }}
      />
      <Link href={article.link} className="text-blue-500 inline-block">
        Read more
      </Link>
    </div>
  );
};

export default MediumCard;
