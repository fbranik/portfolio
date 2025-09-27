import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium"></h1>
      <a  target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={150}
          height={150}
          priority
        />
      </a>
      <div className="prose prose-neutral dark:prose-invert text-justify">
        <p>
		I am a Software Engineer with a focus on systems, 
		performance analysis and optimization, as well as the development
		of high performance software and applications.    	 
		My experience varies from developing low level C/C++ benchmarks for understanding the performance
		of HPC communication, to CI/CD pipelines and user-friendly UIs. 
	</p>
	<p>
		I really enjoy optimizing software
		by understanding hardware and computer architecture. Gathering, analyzing and 
		visualizing experimental data is also at the core of my experience as researcher.
		Examples of my work can be seen through my <Link key="projects" href="projects">projects</Link>.
	</p>

      </div>
    </section>
  );
}

/*

     	<p>Skills</p> 
	<ul className="space-y-4 text-left">
		<li className="flex items-center space-x-3 rtl:space-x-reverse">
			<svg className="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" 
			aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" 
				viewBox="0 0 16 12">
			<path stroke="currentColor" strokeLinecap="round" 
			strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
			</svg>
		
			<span>Individual configuration</span>
		</li>
	</ul>

      */	
