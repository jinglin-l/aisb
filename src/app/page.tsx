"use client";


export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 py-8 md:px-8 lg:px-16">
      {/* Hero Section */}
      <header className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Bootcamp for Upskilling in AI Security
        </h1>
        <div className="text-lg md:text-xl text-gray-600 mb-12 flex flex-wrap justify-center gap-2 md:gap-4">
          <span>Apply by June 22nd</span>
          <span className="hidden md:inline">•</span>
          <span>Flights, accommodation, and expenses covered</span>
          <span className="hidden md:inline">•</span>
          <span>London, UK (In-person)</span>
          <span className="hidden md:inline">•</span>
          <span>Program runs August 4th-29th</span>
        </div>
        <div className="flex gap-4 justify-center">
          <a 
            href="https://airtable.com/app5CvqWYtNWVXBzh/pagLyM1S6ZevGYUcB/form"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Apply Now
          </a>
          <button 
            onClick={() => document.getElementById('learn-more')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
          >
            Learn More
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto space-y-20" id="learn-more">
        {/* Program Description */}
        <section>
          <p className="text-xl md:text-2xl text-gray-700 text-center">
            AISB is a 4-week long intensive program to bring researchers and engineers up to speed on security fundamentals for AI systems.
          </p>
        </section>

        {/* What Will I Learn Section */}
        <section>
          <h2 className="text-4xl font-bold mb-12 text-center">What will I learn?</h2>
          
          <div className="space-y-12">
            {/* Week 0 */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Week 0: Linux Security Foundations</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                <li>File permissions & access controls</li>
                <li>Process isolation & privilege management</li>
                <li>User/group management & sudo configuration</li>
              </ul>
            </div>

            {/* Week 1 */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Week 1: Security Fundamentals</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li><span className="font-semibold">Cryptography & Cryptanalysis:</span> From Caesar ciphers to RSA attacks, padding oracle exploits, and timing attacks</li>
                <li><span className="font-semibold">Threat Modeling:</span> Game theory approaches, attack trees, and real-world incident analysis</li>
                <li><span className="font-semibold">Penetration Testing:</span> Full attack kill chains with Metasploit, privilege escalation, and incident response</li>
                <li><span className="font-semibold">Network Security:</span> Protocol-layer attacks, API security, and traffic analysis</li>
              </ul>
            </div>

            {/* Week 2 */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Week 2: AI Infrastructure Security</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li><span className="font-semibold">Advanced Networking:</span> Deep-dive into network protocols and cloud security architectures</li>
                <li><span className="font-semibold">Containerization:</span> Build Docker from scratch, namespace isolation, container escape techniques</li>
                <li><span className="font-semibold">Supply Chain Security:</span> Dependency confusion attacks, typosquatting, SBOM analysis</li>
                <li><span className="font-semibold">Application Security:</span> XSS, SQL injection, buffer overflows, SSRF, and secure coding practices</li>
                <li><span className="font-semibold">Security Operations:</span> Hands-on SecOps with misconfigured cloud environments</li>
              </ul>
            </div>

            {/* Week 3 */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Week 3: AI-Specific Security</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li><span className="font-semibold">Computer Vision Attacks:</span> Adversarial examples, trojan injection in image models</li>
                <li><span className="font-semibold">LLM Vulnerabilities:</span> Prompt injection, system prompt extraction, RAG attacks, model attribution</li>
                <li><span className="font-semibold">AI Application Security:</span> Multi-user chatbot exploitation, DoS via expensive LLM calls, watermarking</li>
                <li><span className="font-semibold">AI Infrastructure:</span> GPU isolation attacks, RDMA vulnerabilities, ML pipeline security</li>
                <li><span className="font-semibold">Multimodal Model Security:</span> Emerging attack vectors across vision-language models</li>
              </ul>
            </div>

            {/* Week 4 */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Week 4: Capstone Project</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Choose your focus: Implement novel security solutions, replicate sophisticated attacks, or conduct authorized penetration testing</li>
                <li>Work with expert mentors on real-world security challenges</li>
                <li>Present findings to cohort and industry professionals</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Who Should Apply Section */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">Who should apply?</h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              Our ideal candidate cares about safe and responsible development of AI systems. They also have some prior experience with deep learning (training/evals) and are comfortable with Python.
            </p>
            <p>
              Some nice cherry-on-tops would include having a cybersecurity background, and C/C++ experience.
            </p>
            <p>
              Candidates must be available to attend the program full time, in person in London.
            </p>
          </div>
        </section>

        {/* FAQs Section */}
        <section>
          <h2 className="text-4xl font-bold mb-12 text-center">FAQs</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">What is the application process like?</h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                <li><span className="font-semibold">Fill Application Form</span> - Tell us about your background</li>
                <li><span className="font-semibold">Complete Coding Test</span> - Simple technical assessment</li>
                <li><span className="font-semibold">Interview</span> - Chat with our team</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">I am a high school or college student. Can I still apply?</h3>
              <p className="text-lg text-gray-700">
                We expect to have a mix of students as well as professionals, so you should apply if you fit the background criteria.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">I have other commitments. Can I attend this program part time?</h3>
              <p className="text-lg text-gray-700">
                The curriculum and the readings will likely not leave much time for outside commitments, so we would recommend not having other major time commitments during the bootcamp.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                Feel free to <a href="mailto:pranav@aisb.dev" className="text-blue-600 hover:underline">reach out</a> if you'd like to discuss your specific circumstances.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">What are the recommended prerequisites?</h3>
              <p className="text-lg text-gray-700">
                We recommend having a solid background in deep learning (or completing a program like MLAB or ARENA) and being comfortable with Python. These skills will help you make the most of the hands-on exercises and technical content during the bootcamp. We'll also send preparatory materials a couple of weeks before the program to help you brush up on essentials.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Can I join this program for some weeks but not others?</h3>
              <p className="text-lg text-gray-700">
                No, given we have limited spaces, we would be more excited to have participants who can commit to the entire four weeks of the program.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Does this program cost money?</h3>
              <p className="text-lg text-gray-700">
                No. In fact, we will also take care of accommodation, travel, food (lunch/dinner on weekdays), and visas if needed.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
