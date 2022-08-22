import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const PageNonFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  return (
    <section className="bg-gradient-to-tl from-yellow-500/60 via-black/40 to-yellow-500/60 relative overflow-hidden h-screen">
      <div className="container mx-auto h-screen pt-32 md:pt-0 px-6 z-10 flex items-center justify-between">
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-center relative">
          <div className="w-full mb-16 md:mb-8 text-center lg:text-left">
            <h1 className="font-light font-sans text-center lg:text-left text-5xl lg:text-8xl my-12 md:mt-0 text-gray-700">
              Sorry, this page isn&#x27;t available
            </h1>
            <Link href="/" replace>
              <a className="px-2 py-2 w-36 mt-16 font-light transition ease-in duration-200 hover:bg-yellow-700 border-2 text-lg border-gray-700 bg-yellow-500 focus:outline-none">
                Go back Homepage
              </a>
            </Link>
          </div>
          <div className="block w-full mx-auto md:mt-0 relative max-w-md lg:max-w-2xl">
            <img src="/images/illustrations/construction.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNonFound;
