import { Button } from '@/components/ui/button';
const Perimenopause = () => {
  return <section id="perimenopause" className="bg-gray-50 py-8 md:py-12">
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perimenopause, huh?</h2>
          <div className="w-24 h-1 bg-[#e60073] rounded mb-6 mx-auto"></div>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg">Understanding the menopause transition and what's really happening to your body</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content Section */}
          <div className="space-y-6 opacity-0 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-800">Am I Losing My Marbles?</h3>
            <p className="text-gray-700">
              If you're wondering what exactly perimenopause is, you're in the right place. Perimenopause is the time during which your body begins the menopause transition.
            </p>
            <p className="text-gray-700">On average, it starts around 45 (think Kate Hudson, not Golden Girls) and can last for up to 14 years before you enter menopause—which occurs when you've gone 365 days without a period (spotting counts). So basically, menopause changes don't start at menopause; the "menopause transition" known as perimenopause actually begins in the years leading up to it.</p>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-gray-600 italic mb-4">You may hear yourself say:</p>
              <ul className="space-y-2 text-gray-700">
                <li>"All of a sudden…"</li>
                <li>"I swear it happened overnight!"</li>
                <li>"But, I didn't change anything. Why is this happening?"</li>
                <li>"I'm not anxious, yet I feel like I'm going to jump out of my skin."</li>
              </ul>
            </div>
          </div>

          {/* Timeline Image */}
          <div className="opacity-0 animate-fade-in animate-delay-200">
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <img src="/lovable-uploads/502691b6-d37c-4d09-bd4a-003a25ca5255.png" alt="The Menopause Transition Timeline - The PeriProf Way" className="w-full h-auto rounded-xl" />
            </div>
          </div>
        </div>

        {/* Additional Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm opacity-0 animate-fade-in animate-delay-100">
            <h4 className="text-xl font-bold mb-4 text-gray-800">What's Really Happening?</h4>
            <p className="text-gray-700 mb-4">At menopause, your ovaries have stopped "ovary-ing" which means they no longer ovulate or produce our reproductive hormones like estradiol, a type of estrogen, and progesterone. This also means no more periods or pregnancy. Perimenopause is the time when our ovaries start to retire. </p>
            <p className="text-gray-700">The average age of menopause is 52 in the US. Menopause most commonly happens between the age of 45 and 58. By age 55, 90% of women will be menopausal.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm opacity-0 animate-fade-in animate-delay-200">
            <h4 className="text-xl font-bold mb-4 text-gray-800">Why Haven't I Heard About This Before?</h4>
            <p className="text-gray-700 mb-4">
              During perimenopause, your hormones are all over the place - up and down minute by minute. It's quite the rollercoaster. Some women are so debilitated by the constant hormonal fluctuations that they impact every aspect of their lives.
            </p>
            <p className="text-gray-700">
              These symptoms are hard to talk about, and generations of past women were often told they were "crazy" if they shared what was going on. But the narrative is positively changing!
            </p>
          </div>
        </div>

        {/* Key Facts */}
        <div className="bg-peri-lightpink p-8 rounded-2xl mb-12 opacity-0 animate-fade-in animate-delay-300">
          <h4 className="text-xl font-bold mb-6 text-gray-800 text-center">Key Facts About Perimenopause</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-[#e60073] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                100
              </div>
              <p className="text-gray-700">Symptoms of perimenopause (and they're no joke!)</p>
            </div>
            <div className="text-center">
              <div className="bg-[#e60073] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                365
              </div>
              <p className="text-gray-700">Days without a period to reach menopause</p>
            </div>
            <div className="text-center">
              <div className="bg-[#e60073] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                14
              </div>
              <p className="text-gray-700">Years that perimenopause can last</p>
            </div>
          </div>
        </div>

        {/* FAQs Preview */}
        <div className="bg-white p-8 rounded-2xl mb-12 opacity-0 animate-fade-in animate-delay-400">
          <h4 className="text-xl font-bold mb-6 text-gray-800">Frequently Asked Questions:</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Am I going crazy?</h5>
              <p className="text-gray-700">Perimenopause can upset the delicate balance of your hormones, temporarily affecting your brain and nervous system. It can sometimes make you feel like you're "losing your marbles."</p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Who gets perimenopause?</h5>
              <p className="text-gray-700">Anyone born with ovaries and has gone through puberty will eventually reach menopause. Perimenopause is the path to get there; however, not everyone gets perimenopause symptoms.</p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Can I skip menopause?</h5>
              <p className="text-gray-700">Nope. Everyone born with ovaries will reach menopause at some point if they live long enough. But don't worry, its not all bad. This is also a time of personal growth and discovery.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center opacity-0 animate-fade-in animate-delay-500">
          <a href="https://theperiprofessional.substack.com/p/perimenopause-huh" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#e60073] hover:bg-[#d1005f] text-white font-medium px-8 py-3 rounded-full text-lg">
              Learn More
            </Button>
          </a>
          <p className="mt-4 text-gray-600">Get the complete guide with all FAQs and detailed information</p>
        </div>
      </div>
    </section>;
};
export default Perimenopause;