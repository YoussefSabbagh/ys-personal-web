import Link from 'next/link';
import { FaGithub, FaReact } from 'react-icons/fa';
import { MdScreenSearchDesktop } from 'react-icons/md';

const ProductCard = ({ data }) => {
  return (
    <div className="max-w-sm w-full shadow-md shadow-yellow-300">
      <div
        className="h-48 flex-none bg-cover rounded-t text-center overflow-hidden"
        style={{
          backgroundImage: `url(${data.image})`,
          objectFit: 'cover',
        }}
        title={data.name}
      ></div>
      <div className="border-r border-b border-l border-gray-400  bg-white rounded-b p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center space-x-2">
            <span>{data.icon}</span> <span>{data.category.tag}</span>
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">
            {data.name}
          </div>
          <p className="text-gray-700 text-base mb-4 summary">{data.text} </p>
          <Link href="/project/1" passHref>
            <a className="bg-purple text-white px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-purple">
              Learn More
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <p className=" text-gray-600 flex items-center space-x-2 cursor-pointer hover:text-danger">
            <a href={data.src} target="_blank" rel="noopener noreferrer">
              <FaGithub size={32} /> Code
            </a>
          </p>
          <p className=" text-purple text-center flex justify-center items-center space-x-2 cursor-pointer bg-yellow-500 px-4 py-2 rounded-full hover:text-yellow-500 hover:bg-purple">
            <a href={data.link.url} target="_blank" rel="noopener noreferrer">
              <MdScreenSearchDesktop size={32} className="text-center inline" />
              Life Demo
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
