import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import BlogPostCard from '../components/BlogPostCard';

// Sample blog post data. In a real app, you'd fetch this from an API.
const blogPosts = [
  /* {
    id: 1,
    author: 'Aditya Panday',
    authorAvatar: 'https://via.placeholder.com/150', // Replace with actual avatar URL
    title: "Stuck During Kali Linux Installation in a Dual Boot Setup? Here's the Fix!",
    snippet: 'The thrill of exploring cybersecurity with Kali Linux can be dampened by a frustrating stall during the software installation phase. This common problem in dual-boot setups can leave you wondering what went wrong. Fear not, tech adventurers!',
    imageUrl: 'https://via.placeholder.com/400x300.png?text=Kali+Linux+Install', // Replace with actual image
    date: 'May 18, 2024',
    readTime: '5 min read',
    tags: ['Kali Linux', 'Dual Boot', 'Troubleshooting', 'OS'],
  }, */
  {
    id: 1,
    author: 'Aditya Panday',
    authorAvatar: 'https://via.placeholder.com/150', // Replace with actual avatar URL
    title: "Stuck During Kali Linux Installation in a Dual Boot Setup? Here's the Fix!",
    snippet: 'The thrill of exploring cybersecurity with Kali Linux can be dampened by a frustrating stall during the software installation phase. This common problem in dual-boot setups can leave you wondering what went wrong. Fear not, tech adventurers!',
    imageUrl: 'https://via.placeholder.com/400x300.png?text=Kali+Linux+Install', // Replace with actual image
    date: 'May 18, 2024',
    readTime: '5 min read',
    tags: ['Kali Linux', 'Dual Boot', 'Troubleshooting', 'OS'],
    content: `
      <h2 class="text-2xl font-semibold mb-4 text-slate-100">Conquering the Software Installation ERROR</h2>
      <p class="mb-4 text-slate-300">The thrill of exploring cyber security with Kali Linux can be dampened by a frustrating stall during the software installation phase. This common problem in dual-boot setups can leave you wondering what went wrong. Fear not, tech adventurers! This guide equips you with not just one, but two solutions to overcome this obstacle.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2 text-slate-100">Understanding the Hiccup:</h3>
      <p class="mb-4 text-slate-300">Several factors can cause the software installation to grind to a halt. These include insufficient disk space, partition table issues, and conflicts with the Windows boot loader.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2 text-slate-100">Solution 1: Ample Space for Kali</h3>
      <ol class="list-decimal list-inside space-y-4 mb-4 text-slate-300">
        <li><strong class="text-slate-200">Make Room:</strong> As you rightly pointed out, creating sufficient unallocated space for Kali is crucial. Use the Windows Disk Management tool to shrink your existing Windows partition (usually C: drive). Allocate a generous amount of space — a minimum of 25GB is recommended, but more is always better for future flexibility.</li>
        <li><strong class="text-slate-200">Create a Bootable USB:</strong> Download the latest Kali ISO and create a bootable USB drive using tools like Rufus or Etcher.</li>
        <li><strong class="text-slate-200">Turn Off the Firewall:</strong> Select Windows Security and then choose Firewall & network protection. Under each network profile (like Private network or Public network), toggle the switch for Microsoft Defender Firewall to Off. Remember to re-enable Windows Defender Firewall after you've finished installation.</li>
        <li><strong class="text-slate-200">Boot From The USB:</strong> Shut down the Computer and Restart it and go to boot menu select the USB device for booting, save the changes and exit.</li>
        <li><strong class="text-slate-200">Select Graphical Installation</strong></li>
        <li><strong class="text-slate-200">Manual Partitioning:</strong> Choose "Manual partitioning" during installation. This provides the most control over your disk layout.</li>
        <li><strong class="text-slate-200">Craft Your Kali Partition:</strong> Locate the free space you created and use the "+" symbol to establish a new partition for Kali. Select Ext4 filesystem and mount point "/". Consider a separate swap partition if needed.</li>
        <li><strong class="text-slate-200">Install with Confidence:</strong> Review the partitioning scheme and proceed with the installation. The software installation phase should now progress smoothly.</li>
      </ol>

      <div class="bg-amber-900/20 border-l-4 border-amber-400/70 text-amber-200 p-4 mt-6 backdrop-blur-sm rounded-r-lg shadow-lg" role="alert">
        <p class="font-bold text-amber-100">Bonus Tip</p>
        <p>Always back up essential data before modifying disk partitions.</p>
      </div>
    `
  },
  {
    id: 2,
    author: 'Premkumar S',
    authorAvatar: 'https://via.placeholder.com/150', // Replace with actual avatar URL
    title: 'A Step-by-Step Steganography Tutorial with Steghide',
    snippet: 'Steganography hides a file inside another (for example, a text file inside an image). This post shows a simple workflow with steghide: install it, embed a text file into an image, verify the embed, then extract it back.',
    imageUrl: 'https://via.placeholder.com/400x300.png?text=Steganography', // Replace with actual image
    date: 'Sep 1, 2023',
    readTime: '4 min read',
    tags: ['Steganography', 'Steghide', 'Security', 'Tutorial'],
    content: `
      <h2 class="text-2xl font-semibold mb-4 text-slate-100">What is steganography?</h2>
      <p class="mb-4 text-slate-300">Steganography is the practice of hiding information inside a benign-looking file — for example, embedding secret text inside an image or audio file. Unlike encryption (which scrambles data), steganography hides the existence of the message.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2 text-slate-100">Common tools</h3>
      <ul class="list-disc list-inside space-y-2 mb-4 text-slate-300">
        <li><strong class="text-slate-200">steghide</strong> — a widely used tool to embed or extract files in images and audio</li>
        <li><strong class="text-slate-200">OpenStego, SilentEye</strong> — GUI alternatives for those who prefer visual tools</li>
        <li><strong class="text-slate-200">ImageMagick</strong> — useful for preparing cover images before embedding</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2 text-slate-100">Workflow Steps</h3>
      <ol class="list-decimal list-inside space-y-4 mb-4 text-slate-300">
        <li><strong class="text-slate-200">Embed a file into an image:</strong> Open steghide and choose the embed operation. When prompted, specify your cover image (the carrier) and the file to be embedded (the secret). The tool will prompt for a passphrase; choose a strong passphrase — you will need the same passphrase to extract the file later.</li>
        <li><strong class="text-slate-200">Verify embedded data (metadata only):</strong> Use the tool's information or inspect mode to view metadata for the cover file. This will show whether something has been embedded, and display metadata such as the embedded filename and size — but it will not reveal the embedded content.</li>
        <li><strong class="text-slate-200">Extract the embedded file:</strong> Use steghide's extract operation, specify the stego file (the image that may hold hidden data), and provide the passphrase when prompted. If the passphrase is correct, the embedded file will be restored to the working folder.</li>
      </ol>

      <div class="bg-cyan-900/20 border-l-4 border-cyan-400/70 text-cyan-200 p-4 mt-6 backdrop-blur-sm rounded-r-lg shadow-lg" role="alert">
        <p class="font-bold text-cyan-100">Tips & Cautions</p>
        <ul class="list-disc list-inside mt-2 space-y-1">
          <li>Use a strong passphrase. The embedded content can be encrypted; a good passphrase helps keep it safe.</li>
          <li>Cover quality matters. Larger or higher-quality cover files hide more data and show fewer visible artifacts.</li>
          <li>Legal & ethical use. Only test on files and systems you own or have explicit permission to use.</li>
          <li>Backup originals. Keep backups of original cover files before modifying them.</li>
        </ul>
      </div>
    `
  }
];

const popularTopics = ['Technology', 'Programming', 'React', 'Productivity', 'UI/UX', 'JavaScript'];

export default function Blogs() {
  return (
    <>
      <Navbar />
      <div className="bg-slate-900 min-h-screen pt-24">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Page Header */}
          <div className="border-b border-slate-700 pb-8 mb-8">
            <h1 className="text-5xl font-bold tracking-tight text-slate-50 font-serif">Stay Curious.</h1>
            <p className="mt-4 text-xl text-slate-300">
              Discover stories, thinking, and expertise from writers on any topic.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Content: Blog Post List */}
            <div className="flex-[2]">
              <div className="space-y-12">
                {blogPosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="flex-[1] lg:border-l lg:pl-8">
              <div className="sticky top-24 lg:border-slate-600">
                <h3 className="text-lg font-semibold text-slate-200 mb-4">Discover more of what matters to you</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTopics.map((topic) => (
                    <button 
                      key={topic} 
                      className="bg-slate-800/50 backdrop-blur-sm text-slate-300 text-sm font-medium px-4 py-2 rounded-full hover:bg-slate-700/70 hover:text-slate-200 transition-all duration-300 border border-slate-600/50 hover:border-slate-500/70 shadow-lg hover:shadow-xl"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}