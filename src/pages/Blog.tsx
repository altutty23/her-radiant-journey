
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Your Hormones are Pooh",
      subtitle: "An introduction to your female hormones",
      image: "/lovable-uploads/f624a0f5-2ea1-4137-85ba-e079868a48f2.png",
      url: "https://theperiprofessional.substack.com/p/your-hormones-are-pooh"
    },
    {
      id: 2,
      title: "The Musical Dynamics of Perimenopause",
      subtitle: "The 3-ish Stages of the Menopause Transition",
      image: "/lovable-uploads/7c346518-75df-4882-887e-091f49200906.png",
      url: "https://theperiprofessional.substack.com/p/the-musical-dynamics-of-perimenopause"
    },
    {
      id: 3,
      title: "These Boots are Made for Walkin'",
      subtitle: "Body aches, injuries, and pain in perimenopause",
      image: "/lovable-uploads/187ca32a-35c5-4582-b14b-154c23660966.png",
      url: "https://theperiprofessional.substack.com/p/musculoskeletal-issues-in-perimenopause"
    },
    {
      id: 4,
      title: "Some Like It Hot",
      subtitle: "Hot flashes and night sweats in perimenopause",
      image: "/lovable-uploads/d7c80d0d-80f4-4744-942d-012df847ff7e.png",
      url: "https://theperiprofessional.substack.com/p/hot-flashes-and-night-sweats-in-perimenopause"
    },
    {
      id: 5,
      title: "My Perimenopause is Not Your Perimenopause",
      subtitle: "Calling out the BS",
      image: "/lovable-uploads/5ff5b090-bcc0-4547-97f2-137a82e2c86f.png",
      url: "https://theperiprofessional.substack.com/p/my-perimenopause-is-not-your-perimenopause"
    },
    {
      id: 6,
      title: "Papaya Dryness",
      subtitle: "Are you feeling fresh squeezed?",
      image: "/lovable-uploads/fd0cb895-698f-4332-93ce-8fd967d7c0fb.png",
      url: "https://theperiprofessional.substack.com/p/vaginal-dryness-in-perimenopause"
    },
    {
      id: 7,
      title: "Hear Me Out Perimenopause",
      subtitle: "The upside of the change; 10 ways I've changed for the better",
      image: "/lovable-uploads/6be1e90b-bacb-4eb3-83bf-a3592d717785.png",
      url: "https://theperiprofessional.substack.com/p/the-upside-of-perimenopause"
    },
    {
      id: 8,
      title: "My Achy Breaky Breasts",
      subtitle: "This article is stacked... (with info)!",
      image: "/lovable-uploads/300448be-ace3-4c3c-9a71-f42948e35095.png",
      url: "https://theperiprofessional.substack.com/p/breast-changes-in-perimenopause"
    },
    {
      id: 9,
      title: "Greetings from Perimenopauseville",
      subtitle: "Wish you were here!",
      image: "/lovable-uploads/eb88199d-e2af-4946-91e8-fbef9ee56bed.png",
      url: "https://theperiprofessional.substack.com/p/greetings-from-perimenopauseville"
    },
    {
      id: 10,
      title: "Abby Normal Bleeding",
      subtitle: "Concerns of seeing blood postmenopause",
      image: "/lovable-uploads/5ffb0e0e-1b6e-46aa-b623-8e09be322da9.png",
      url: "https://theperiprofessional.substack.com/p/abnormal-bleeding-postmenopause"
    }
  ];

  const handlePostClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="section-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-black">The </span>
              <span className="text-[#e60073]">Periprofessional</span>
              <span className="text-black"> Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, real experiences, and practical guidance for your perimenopause journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="card cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                onClick={() => handlePostClick(post.url)}
              >
                <div className="aspect-video overflow-hidden rounded-t-2xl">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-[#e60073] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
