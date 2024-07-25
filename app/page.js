import Navbar from "@/components/Navbar";
import Image from "next/image";


export default function Home() {
  return (
    <>
  
    <main className="p-1">
    <section className="flex flex-col md:flex-row justify-between items-center h-screen">

      {/* Right part - constant */}
  <div className="md:w-1/2 p-8 mt-8 text-white bg-black">
    <a href="#" className="block text-sm mb-4 hover:underline">← Back to Templates</a>
    <h1 className="text-4xl font-bold mb-4">OpenAI Assistants Quickstart</h1>
    <p className="text-lg mb-6">
      A quick-start template using the OpenAI Assistants API with Next.js built by OpenAI
    </p>
    <div className="flex space-x-4 mb-6">
      <button className="bg-white text-black px-4 py-2 rounded">Deploy</button>
      <button className="bg-gray-700 text-white px-4 py-2 rounded">View Demo</button>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between border-t border-gray-600 pt-2">
        <span>Framework</span>
        <span>Next.js, React</span>
      </div>
      <div className="flex justify-between border-t border-gray-600 pt-2">
        <span>Use Case</span>
        <span>AI</span>
      </div>
      <div className="flex justify-between border-t border-gray-600 pt-2">
        <span>CSS</span>
        <span>Tailwind</span>
      </div>
    </div>
  </div>

   {/* Vertical line */}
   <div className="w-px h-full bg-gray-600 mx-8"></div>


  {/* Left part - scrollable */}
  <div className="md:w-1/2 overflow-y-auto h-full p-8">
    <img 
      src="https://vercel.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F5IAtnPpxikPr4Nfo6TlopI%2F18541024ae295b69101a025c9867d169%2F327278336-755e85e9-3ea4-421f-b202-3b0c435ea270.png&w=1920&q=75&dpl=dpl_5EqukQs5q8FsNubd1TLNTfaMd5j7" 
      alt="" 
      width={1000} 
      height={1000} 
    />
    <h1 className="text-4xl mt-2 font-bold text-white mb-4">OpenAI Assistants API Quickstart</h1>
    <p className="text-lg text-white mb-6">A quick-start template using the OpenAI Assistants API with Next.js.</p>
    <h2 className="text-2xl font-bold text-white mb-4">Quickstart Setup</h2>
    <h2 className="mb-2 mt-2">1. Clone repo</h2>
    <div className="bg-gray-800 text-white p-4 mt-2 rounded">
      <code>
        1  git clone https://github.com/openai/openai-assistants-quickstart.git<br />
        2  cd openai-assistants-quickstart
      </code>
    </div>
    <h2 className="mb-2 mt-2">2. Set your OpenAI API key</h2>
    <div className="bg-gray-800 text-white p-4 mt-2 rounded">
      <code>
        1  export OPENAI_API_KEY="sk_..."
      </code>
    </div>
    <h2 className="mb-2 mt-2">Install dependencies</h2>
    <div className="bg-gray-800 text-white p-4 mt-2 rounded">
      <code>
        1  npm install
      </code>
    </div>
    <h2 className="mb-2 mt-2">Run</h2>
    <div className="bg-gray-800 text-white p-4 mt-2 rounded">
      <code>
        1  npm run dev
      </code>
    </div>
    <h2 className="font-bold mt-4 text-2xl">5. Navigate to <span className="text-blue-800">http://localhost:3000</span>.</h2>
    <h2 className="text-2xl font-bold text-white mt-4 mb-4">Deployment</h2>
    <p className="text-md text-gray-400 mb-6">You can deploy this project to Vercel or any other platform that supports Next.js.</p>
    <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
    <p className="text-md text-gray-400 mb-6">
      This project is intended to serve as a template for using the Assistants API in Next.js with <span className="text-blue-600"> streaming</span>, tool use (<span className="text-blue-600"> code interpreter</span> and <span className="text-blue-600"> file search</span>), and function calling. While there are multiple pages to demonstrate each of these capabilities, they all use the same underlying assistant with all capabilities enabled.
    </p>
    <p className="text-md text-gray-400 mb-6">
      The main logic for chat will be found in the Chat component in <code className="text-white bg-gray-500">app/components/chat.tsx</code>, and the handlers starting with <code className="text-white bg-gray-500">api/assistants/threads</code> (found in <code className="text-white bg-gray-500">api/assistants/threads/...</code>). Feel free to start your own project and copy some of this logic in! The Chat component itself can be copied and used directly, provided you copy the styling from <code>app/components/chat.module.css</code> as well.
    </p>
    <h2 className="text-2xl font-bold text-white mb-4">Pages</h2>
    <p className="text-md text-gray-400 mb-6">
      - Basic Chat Example: <a href="http://localhost:3000/examples/basic-chat" className="text-blue-500 hover:underline">http://localhost:3000/examples/basic-chat</a><br />
      - Function Calling Example: <a href="http://localhost:3000/examples/function-calling" className="text-blue-500 hover:underline">http://localhost:3000/examples/function-calling</a><br />
      - File Search Example: <a href="http://localhost:3000/examples/file-search" className="text-blue-500 hover:underline">http://localhost:3000/examples/file-search</a><br />
      - Full-featured Example: <a href="http://localhost:3000/examples/all" className="text-blue-500 hover:underline">http://localhost:3000/examples/all</a>
    </p>
    <h2 className="text-2xl font-bold text-white mb-4">Main Components</h2>
    <p className="text-md text-gray-400 mb-6">
      - <code className="text-white">app/components/chat.tsx</code> - handles chat rendering, streaming, and function call forwarding<br />
      - <code className="text-white">app/components/file-viewer.tsx</code> - handles uploading, fetching, and deleting files for file search
    </p>
    <h2 className="text-2xl font-bold text-white mb-4">Endpoints</h2>
    <p className="text-md text-gray-400 mb-6">
      - <code className="text-white">api/assistants</code> - POST: create assistant (only used at startup)<br />
      - <code className="text-white">api/assistants/threads</code> - POST: create new thread<br />
      - <code className="text-white">api/assistants/threads/[threadId]/messages</code> - POST: send message to assistant<br />
      - <code className="text-white">api/assistants/threads/[threadId]/actions</code> - POST: inform assistant of the result of a function it decided to call<br />
      - <code className="text-white">api/assistants/files</code> - GET/POST/DELETE: fetch, upload, and delete assistant files for file search
    </p>
    <h2 className="text-2xl font-bold text-white mb-4">Feedback</h2>
    <p className="text-md text-gray-400 mb-6">
      Let us know if you have any thoughts, questions, or feedback in <span className="text-blue-600">this form!</span>
    </p>
  </div>
  
 
  
  
</section>

<section className="bg-gray-950 py-12">
 
  <div className="container mx-auto px-6">
  <h2 className="font-bold text-2xl mb-2 ">Related templates</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Card 1 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src="https://via.placeholder.com/300" alt="Image 1" className="w-full h-48 object-cover"/>
        <div className="p-4">
          <h2 className="text-xl text-gray-500 font-bold mb-2">Next.js AI chatbot</h2>
          <p className="text-gray-700">A full-featured, hackable Next.js AI chatbot built by Vercel</p>
        </div>
      </div>
      
      {/* Card 2 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src="https://via.placeholder.com/300" alt="Image 2" className="w-full h-48 object-cover"/>
        <div className="p-4">
          <h2 className="text-xl text-gray-500 font-bold mb-2">Upstash Vector + Vercel AI SDK Starter</h2>
          <p className="text-gray-700">A RAG chatbot starter for expert answers on university degrees.</p>
        </div>
      </div>
      
      {/* Card 3 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src="https://via.placeholder.com/300" alt="Image 3" className="w-full h-48 object-cover"/>
        <div className="p-4">
          <h2 className="text-xl text-gray-500 font-bold mb-2">Morphic: AI-powered answer engine</h2>
          <p className="text-gray-700">AI answer engine with Generative UI.</p>
        </div>
      </div>
      
      {/* Card 4 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src="https://via.placeholder.com/300" alt="Image 4" className="w-full h-48 object-cover"/>
        <div className="p-4">
          <h2 className="text-xl text-gray-500 font-bold mb-2">Advanced AI Bot Protection</h2>
          <p className="text-gray-700">An AI chat app built on Vercel that integrates Kasada's advanced bot protection.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="bg-black p-14">
  <div className="bg-gray-600 shadow-md rounded-lg p-10 flex justify-between items-center">
    <div className="text-left">
      <h2 className="text-3xl font-bold mb-4">Unleash New Possibilities</h2>
      <p className="text-xl text-gray-950">Deploy your app on Vercel and unlock its full potential</p>
    </div>
    <button className="bg-white text-black px-4 py-2 rounded">Try Vercel free</button>
  </div>
</section>

<footer className="bg-black text-gray-400 py-8 px-4">
  <div className="container mx-auto">
    <div className="flex flex-wrap justify-between">
      <div className="w-full md:w-1/4 mb-4">
        <h4 className="text-white font-bold mb-2">Products</h4>
        <ul>
          <li>Previews</li>
          <li>Next.js</li>
          <li>Rendering</li>
          <li>v0</li>
          <li>Observability</li>
          <li>Turbo</li>
          <li>Security</li>
          <li>Enterprise</li>
          <li>Changelog</li>
          <li>CLI & API</li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 mb-4">
        <h4 className="text-white font-bold mb-2">Resources</h4>
        <ul>
          <li>Docs</li>
          <li>Experts</li>
          <li>Pricing</li>
          <li>Guides</li>
          <li>Customers</li>
          <li>Help</li>
          <li>Integrations</li>
          <li>⌘K</li>
          <li>Templates</li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 mb-4">
        <h4 className="text-white font-bold mb-2">Company</h4>
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Contact Us</li>
          <li>Next.js Conf</li>
          <li>Open Source</li>
          <li>Partners</li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 mb-4">
        <h4 className="text-white font-bold mb-2">Security</h4>
        <ul>
          <li>Security</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
   
  </div>
</footer>

      </main>
      </>
  );
}
