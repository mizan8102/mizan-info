import { BookPage } from '../hooks/useBookPagination';

export const portfolioPages: BookPage[] = [
  {
    id: 'cover',
    title: 'Portfolio',
    content: `
      <div style="text-align: center; padding: 2rem 0;">
        <h1 style="font-size: 3rem; margin-bottom: 1rem; color: #2c1810;">Mizan</h1>
        <h2 style="font-size: 1.5rem; color: #5a4a3a; margin-bottom: 2rem;">Professional Portfolio</h2>
        <div style="border: 2px solid #8b4513; padding: 2rem; margin: 2rem 0; border-radius: 8px; background: rgba(139, 69, 19, 0.05);">
          <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 1rem;">
            Welcome to my comprehensive portfolio showcasing my professional and academic journey. 
            This interactive book contains my projects, work experience, technical skills, 
            certifications, research contributions, and much more.
          </p>
          <p style="font-size: 1.1rem; color: #5a4a3a;">
            Navigate through the pages to explore my professional story and achievements.
          </p>
        </div>
        <div style="margin-top: 3rem;">
          <p style="font-style: italic; color: #8b4513;">"Turning the page to new opportunities"</p>
        </div>
      </div>
    `,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'about',
    title: 'About Me',
    content: `
      <h1>Professional Profile</h1>
      <p>I am a passionate and dedicated professional with a strong background in technology and innovation. 
      My journey has been marked by continuous learning, creative problem-solving, and a commitment to excellence 
      in everything I undertake.</p>
      
      <h2>Professional Philosophy</h2>
      <p>I believe in the power of technology to transform lives and businesses. My approach combines 
      technical expertise with creative thinking, always striving to deliver solutions that not only 
      meet requirements but exceed expectations.</p>
      
      <blockquote>
        "Innovation distinguishes between a leader and a follower." — Steve Jobs
      </blockquote>
      
      <h2>Core Values</h2>
      <ul>
        <li><strong>Excellence:</strong> Committed to delivering high-quality work in every project</li>
        <li><strong>Innovation:</strong> Always seeking new and better ways to solve problems</li>
        <li><strong>Collaboration:</strong> Believing in the power of teamwork and shared knowledge</li>
        <li><strong>Continuous Learning:</strong> Embracing new technologies and methodologies</li>
        <li><strong>Integrity:</strong> Maintaining the highest ethical standards in all endeavors</li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'experience',
    title: 'Professional Experience',
    content: `
      <h1>Work Experience</h1>
      
      <h2>Senior Software Engineer | Tech Company Inc. | 2022 - Present</h2>
      <p>Leading development of scalable web applications using modern technologies including React, Node.js, and cloud platforms. 
      Mentored junior developers and implemented best practices that improved team productivity by 30%.</p>
      
      <h3>Key Achievements:</h3>
      <ul>
        <li>Architected and developed a microservices platform serving 100K+ users</li>
        <li>Reduced application load time by 40% through performance optimization</li>
        <li>Led a team of 5 developers in agile development practices</li>
        <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
      </ul>
      
      <h2>Full Stack Developer | StartupXYZ | 2020 - 2022</h2>
      <p>Developed end-to-end web solutions from concept to deployment. Worked closely with product managers 
      and designers to create user-centric applications that drove business growth.</p>
      
      <h3>Key Achievements:</h3>
      <ul>
        <li>Built responsive web applications using React, TypeScript, and Node.js</li>
        <li>Integrated third-party APIs and payment systems</li>
        <li>Collaborated with cross-functional teams in fast-paced environment</li>
        <li>Contributed to 50% increase in user engagement</li>
      </ul>
      
      <h2>Junior Developer | Web Solutions Ltd. | 2019 - 2020</h2>
      <p>Started my professional journey working on various web development projects, 
      gaining hands-on experience with modern development tools and methodologies.</p>
    `,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'projects',
    title: 'Featured Projects',
    content: `
      <h1>Portfolio Projects</h1>
      
      <h2>E-Commerce Platform | 2023</h2>
      <p>A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. 
      Features include user authentication, payment processing, inventory management, and admin dashboard.</p>
      
      <h3>Technologies Used:</h3>
      <ul>
        <li>Frontend: React, TypeScript, Tailwind CSS, Redux</li>
        <li>Backend: Node.js, Express, JWT Authentication</li>
        <li>Database: PostgreSQL, Redis</li>
        <li>Deployment: AWS, Docker, Nginx</li>
      </ul>
      
      <h2>AI-Powered Analytics Dashboard | 2023</h2>
      <p>Developed a real-time analytics dashboard with machine learning capabilities for business intelligence. 
      Processes large datasets and provides actionable insights through interactive visualizations.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li>Real-time data processing and visualization</li>
        <li>Machine learning models for predictive analytics</li>
        <li>Interactive charts and graphs using D3.js</li>
        <li>RESTful API with comprehensive documentation</li>
      </ul>
      
      <h2>Mobile App for Task Management | 2022</h2>
      <p>Cross-platform mobile application built with React Native for team collaboration and project management. 
      Includes features like real-time notifications, file sharing, and progress tracking.</p>
      
      <h3>Technologies Used:</h3>
      <ul>
        <li>React Native, Redux, Firebase</li>
        <li>Real-time database and authentication</li>
        <li>Push notifications and offline support</li>
        <li>Cross-platform deployment (iOS & Android)</li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'skills',
    title: 'Technical Skills',
    content: `
      <h1>Technical Expertise</h1>
      
      <h2>Programming Languages</h2>
      <ul>
        <li><strong>JavaScript/TypeScript:</strong> Advanced proficiency in modern ES6+ features</li>
        <li><strong>Python:</strong> Data analysis, machine learning, and backend development</li>
        <li><strong>Java:</strong> Enterprise application development and Spring framework</li>
        <li><strong>Go:</strong> Microservices and cloud-native applications</li>
        <li><strong>SQL:</strong> Database design and optimization</li>
      </ul>
      
      <h2>Frontend Technologies</h2>
      <ul>
        <li><strong>React:</strong> Component-based architecture, hooks, and state management</li>
        <li><strong>Vue.js:</strong> Progressive framework and ecosystem</li>
        <li><strong>Angular:</strong> Enterprise-scale applications</li>
        <li><strong>HTML5/CSS3:</strong> Semantic markup and responsive design</li>
        <li><strong>Tailwind CSS:</strong> Utility-first CSS framework</li>
      </ul>
      
      <h2>Backend & Database</h2>
      <ul>
        <li><strong>Node.js:</strong> Server-side JavaScript and Express framework</li>
        <li><strong>PostgreSQL:</strong> Relational database design and optimization</li>
        <li><strong>MongoDB:</strong> NoSQL database and document modeling</li>
        <li><strong>Redis:</strong> Caching and session management</li>
        <li><strong>GraphQL:</strong> API query language and schema design</li>
      </ul>
      
      <h2>Cloud & DevOps</h2>
      <ul>
        <li><strong>AWS:</strong> EC2, S3, Lambda, RDS, and CloudFormation</li>
        <li><strong>Docker:</strong> Containerization and orchestration</li>
        <li><strong>Kubernetes:</strong> Container orchestration and scaling</li>
        <li><strong>CI/CD:</strong> GitHub Actions, Jenkins, and GitLab CI</li>
        <li><strong>Monitoring:</strong> Prometheus, Grafana, and ELK Stack</li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'education',
    title: 'Education & Certifications',
    content: `
      <h1>Academic Background</h1>
      
      <h2>Master of Science in Computer Science | University Name | 2018 - 2020</h2>
      <p>Specialized in Software Engineering and Artificial Intelligence. 
      Thesis: "Machine Learning Applications in Web Development"</p>
      
      <h3>Relevant Coursework:</h3>
      <ul>
        <li>Advanced Algorithms and Data Structures</li>
        <li>Machine Learning and Neural Networks</li>
        <li>Software Architecture and Design Patterns</li>
        <li>Database Systems and Optimization</li>
        <li>Human-Computer Interaction</li>
      </ul>
      
      <h2>Bachelor of Science in Information Technology | College Name | 2014 - 2018</h2>
      <p>Graduated Magna Cum Laude with a focus on Web Development and System Administration.</p>
      
      <h1>Professional Certifications</h1>
      
      <h2>AWS Certified Solutions Architect | Amazon Web Services | 2023</h2>
      <p>Demonstrated expertise in designing distributed systems on AWS platform.</p>
      
      <h2>Certified Kubernetes Administrator | Cloud Native Computing Foundation | 2022</h2>
      <p>Proven ability to install, configure, and manage Kubernetes clusters.</p>
      
      <h2>Google Cloud Professional Developer | Google Cloud | 2021</h2>
      <p>Expertise in developing and deploying applications on Google Cloud Platform.</p>
      
      <h2>Certified Scrum Master | Scrum Alliance | 2020</h2>
      <p>Facilitated agile development processes and team collaboration.</p>
    `,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'research',
    title: 'Research & Publications',
    content: `
      <h1>Research Contributions</h1>
      
      <h2>Published Papers</h2>
      
      <h3>"Optimizing Web Performance Through Advanced Caching Strategies" | 2023</h3>
      <p>Published in the Journal of Web Engineering. This research explores novel approaches 
      to web performance optimization through intelligent caching mechanisms.</p>
      
      <h3>"Machine Learning Applications in User Experience Design" | 2022</h3>
      <p>Presented at the International Conference on Human-Computer Interaction. 
      Investigated how ML algorithms can enhance user interface design and interaction patterns.</p>
      
      <h2>Conference Presentations</h2>
      
      <h3>TechConf 2023 | "Building Scalable Web Applications"</h3>
      <p>Delivered a keynote presentation on modern web development practices and scalability patterns 
      to an audience of 500+ developers and architects.</p>
      
      <h3>DevSummit 2022 | "The Future of Frontend Development"</h3>
      <p>Shared insights on emerging frontend technologies and their impact on user experience 
      and developer productivity.</p>
      
      <h2>Open Source Contributions</h2>
      
      <h3>React Community | 2020 - Present</h3>
      <p>Active contributor to various React ecosystem projects, including bug fixes, 
      feature enhancements, and documentation improvements.</p>
      
      <h3>Node.js Foundation | 2021 - Present</h3>
      <p>Contributed to core Node.js modules and participated in community discussions 
      on performance improvements and security enhancements.</p>
    `,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'achievements',
    title: 'Awards & Achievements',
    content: `
      <h1>Professional Recognition</h1>
      
      <h2>Industry Awards</h2>
      
      <h3>Best Innovation Award | Tech Innovation Summit 2023</h3>
      <p>Recognized for developing an innovative solution that improved system performance by 50% 
      and reduced operational costs by 30%.</p>
      
      <h3>Outstanding Developer | Company Annual Awards 2022</h3>
      <p>Awarded for exceptional contributions to team projects and mentoring junior developers.</p>
      
      <h2>Academic Achievements</h2>
      
      <h3>Dean's List | University Name | 2018 - 2020</h3>
      <p>Maintained a GPA of 3.8+ throughout graduate studies, demonstrating academic excellence.</p>
      
      <h3>Best Thesis Award | Computer Science Department 2020</h3>
      <p>Recognized for outstanding research contribution in the field of machine learning applications.</p>
      
      <h2>Community Recognition</h2>
      
      <h3>Top Contributor | Stack Overflow | 2022</h3>
      <p>Ranked in the top 5% of contributors, helping developers worldwide with technical solutions.</p>
      
      <h3>Mentor of the Year | Developer Community | 2021</h3>
      <p>Recognized for exceptional mentorship and guidance to aspiring developers.</p>
      
      <h2>Competition Wins</h2>
      
      <h3>Hackathon Winner | TechCrunch Disrupt 2023</h3>
      <p>Led team to victory in 48-hour hackathon, developing a revolutionary mobile application.</p>
      
      <h3>Code Challenge Champion | LeetCode Contest 2022</h3>
      <p>Achieved top 1% ranking in competitive programming contest with 10,000+ participants.</p>
    `,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'blog',
    title: 'Blog & Writing',
    content: `
      <h1>Thought Leadership</h1>
      
      <h2>Technical Blog Posts</h2>
      
      <h3>"The Complete Guide to React Performance Optimization" | 2023</h3>
      <p>A comprehensive 5,000-word article covering advanced techniques for optimizing React applications. 
      Featured on Dev.to and Medium, with 10K+ views and 500+ claps.</p>
      
      <h3>"Building Scalable Microservices with Node.js" | 2023</h3>
      <p>Detailed guide on microservices architecture, covering design patterns, 
      communication strategies, and deployment best practices.</p>
      
      <h3>"The Future of Web Development: Trends and Predictions" | 2022</h3>
      <p>Analysis of emerging web technologies and their potential impact on the industry. 
      Shared insights on WebAssembly, Progressive Web Apps, and modern frameworks.</p>
      
      <h2>Community Writing</h2>
      
      <h3>Stack Overflow Contributions | 2020 - Present</h3>
      <p>Active contributor with 2,000+ answers and 50,000+ reputation points. 
      Specialized in JavaScript, React, and Node.js topics.</p>
      
      <h3>Medium Publications | 2021 - Present</h3>
      <p>Regular contributor to various tech publications, covering topics from 
      beginner tutorials to advanced architectural concepts.</p>
      
      <h2>Speaking Engagements</h2>
      
      <h3>Podcast Guest | "The Developer's Journey" | 2023</h3>
      <p>Featured guest discussing career development and technical growth in the software industry.</p>
      
      <h3>Webinar Host | "Modern Web Development" | 2022</h3>
      <p>Conducted monthly webinars for 200+ attendees on current web development trends and practices.</p>
    `,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'blog-js-es6-refresher',
    title: 'Blog: JS ES6+ Refresher (EN + বাংলা)',
    content: `
      <h1>JavaScript (ES6+) Refresher: Q&A + Examples</h1>
      <p><strong>Goal:</strong> দ্রুত ইন্টারভিউ রিভিশন (English + বাংলা ব্যাখ্যা + উদাহরণ)</p>

      <hr />
      <h2>1) Promises</h2>
      <p><strong>Q:</strong> What is a Promise?</p>
      <p><em>EN:</em> Promise represents eventual completion (resolve) or failure (reject) of async work.<br/>
      <em>BN:</em> Promise হলো asynchronous কাজ সফল/ব্যর্থ হওয়ার ফলাফলকে ধরে রাখে।</p>
      <pre><code class="language-js">const task = new Promise((resolve, reject) => {
  const ok = true;
  ok ? resolve('Task done!') : reject('Task failed!');
});
task.then(console.log).catch(console.error);
// Output: Task done!
      </code></pre>

      <p><strong>States:</strong> pending → fulfilled | rejected</p>
      <p><strong>then/catch vs async/await:</strong> chaining vs synchronous-looking flow</p>
      <pre><code class="language-js">// then/catch
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(r => r.json())
  .then(d => console.log('then:', d));

// async/await
async function getTodo(){
  const r = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const d = await r.json();
  console.log('await:', d);
}
getTodo();
      </code></pre>

      <p><strong>Multiple:</strong> <code>Promise.all([p1,p2])</code> waits for all.</p>
      <p><strong>Also know:</strong> <code>Promise.race</code> (first settles), <code>Promise.allSettled</code> (all results), <code>Promise.any</code> (first fulfilled).</p>
      <pre><code class="language-js">// race
Promise.race([
  fetch('/slow'),
  fetch('/fast')
]).then(winner => console.log('first:', winner.url));

// allSettled
const results = await Promise.allSettled([
  Promise.resolve(1),
  Promise.reject('x')
]);
console.log(results);

// any
const val = await Promise.any([
  Promise.reject('a'),
  Promise.resolve('b')
]);
console.log(val); // 'b'
      </code></pre>

      <hr />
      <h2>2) async/await</h2>
      <p><em>EN:</em> Sugar over Promises for cleaner async code.<br/>
      <em>BN:</em> Promise সহজভাবে লেখার জন্য async/await।</p>
      <pre><code class="language-js">async function sayHello(){
  return 'Hello!';
}
sayHello().then(console.log);
      </code></pre>
      <p><strong>Note:</strong> <code>await</code> only inside <code>async</code> functions; use <code>Promise.all</code> for parallel.</p>
      <pre><code class="language-js">async function parallel(){
  const [a,b] = await Promise.all([Promise.resolve(1), Promise.resolve(2)]);
  console.log(a,b); // 1 2
}
parallel();
      </code></pre>

      <hr />
      <h2>3) Closures</h2>
      <p><em>EN:</em> Function remembers outer variables even after outer returns.<br/>
      <em>BN:</em> ফাংশন বাইরের ভেরিয়েবল মনে রাখে।</p>
      <pre><code class="language-js">function counter(){
  let count = 0;
  return function(){
    count++;
    return count;
  };
}
const inc = counter();
console.log(inc()); // 1
console.log(inc()); // 2
      </code></pre>

      <hr />
      <h2>4) Error Handling</h2>
      <p><em>EN:</em> Use try/catch with async/await; <code>.catch</code> for Promises.<br/>
      <em>BN:</em> async/await এ try/catch; Promise এ <code>.catch</code>।</p>
      <pre><code class="language-js">async function risky(){
  try{
    await Promise.reject(new Error('Boom'));
  }catch(e){
    console.log('Caught:', e.message);
  }finally{
    console.log('Always runs');
  }
}
risky();
      </code></pre>

      <hr />
      <h2>Mini Projects</h2>
      <h3>1) Fake Weather (Promise + async/await)</h3>
      <pre><code class="language-js">async function getWeather(){
  const r = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return r.json();
}
getWeather().then(d => console.log('then:', d));
(async()=>{ console.log('await:', await getWeather()); })();
      </code></pre>

      <h3>2) Stopwatch (Closure)</h3>
      <pre><code class="language-js">function createStopwatch(){
  let t = 0, id = null;
  return {
    start(){ if(id==null) id = setInterval(()=>t++,1000); },
    pause(){ if(id!=null) { clearInterval(id); id=null; } },
    reset(){ t = 0; },
    read(){ return t; }
  };
}
const sw = createStopwatch();
      </code></pre>

      <h3>3) Safe JSON Parser (Error Handling)</h3>
      <pre><code class="language-js">function safeParse(str){
  try{ return JSON.parse(str); }
  catch{ return 'Invalid JSON'; }
}
      </code></pre>

      <p style="margin-top:1rem"><strong>Practice Plan:</strong> Day 1 Promises → Day 2 async/await → Day 3 Closures → Day 4 Errors → Day 5–7 Combine.</p>
    `,
    image: 'https://images.unsplash.com/photo-1529078155058-5d716f45d604?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'communities',
    title: 'Community Involvement',
    content: `
      <h1>Professional Communities & Networks</h1>
      
      <h2>Industry Organizations</h2>
      
      <h3>IEEE Computer Society | Member | 2020 - Present</h3>
      <p>Active member contributing to technical publications and participating in local chapter events. 
      Regularly attend conferences and workshops on emerging technologies.</p>
      
      <h3>Association for Computing Machinery (ACM) | Member | 2019 - Present</h3>
      <p>Member of the Special Interest Group on Software Engineering (SIGSOFT). 
      Contributed to research discussions and professional development initiatives.</p>
      
      <h2>Developer Communities</h2>
      
      <h3>React Developer Community | Core Contributor | 2021 - Present</h3>
      <p>Active contributor to React ecosystem projects, helping maintain documentation, 
      reviewing pull requests, and mentoring new contributors.</p>
      
      <h3>Node.js Foundation | Community Member | 2020 - Present</h3>
      <p>Participated in working groups focused on security, performance, and accessibility. 
      Contributed to open source projects and community initiatives.</p>
      
      <h3>Stack Overflow | Top Contributor | 2019 - Present</h3>
      <p>Ranked in top 5% of contributors with 50,000+ reputation points. 
      Specialized in JavaScript, React, and Node.js, helping developers worldwide.</p>
      
      <h2>Local Tech Communities</h2>
      
      <h3>City Tech Meetup | Co-Organizer | 2022 - Present</h3>
      <p>Co-organize monthly tech meetups with 200+ attendees. Topics include web development, 
      AI/ML, and career development in technology.</p>
      
      <h3>Women Who Code | Mentor | 2021 - Present</h3>
      <p>Mentor aspiring female developers, providing career guidance and technical support. 
      Conducted workshops on modern web development practices.</p>
      
      <h2>Professional Networks</h2>
      
      <h3>LinkedIn Professional Network | 5,000+ Connections</h3>
      <p>Active networker in the tech industry, sharing insights on software development, 
      career growth, and industry trends.</p>
      
      <h3>GitHub Community | Open Source Advocate</h3>
      <p>Maintainer of several popular open source projects with 1,000+ stars combined. 
      Active in code reviews and community discussions.</p>
    `,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'courses',
    title: 'Online Courses & Learning',
    content: `
      <h1>Continuous Learning Journey</h1>
      
      <h2>Professional Development Courses</h2>
      
      <h3>Advanced React Patterns | Frontend Masters | 2023</h3>
      <p>Comprehensive course covering advanced React concepts including hooks, context, 
      performance optimization, and testing strategies.</p>
      
      <h3>System Design Interview | Educative | 2023</h3>
      <p>Mastered large-scale system design concepts, distributed systems, and scalability patterns. 
      Completed with distinction and practical projects.</p>
      
      <h3>Machine Learning Specialization | Coursera | 2022</h3>
      <p>Stanford University's ML course covering supervised learning, unsupervised learning, 
      and deep learning applications in real-world scenarios.</p>
      
      <h2>Cloud & DevOps Certifications</h2>
      
      <h3>AWS Solutions Architect Professional | AWS Training | 2023</h3>
      <p>Advanced certification covering complex AWS architectures, security best practices, 
      and cost optimization strategies.</p>
      
      <h3>Kubernetes Administration | Linux Foundation | 2022</h3>
      <p>Hands-on training in container orchestration, cluster management, and microservices deployment.</p>
      
      <h3>Docker Deep Dive | Docker Inc. | 2021</h3>
      <p>Comprehensive course on containerization, Docker Swarm, and production deployment strategies.</p>
      
      <h2>Programming & Development</h2>
      
      <h3>Full Stack JavaScript | freeCodeCamp | 2021</h3>
      <p>Complete full-stack development curriculum covering frontend, backend, and database technologies.</p>
      
      <h3>TypeScript Deep Dive | Pluralsight | 2022</h3>
      <p>Advanced TypeScript concepts including generics, decorators, and advanced type system features.</p>
      
      <h3>GraphQL API Development | Udemy | 2021</h3>
      <p>Modern API development using GraphQL, Apollo Server, and client-side integration techniques.</p>
      
      <h2>Data Science & Analytics</h2>
      
      <h3>Python for Data Science | DataCamp | 2022</h3>
      <p>Data manipulation, visualization, and statistical analysis using pandas, matplotlib, and scikit-learn.</p>
      
      <h3>SQL for Data Analysis | Mode Analytics | 2021</h3>
      <p>Advanced SQL techniques for data analysis, reporting, and business intelligence.</p>
      
      <h2>Leadership & Soft Skills</h2>
      
      <h3>Technical Leadership | LinkedIn Learning | 2023</h3>
      <p>Leadership skills for technical professionals, team management, and project coordination.</p>
      
      <h3>Public Speaking for Developers | Toastmasters | 2022</h3>
      <p>Improved presentation skills and technical communication through structured speaking practice.</p>
    `,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'personal-projects',
    title: 'Personal Projects & Ventures',
    content: `
      <h1>Side Projects & Personal Ventures</h1>
      
      <h2>Open Source Projects</h2>
      
      <h3>React Performance Toolkit | 2023</h3>
      <p>A comprehensive library for React performance monitoring and optimization. 
      Features include component profiling, bundle analysis, and performance recommendations. 
      <strong>1,200+ GitHub stars, 50+ contributors</strong></p>
      
      <h3>Developer Productivity CLI | 2022</h3>
      <p>Command-line tool that automates common development tasks including project setup, 
      dependency management, and code quality checks. <strong>800+ downloads per week</strong></p>
      
      <h2>Personal Applications</h2>
      
      <h3>TaskFlow - Project Management App | 2023</h3>
      <p>Full-stack application built with React, Node.js, and PostgreSQL. Features include 
      team collaboration, time tracking, and project analytics. <strong>500+ active users</strong></p>
      
      <h3>CodeSnippet Manager | 2022</h3>
      <p>Cross-platform desktop application for managing and organizing code snippets. 
      Built with Electron and features syntax highlighting, search, and cloud sync.</p>
      
      <h2>Learning & Experimentation</h2>
      
      <h3>AI-Powered Code Review Assistant | 2023</h3>
      <p>Machine learning model trained on code quality patterns to provide automated code reviews. 
      Integrated with popular IDEs and version control systems.</p>
      
      <h3>Blockchain Voting System | 2022</h3>
      <p>Decentralized voting application using Ethereum smart contracts. Features transparent 
      voting process and immutable results. <strong>Educational project</strong></p>
      
      <h2>Content Creation</h2>
      
      <h3>Tech YouTube Channel | 2021 - Present</h3>
      <p>Educational content covering web development, software engineering practices, and career advice. 
      <strong>5,000+ subscribers, 100,000+ total views</strong></p>
      
      <h3>Technical Newsletter | 2022 - Present</h3>
      <p>Weekly newsletter covering the latest in web development, featuring tutorials, 
      industry insights, and tool recommendations. <strong>2,000+ subscribers</strong></p>
      
      <h2>Community Projects</h2>
      
      <h3>Local Developer Resource Hub | 2023</h3>
      <p>Community-driven platform connecting local developers with opportunities, events, 
      and resources. Built with Next.js and featuring real-time updates.</p>
      
      <h3>Mentorship Platform | 2022</h3>
      <p>Platform connecting experienced developers with newcomers for structured mentorship programs. 
      Features scheduling, progress tracking, and resource sharing.</p>
      
      <h2>Mobile Applications</h2>
      
      <h3>Habit Tracker | 2023</h3>
      <p>React Native application for building and maintaining positive habits. Features include 
      streak tracking, reminders, and social sharing. <strong>1,000+ downloads</strong></p>
      
      <h3>Expense Manager | 2022</h3>
      <p>Cross-platform mobile app for personal finance management with expense categorization, 
      budget tracking, and financial insights.</p>
    `,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'testimonials',
    title: 'Testimonials & Recommendations',
    content: `
      <h1>What Others Say</h1>
      
      <p>Here are some testimonials and recommendations from colleagues, clients, and collaborators who have worked with me.</p>
      
      <h2>Professional Recommendations</h2>
      
      <div style="border: 2px solid #8b4513; padding: 2rem; margin: 2rem 0; border-radius: 12px; background: rgba(139, 69, 19, 0.05);">
        <blockquote style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 1.5rem; font-style: italic;">
          "Mizan is an exceptional developer who combines technical expertise with outstanding communication skills. 
          His ability to lead complex projects while mentoring junior developers is remarkable. 
          I've seen him consistently deliver high-quality solutions that exceed expectations."
        </blockquote>
        <div style="text-align: right;">
          <strong style="color: #8b4513;">Sarah Johnson</strong><br>
          <em>Senior Engineering Manager, Tech Corp</em>
        </div>
      </div>
      
      <div style="border: 2px solid #8b4513; padding: 2rem; margin: 2rem 0; border-radius: 12px; background: rgba(139, 69, 19, 0.05);">
        <blockquote style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 1.5rem; font-style: italic;">
          "Working with Mizan was a game-changer for our startup. His technical knowledge, 
          problem-solving abilities, and dedication to quality helped us build a robust platform 
          that scaled from 0 to 100K users. I would hire him again in a heartbeat."
        </blockquote>
        <div style="text-align: right;">
          <strong style="color: #8b4513;">Michael Chen</strong><br>
          <em>CEO, StartupXYZ</em>
        </div>
      </div>
      
      <h2>Client Testimonials</h2>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
        <div style="border: 1px solid #8b4513; padding: 1.5rem; border-radius: 8px; background: rgba(139, 69, 19, 0.05);">
          <blockquote style="font-style: italic; margin-bottom: 1rem;">
            "Mizan delivered our e-commerce platform ahead of schedule and under budget. 
            His attention to detail and user experience focus resulted in a 40% increase in conversions."
          </blockquote>
          <div style="text-align: center;">
            <strong style="color: #8b4513;">Lisa Rodriguez</strong><br>
            <em>Marketing Director, RetailCo</em>
          </div>
        </div>
        
        <div style="border: 1px solid #8b4513; padding: 1.5rem; border-radius: 8px; background: rgba(139, 69, 19, 0.05);">
          <blockquote style="font-style: italic; margin-bottom: 1rem;">
            "The mobile app Mizan developed for us has been downloaded over 50,000 times. 
            His expertise in React Native and backend integration was invaluable."
          </blockquote>
          <div style="text-align: center;">
            <strong style="color: #8b4513;">David Kim</strong><br>
            <em>Product Manager, MobileFirst</em>
          </div>
        </div>
      </div>
      
      <h2>Community Recognition</h2>
      
      <div style="border: 2px solid #8b4513; padding: 2rem; margin: 2rem 0; border-radius: 12px; background: rgba(139, 69, 19, 0.05);">
        <blockquote style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 1.5rem; font-style: italic;">
          "Mizan has been an incredible mentor to our community. His willingness to share knowledge, 
          provide guidance, and support fellow developers has made a significant impact. 
          He truly embodies the spirit of giving back to the tech community."
        </blockquote>
        <div style="text-align: right;">
          <strong style="color: #8b4513;">Alex Thompson</strong><br>
          <em>Community Lead, DevMeetup</em>
        </div>
      </div>
      
      <h2>Academic References</h2>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
        <div style="border: 1px solid #8b4513; padding: 1.5rem; border-radius: 8px; background: rgba(139, 69, 19, 0.05);">
          <blockquote style="font-style: italic; margin-bottom: 1rem;">
            "Mizan's research contributions were outstanding. His thesis on machine learning applications 
            in web development was groundbreaking and has been cited in multiple academic papers."
          </blockquote>
          <div style="text-align: center;">
            <strong style="color: #8b4513;">Dr. Emily Watson</strong><br>
            <em>Professor, Computer Science Department</em>
          </div>
        </div>
        
        <div style="border: 1px solid #8b4513; padding: 1.5rem; border-radius: 8px; background: rgba(139, 69, 19, 0.05);">
          <blockquote style="font-style: italic; margin-bottom: 1rem;">
            "As a teaching assistant, Mizan demonstrated exceptional ability to explain complex concepts. 
            Students consistently rated his sessions as the most helpful and engaging."
          </blockquote>
          <div style="text-align: center;">
            <strong style="color: #8b4513;">Prof. James Wilson</strong><br>
            <em>Head of Software Engineering</em>
          </div>
        </div>
      </div>
      
      <h2>Industry Recognition</h2>
      
      <div style="background: linear-gradient(135deg, rgba(139, 69, 19, 0.1), rgba(139, 69, 19, 0.05)); padding: 2rem; border-radius: 12px; margin: 2rem 0;">
        <h3 style="color: #8b4513; text-align: center; margin-bottom: 1.5rem;">Featured in Industry Publications</h3>
        <ul style="text-align: center; list-style: none; padding: 0;">
          <li style="margin: 0.5rem 0;">"Rising Star in Web Development" - Tech Weekly Magazine</li>
          <li style="margin: 0.5rem 0;">"Top 10 Developers to Watch" - Developer Today</li>
          <li style="margin: 0.5rem 0;">"Innovation in Software Engineering" - Code Review Journal</li>
          <li style="margin: 0.5rem 0;">"Community Impact Award" - Local Tech Association</li>
        </ul>
      </div>
      
      <p style="text-align: center; font-style: italic; color: #8b4513; margin-top: 3rem;">
        "Excellence is not a destination; it is a continuous journey that never ends." — Brian Tracy
      </p>
    `,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'contact',
    title: 'Contact & Links',
    content: `
      <h1>Let's Connect</h1>
      
      <p>I'm always interested in new opportunities, collaborations, and meaningful conversations 
      about technology and innovation. Feel free to reach out through any of the channels below.</p>
      
      <h2>Professional Links</h2>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
        <div style="border: 1px solid #8b4513; padding: 1.5rem; border-radius: 8px; background: rgba(139, 69, 19, 0.05);">
          <h3>LinkedIn</h3>
          <p>Connect with me professionally and view my detailed work history.</p>
          <p style="color: #8b4513; font-weight: bold;">linkedin.com/in/mizan</p>
        </div>
        
        <div style="border: 1px solid #8b4513; padding: 1.5rem; border-radius: 8px; background: rgba(139, 69, 19, 0.05);">
          <h3>GitHub</h3>
          <p>Explore my open source contributions and personal projects.</p>
          <p style="color: #8b4513; font-weight: bold;">github.com/mizan</p>
        </div>
        
        <div style="border: 1px solid #8b4513; padding: 1.5rem; border-radius: 8px; background: rgba(139, 69, 19, 0.05);">
          <h3>Portfolio Website</h3>
          <p>Visit my interactive portfolio and project showcase.</p>
          <p style="color: #8b4513; font-weight: bold;">mizan.dev</p>
        </div>
        
        <div style="border: 1px solid #8b4513; padding: 1.5rem; border-radius: 8px; background: rgba(139, 69, 19, 0.05);">
          <h3>Email</h3>
          <p>Direct contact for business inquiries and collaborations.</p>
          <p style="color: #8b4513; font-weight: bold;">mizan@example.com</p>
        </div>
      </div>
      
      <h2>Social Media & Content Platforms</h2>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
        <div style="border: 1px solid #8b4513; padding: 1.5rem; border-radius: 8px; background: rgba(139, 69, 19, 0.05);">
          <h3>Twitter/X</h3>
          <p>Tech thoughts, industry insights, and real-time updates</p>
          <p style="color: #8b4513; font-weight: bold;">@mizan_tech</p>
          <p style="font-size: 0.9rem; color: #666;">2,500+ followers</p>
        </div>
        
        <div style="border: 1px solid #8b4513; padding: 1.5rem; border-radius: 8px; background: rgba(139, 69, 19, 0.05);">
          <h3>Medium</h3>
          <p>Technical articles, tutorials, and industry analysis</p>
          <p style="color: #8b4513; font-weight: bold;">@mizan-dev</p>
          <p style="font-size: 0.9rem; color: #666;">5,000+ followers</p>
        </div>
        
        <div style="border: 1px solid #8b4513; padding: 1.5rem; border-radius: 8px; background: rgba(139, 69, 19, 0.05);">
          <h3>Dev.to</h3>
          <p>Community engagement and learning resources</p>
          <p style="color: #8b4513; font-weight: bold;">@mizan</p>
          <p style="font-size: 0.9rem; color: #666;">1,200+ followers</p>
        </div>
        
        <div style="border: 1px solid #8b4513; padding: 1.5rem; border-radius: 8px; background: rgba(139, 69, 19, 0.05);">
          <h3>YouTube</h3>
          <p>Educational videos and tech tutorials</p>
          <p style="color: #8b4513; font-weight: bold;">Mizan Tech Channel</p>
          <p style="font-size: 0.9rem; color: #666;">5,000+ subscribers</p>
        </div>
        
        <div style="border: 1px solid #8b4513; padding: 1.5rem; border-radius: 8px; background: rgba(139, 69, 19, 0.05);">
          <h3>Instagram</h3>
          <p>Behind-the-scenes coding and tech lifestyle</p>
          <p style="color: #8b4513; font-weight: bold;">@mizan.codes</p>
          <p style="font-size: 0.9rem; color: #666;">800+ followers</p>
        </div>
        
        <div style="border: 1px solid #8b4513; padding: 1.5rem; border-radius: 8px; background: rgba(139, 69, 19, 0.05);">
          <h3>Discord</h3>
          <p>Tech community discussions and mentoring</p>
          <p style="color: #8b4513; font-weight: bold;">Mizan#1234</p>
          <p style="font-size: 0.9rem; color: #666;">Active in 5+ servers</p>
        </div>
      </div>
      
      <h2>Professional Networks</h2>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
        <div style="border: 1px solid #8b4513; padding: 1.5rem; border-radius: 8px; background: rgba(139, 69, 19, 0.05);">
          <h3>AngelList</h3>
          <p>Startup ecosystem and investment network</p>
          <p style="color: #8b4513; font-weight: bold;">angel.co/mizan</p>
        </div>
        
        <div style="border: 1px solid #8b4513; padding: 1.5rem; border-radius: 8px; background: rgba(139, 69, 19, 0.05);">
          <h3>Behance</h3>
          <p>Creative portfolio and design projects</p>
          <p style="color: #8b4513; font-weight: bold;">behance.net/mizan</p>
        </div>
        
        <div style="border: 1px solid #8b4513; padding: 1.5rem; border-radius: 8px; background: rgba(139, 69, 19, 0.05);">
          <h3>Dribbble</h3>
          <p>UI/UX design work and creative inspiration</p>
          <p style="color: #8b4513; font-weight: bold;">dribbble.com/mizan</p>
        </div>
        
        <div style="border: 1px solid #8b4513; padding: 1.5rem; border-radius: 8px; background: rgba(139, 69, 19, 0.05);">
          <h3>Product Hunt</h3>
          <p>Product launches and tech innovations</p>
          <p style="color: #8b4513; font-weight: bold;">producthunt.com/@mizan</p>
        </div>
      </div>
      
      <h2>Online Presence</h2>
      <ul>
        <li><strong>Personal Website:</strong> mizan.dev - Interactive portfolio and blog</li>
        <li><strong>Tech Blog:</strong> blog.mizan.dev - Weekly technical insights</li>
        <li><strong>Newsletter:</strong> newsletter.mizan.dev - Monthly tech digest (2,000+ subscribers)</li>
        <li><strong>Podcast:</strong> "Code & Coffee" - Weekly developer podcast (500+ listeners)</li>
        <li><strong>Twitch:</strong> twitch.tv/mizancodes - Live coding sessions</li>
        <li><strong>Reddit:</strong> u/mizan_dev - Tech discussions and AMAs</li>
      </ul>
      
      <blockquote>
        "The best way to predict the future is to create it." — Peter Drucker
      </blockquote>
      
      <p style="text-align: center; margin-top: 3rem; font-style: italic; color: #8b4513;">
        Thank you for taking the time to explore my portfolio. I look forward to connecting with you!
      </p>
    `,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center'
  }
];
