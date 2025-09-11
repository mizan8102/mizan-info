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
    title: 'Blog: Advanced JavaScript ES6+ Mastery Guide',
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
  },
  {
    id: 'blog-js-mastery-professional',
    title: 'Blog: JavaScript ES6+ Professional Mastery Guide',
    content: `
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; border-radius: 12px; margin-bottom: 2rem;">
        <h1 style="color: white; margin-bottom: 1rem;">🚀 JavaScript ES6+ Professional Mastery Guide</h1>
        <p style="color: rgba(255,255,255,0.9);"><strong>Complete Interview Preparation + Tutorial + Practice Projects</strong></p>
        <p style="color: rgba(255,255,255,0.8);">Comprehensive bilingual guide for mastering modern JavaScript concepts</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1.5rem;">
          <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 8px;">
            <strong>🎯 English:</strong> Professional explanations, interview questions, real-world examples
          </div>
          <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 8px;">
            <strong>🇧🇩 বাংলা:</strong> সহজ ব্যাখ্যা, প্র্যাকটিক্যাল উদাহরণ, ইন্টারভিউ টিপস
          </div>
        </div>
      </div>

      <!-- Table of Contents -->
      <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
        <h3>📚 Table of Contents</h3>
        <ol style="columns: 2; column-gap: 2rem;">
          <li><a href="#promises">Promises & Async Programming</a></li>
          <li><a href="#async-await">Async/Await Mastery</a></li>
          <li><a href="#closures">Closures & Scope</a></li>
          <li><a href="#error-handling">Error Handling Strategies</a></li>
          <li><a href="#advanced-patterns">Advanced Patterns</a></li>
          <li><a href="#real-world-projects">Real-World Projects</a></li>
        </ol>
      </div>

      <!-- Section 1: Promises -->
      <div id="promises" style="margin-bottom: 3rem;">
        <h2 style="background: linear-gradient(45deg, #FF6B6B, #4ECDC4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 2rem;">🔮 1. Promises & Asynchronous Programming</h2>
        
        <div style="background: #e3f2fd; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #2196f3; margin: 1rem 0;">
          <h3>🤔 Why Do We Need Promises?</h3>
          <p><strong>English:</strong> JavaScript is single-threaded, but we need to handle time-consuming operations (API calls, file operations, timers) without blocking the main thread. Promises solve the "callback hell" problem and provide better error handling.</p>
          <p><strong>বাংলা:</strong> জাভাস্ক্রিপ্ট একটি single-threaded ভাষা, কিন্তু আমাদের সময়সাপেক্ষ কাজগুলো (API কল, ফাইল অপারেশন) করতে হয় main thread ব্লক না করে। Promise "callback hell" সমস্যার সমাধান করে।</p>
        </div>

        <h3>📋 Interview Questions & Answers</h3>
        
        <div style="border: 1px solid #ddd; border-radius: 8px; padding: 1rem; margin: 1rem 0;">
          <h4>Q1: What is a Promise and what are its states?</h4>
          <p><strong>Answer:</strong></p>
          <ul>
            <li><strong>English:</strong> A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: Pending (initial), Fulfilled (resolved), Rejected (failed).</li>
            <li><strong>বাংলা:</strong> Promise হলো একটি object যা asynchronous কাজের ভবিষ্যতের ফলাফল প্রতিনিধিত্ব করে। এর তিনটি অবস্থা: Pending (শুরুর অবস্থা), Fulfilled (সফল), Rejected (ব্যর্থ)।</li>
          </ul>
        </div>

        <pre><code class="language-js">// Basic Promise Creation and Usage
const fetchUserData = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;
  
  setTimeout(() => {
    if (success) {
      resolve({
        id: 1,
        name: 'John Doe',
        email: 'john@example.com'
      });
    } else {
      reject(new Error('Failed to fetch user data'));
    }
  }, 2000);
});

// Using the Promise
fetchUserData
  .then(user => {
    console.log('✅ User fetched:', user);
    return user.id; // Return for chaining
  })
  .then(userId => {
    console.log('👤 Processing user ID:', userId);
  })
  .catch(error => {
    console.error('❌ Error:', error.message);
  })
  .finally(() => {
    console.log('🏁 Cleanup operations');
  });
</code></pre>

        <div style="border: 1px solid #ddd; border-radius: 8px; padding: 1rem; margin: 1rem 0;">
          <h4>Q2: Explain Promise.all(), Promise.race(), Promise.allSettled(), and Promise.any()</h4>
          <p><strong>English:</strong> These are utility methods for handling multiple promises with different behaviors.</p>
          <p><strong>বাংলা:</strong> এগুলো একাধিক promise একসাথে handle করার জন্য বিভিন্ন utility method।</p>
        </div>

        <pre><code class="language-js">// Promise Utility Methods Comparison
const fastAPI = () => Promise.resolve('Fast API Response');
const slowAPI = () => new Promise(resolve => setTimeout(() => resolve('Slow API Response'), 3000));
const failingAPI = () => Promise.reject(new Error('API Failed'));

// 1. Promise.all() - Wait for all, fail if any fails
// সব Promise সফল হলেই result, একটা fail হলেই error
Promise.all([fastAPI(), slowAPI()])
  .then(results => console.log('All succeeded:', results))
  .catch(error => console.log('One failed:', error));

// 2. Promise.race() - First to settle (resolve or reject)
// যেটা আগে complete হবে সেটার result
Promise.race([fastAPI(), slowAPI()])
  .then(result => console.log('First to finish:', result));

// 3. Promise.allSettled() - Wait for all, get all results
// সব Promise complete হওয়ার জন্য অপেক্ষা, সব result পাবো
Promise.allSettled([fastAPI(), failingAPI()])
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(\`Promise \${index} succeeded:\`, result.value);
      } else {
        console.log(\`Promise \${index} failed:\`, result.reason);
      }
    });
  });
</code></pre>

        <div style="background: #fff3cd; padding: 1rem; border-radius: 8px; border-left: 4px solid #ffc107; margin: 1rem 0;">
          <h4>💡 Pro Tips</h4>
          <ul>
            <li><strong>English:</strong> Always handle errors with .catch() or try/catch. Use Promise.allSettled() when you need results from all promises regardless of failures.</li>
            <li><strong>বাংলা:</strong> সবসময় .catch() বা try/catch দিয়ে error handle করুন। সব promise এর result চাইলে Promise.allSettled() ব্যবহার করুন।</li>
          </ul>
        </div>
      </div>

      <!-- Section 2: Async/Await -->
      <div id="async-await" style="margin-bottom: 3rem;">
        <h2 style="background: linear-gradient(45deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 2rem;">⚡ 2. Async/Await Mastery</h2>
        
        <div style="background: #e8f5e8; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #4caf50; margin: 1rem 0;">
          <h3>🤔 Why Use Async/Await?</h3>
          <p><strong>English:</strong> Async/await makes asynchronous code look and behave like synchronous code, eliminating callback hell and making error handling more intuitive with try/catch blocks.</p>
          <p><strong>বাংলা:</strong> Async/await asynchronous code কে synchronous code এর মতো দেখতে ও কাজ করতে সাহায্য করে। এটি callback hell দূর করে এবং error handling সহজ করে।</p>
        </div>

        <div style="border: 1px solid #ddd; border-radius: 8px; padding: 1rem; margin: 1rem 0;">
          <h4>Q3: How does async/await work internally?</h4>
          <p><strong>Answer:</strong></p>
          <ul>
            <li><strong>English:</strong> Async functions always return a Promise. The await keyword pauses function execution until the Promise resolves, then returns the resolved value.</li>
            <li><strong>বাংলা:</strong> Async function সবসময় Promise return করে। await keyword function execution থামিয়ে রাখে Promise resolve না হওয়া পর্যন্ত।</li>
          </ul>
        </div>

        <pre><code class="language-js">// Comparison: Promise chains vs Async/Await
// Traditional Promise Chain (Callback Hell Alternative)
function fetchUserProfile() {
  return fetch('/api/user/1')
    .then(response => response.json())
    .then(user => {
      return fetch(\`/api/user/\${user.id}/posts\`);
    })
    .then(response => response.json())
    .then(posts => {
      return fetch(\`/api/user/\${posts[0].authorId}/profile\`);
    })
    .then(response => response.json())
    .catch(error => {
      console.error('Chain error:', error);
      throw error;
    });
}

// Modern Async/Await Approach
async function fetchUserProfileAsync() {
  try {
    // Sequential execution (one after another)
    const userResponse = await fetch('/api/user/1');
    const user = await userResponse.json();
    
    const postsResponse = await fetch(\`/api/user/\${user.id}/posts\`);
    const posts = await postsResponse.json();
    
    const profileResponse = await fetch(\`/api/user/\${posts[0].authorId}/profile\`);
    const profile = await profileResponse.json();
    
    return profile;
  } catch (error) {
    console.error('Async error:', error);
    throw error; // Re-throw for caller to handle
  }
}

// Parallel execution for independent operations
async function fetchMultipleDataParallel() {
  try {
    // All requests start simultaneously
    const [userResponse, postsResponse, settingsResponse] = await Promise.all([
      fetch('/api/user/1'),
      fetch('/api/posts'),
      fetch('/api/settings')
    ]);
    
    // Parse responses in parallel
    const [user, posts, settings] = await Promise.all([
      userResponse.json(),
      postsResponse.json(),
      settingsResponse.json()
    ]);
    
    return { user, posts, settings };
  } catch (error) {
    console.error('Parallel fetch error:', error);
    throw error;
  }
}
</code></pre>

        <div style="background: #fff3cd; padding: 1rem; border-radius: 8px; border-left: 4px solid #ffc107; margin: 1rem 0;">
          <h4>💡 Advanced Async/Await Patterns</h4>
          <ul>
            <li><strong>English:</strong> Use Promise.all() for parallel operations, async/await for sequential operations that depend on each other.</li>
            <li><strong>বাংলা:</strong> Parallel operations এর জন্য Promise.all(), sequential dependent operations এর জন্য async/await ব্যবহার করুন।</li>
          </ul>
        </div>
      </div>

      <!-- Section 3: Closures -->
      <div id="closures" style="margin-bottom: 3rem;">
        <h2 style="background: linear-gradient(45deg, #ff9a9e, #fecfef); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 2rem;">🔒 3. Closures & Lexical Scope</h2>
        
        <div style="background: #fce4ec; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #e91e63; margin: 1rem 0;">
          <h3>🤔 Why Are Closures Important?</h3>
          <p><strong>English:</strong> Closures enable data privacy, function factories, callbacks, and are fundamental to many JavaScript patterns including modules, currying, and event handlers.</p>
          <p><strong>বাংলা:</strong> Closure data privacy, function factory, callback এবং JavaScript এর অনেক pattern (module, currying, event handler) এর ভিত্তি।</p>
        </div>

        <div style="border: 1px solid #ddd; border-radius: 8px; padding: 1rem; margin: 1rem 0;">
          <h4>Q5: What is a closure and how does it work?</h4>
          <p><strong>Answer:</strong></p>
          <ul>
            <li><strong>English:</strong> A closure is a function that has access to variables from its outer (enclosing) scope even after the outer function has returned. It "closes over" these variables.</li>
            <li><strong>বাংলা:</strong> Closure হলো এমন function যা তার outer scope এর variable গুলো access করতে পারে outer function return হওয়ার পরেও।</li>
          </ul>
        </div>

        <pre><code class="language-js">// Understanding Closures with Practical Examples
// Example 1: Basic Closure - Counter Function
function createCounter(initialValue = 0) {
  let count = initialValue; // Private variable
  
  // Return object with methods that have access to 'count'
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getValue() {
      return count;
    },
    reset() {
      count = initialValue;
      return count;
    }
  };
}

const counter1 = createCounter(10);
const counter2 = createCounter(100);

console.log(counter1.increment()); // 11
console.log(counter1.increment()); // 12
console.log(counter2.increment()); // 101

// Each counter maintains its own 'count' variable
console.log(counter1.getValue()); // 12
console.log(counter2.getValue()); // 101

// Example 2: Function Factory with Closures
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier; // 'multiplier' is captured in closure
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const tenTimes = createMultiplier(10);

console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(tenTimes(5)); // 50
</code></pre>

        <div style="border: 1px solid #ddd; border-radius: 8px; padding: 1rem; margin: 1rem 0;">
          <h4>Q6: Common Closure Pitfalls - Loop with setTimeout</h4>
          <p><strong>Problem & Solution:</strong></p>
        </div>

        <pre><code class="language-js">// Common Closure Problem in Loops
console.log('=== Problem: Loop with setTimeout ===');

// ❌ PROBLEM: All timeouts will log "3"
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log('Problem:', i); // Will log 3, 3, 3
  }, 1000);
}

// ✅ SOLUTION 1: Use let instead of var (Block Scope)
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log('Solution 1 (let):', i); // Will log 0, 1, 2
  }, 1500);
}

// ✅ SOLUTION 2: Use IIFE (Immediately Invoked Function Expression)
for (var i = 0; i < 3; i++) {
  (function(index) {
    setTimeout(function() {
      console.log('Solution 2 (IIFE):', index); // Will log 0, 1, 2
    }, 2000);
  })(i);
}
</code></pre>
      </div>

      <!-- Section 4: Error Handling -->
      <div id="error-handling" style="margin-bottom: 3rem;">
        <h2 style="background: linear-gradient(45deg, #fa709a, #fee140); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 2rem;">🛡️ 4. Advanced Error Handling Strategies</h2>
        
        <div style="background: #ffebee; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #f44336; margin: 1rem 0;">
          <h3>🤔 Why Is Error Handling Critical?</h3>
          <p><strong>English:</strong> Proper error handling prevents application crashes, provides better user experience, enables debugging, and maintains application stability in production.</p>
          <p><strong>বাংলা:</strong> সঠিক error handling application crash প্রতিরোধ করে, user experience ভালো রাখে, debugging সহজ করে এবং production এ stability বজায় রাখে।</p>
        </div>

        <div style="border: 1px solid #ddd; border-radius: 8px; padding: 1rem; margin: 1rem 0;">
          <h4>Q7: Different types of errors in JavaScript and how to handle them?</h4>
          <p><strong>Answer:</strong></p>
          <ul>
            <li><strong>English:</strong> Syntax errors (compile-time), Runtime errors (TypeError, ReferenceError), Logic errors, Async errors (Promise rejections).</li>
            <li><strong>বাংলা:</strong> Syntax error (compile-time), Runtime error (TypeError, ReferenceError), Logic error, Async error (Promise rejection)।</li>
          </ul>
        </div>

        <pre><code class="language-js">// Comprehensive Error Handling Examples
// 1. Basic Try-Catch with Different Error Types
function demonstrateErrorTypes() {
  // TypeError Example
  try {
    null.someMethod(); // TypeError: Cannot read property 'someMethod' of null
  } catch (error) {
    if (error instanceof TypeError) {
      console.error('Type Error caught:', error.message);
    }
  }
  
  // ReferenceError Example
  try {
    console.log(undefinedVariable); // ReferenceError: undefinedVariable is not defined
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.error('Reference Error caught:', error.message);
    }
  }
  
  // Custom Error Example
  try {
    throw new Error('Custom error message');
  } catch (error) {
    console.error('Custom Error caught:', error.message);
  }
}

// 2. Async Error Handling with Retry Logic
class APIService {
  static async fetchWithRetry(url, maxRetries = 3, delay = 1000) {
    let lastError;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(\`Attempt \${attempt} for \${url}\`);
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
        }
        
        const data = await response.json();
        console.log(\`✅ Success on attempt \${attempt}\`);
        return data;
        
      } catch (error) {
        lastError = error;
        console.error(\`❌ Attempt \${attempt} failed:\`, error.message);
        
        // Don't wait after the last attempt
        if (attempt < maxRetries) {
          console.log(\`⏳ Waiting \${delay}ms before retry...\`);
          await new Promise(resolve => setTimeout(resolve, delay));
          delay *= 2; // Exponential backoff
        }
      }
    }
    
    throw new Error(\`All \${maxRetries} attempts failed. Last error: \${lastError.message}\`);
  }
}
</code></pre>

        <div style="background: #fff3cd; padding: 1rem; border-radius: 8px; border-left: 4px solid #ffc107; margin: 1rem 0;">
          <h4>💡 Error Handling Best Practices</h4>
          <ul>
            <li><strong>English:</strong> Always handle Promise rejections, use specific error types, log errors for debugging, provide fallback values, implement retry mechanisms for network calls.</li>
            <li><strong>বাংলা:</strong> Promise rejection সবসময় handle করুন, specific error type ব্যবহার করুন, debugging এর জন্য error log করুন, fallback value দিন, network call এর জন্য retry mechanism implement করুন।</li>
          </ul>
        </div>
      </div>

      <!-- Section 5: Real-World Projects -->
      <div id="real-world-projects" style="margin-bottom: 3rem;">
        <h2 style="background: linear-gradient(45deg, #a8edea, #fed6e3); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 2rem;">🚀 5. Real-World Practice Projects</h2>
        
        <div style="background: #e1f5fe; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #03a9f4; margin: 1rem 0;">
          <h3>🎯 Project-Based Learning</h3>
          <p><strong>English:</strong> Apply all concepts together in practical projects that simulate real-world scenarios.</p>
          <p><strong>বাংলা:</strong> সব concept একসাথে apply করে real-world scenario অনুসরণ করে practical project তৈরি করুন।</p>
        </div>

        <h3>📱 Project 1: Advanced Weather Dashboard</h3>
        <pre><code class="language-js">// Weather Dashboard with all concepts combined
class WeatherDashboard {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.cache = new Map();
    this.subscribers = [];
    
    // Setup error handling
    this.setupErrorHandling();
  }
  
  // Closure for private cache management
  createCacheManager() {
    const cache = new Map();
    const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
    
    return {
      get(key) {
        const item = cache.get(key);
        if (item && Date.now() - item.timestamp < CACHE_DURATION) {
          return item.data;
        }
        cache.delete(key);
        return null;
      },
      
      set(key, data) {
        cache.set(key, { data, timestamp: Date.now() });
      },
      
      clear() {
        cache.clear();
      }
    };
  }
  
  // Promise-based API with retry logic
  async fetchWeatherData(city, retries = 3) {
    const cacheKey = \`weather-\${city.toLowerCase()}\`;
    
    // Check cache first
    const cached = this.cacheManager.get(cacheKey);
    if (cached) {
      console.log('📦 Returning cached data for', city);
      return cached;
    }
    
    let lastError;
    
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        console.log(\`🌐 Fetching weather for \${city} (attempt \${attempt})\`);
        
        const response = await fetch(
          \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${this.apiKey}&units=metric\`
        );
        
        if (!response.ok) {
          throw new Error(\`Weather API error: \${response.status}\`);
        }
        
        const data = await response.json();
        
        // Cache the result
        this.cacheManager.set(cacheKey, data);
        
        // Notify subscribers
        this.notifySubscribers('weather-updated', { city, data });
        
        return data;
        
      } catch (error) {
        lastError = error;
        console.error(\`Attempt \${attempt} failed:\`, error.message);
        
        if (attempt < retries) {
          await this.delay(1000 * attempt); // Exponential backoff
        }
      }
    }
    
    throw new Error(\`Failed to fetch weather after \${retries} attempts: \${lastError.message}\`);
  }
  
  // Observer pattern using closures
  subscribe(event, callback) {
    this.subscribers.push({ event, callback });
    
    // Return unsubscribe function (closure)
    return () => {
      const index = this.subscribers.findIndex(sub => 
        sub.event === event && sub.callback === callback
      );
      if (index !== -1) {
        this.subscribers.splice(index, 1);
      }
    };
  }
  
  notifySubscribers(event, data) {
    this.subscribers
      .filter(sub => sub.event === event)
      .forEach(sub => {
        try {
          sub.callback(data);
        } catch (error) {
          console.error('Subscriber callback error:', error);
        }
      });
  }
  
  // Error handling setup
  setupErrorHandling() {
    this.cacheManager = this.createCacheManager();
    
    // Global error handler for this instance
    this.handleError = (error, context) => {
      console.error(\`WeatherDashboard Error [\${context}]:\`, error);
      this.notifySubscribers('error', { error, context });
    };
  }
  
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
</code></pre>
      </div>

      <!-- Study Plan -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; border-radius: 12px; margin: 2rem 0;">
        <h2 style="color: white;">📅 7-Day Mastery Plan</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1rem;">
          <div>
            <h4>Days 1-2: Promises Foundation</h4>
            <ul style="color: rgba(255,255,255,0.9);">
              <li>Promise creation and states</li>
              <li>Promise.all, race, allSettled</li>
              <li>Chaining and error handling</li>
            </ul>
          </div>
          <div>
            <h4>Days 3-4: Async/Await Mastery</h4>
            <ul style="color: rgba(255,255,255,0.9);">
              <li>Sequential vs parallel execution</li>
              <li>Error handling patterns</li>
              <li>Performance optimization</li>
            </ul>
          </div>
          <div>
            <h4>Day 5: Closures Deep Dive</h4>
            <ul style="color: rgba(255,255,255,0.9);">
              <li>Lexical scope understanding</li>
              <li>Module patterns</li>
              <li>Common pitfalls and solutions</li>
            </ul>
          </div>
          <div>
            <h4>Days 6-7: Integration Projects</h4>
            <ul style="color: rgba(255,255,255,0.9);">
              <li>Weather Dashboard project</li>
              <li>Task Queue system</li>
              <li>Interview preparation</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Interview Preparation -->
      <div style="background: #fff8e1; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #ff9800; margin: 1rem 0;">
        <h3>🎯 Interview Preparation Checklist</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div>
            <h4>Technical Questions</h4>
            <ul>
              <li>✅ Explain Promise states and lifecycle</li>
              <li>✅ Compare callback vs Promise vs async/await</li>
              <li>✅ Demonstrate closure with examples</li>
              <li>✅ Handle errors in async operations</li>
              <li>✅ Optimize parallel vs sequential execution</li>
            </ul>
          </div>
          <div>
            <h4>Coding Challenges</h4>
            <ul>
              <li>✅ Implement Promise.all from scratch</li>
              <li>✅ Create retry mechanism with exponential backoff</li>
              <li>✅ Build module pattern with closures</li>
              <li>✅ Fix common closure pitfalls</li>
              <li>✅ Design error handling strategy</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    image: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'technical-blog-react',
    title: 'Blog: Advanced React Patterns',
    content: `
      <h1>Advanced React Patterns & Best Practices</h1>
      <p><strong>A deep dive into modern React development patterns for scalable applications</strong></p>

      <h2>🏗️ Component Architecture Patterns</h2>
      
      <h3>1. Compound Components</h3>
      <p><em>Perfect for flexible, reusable UI components</em></p>
      <pre><code class="language-jsx">function Tabs({ children, defaultTab }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  return (
    <div className="tabs">
      {React.Children.map(children, child =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
}

Tabs.TabList = ({ children, activeTab, setActiveTab }) => (
  <div className="tab-list">
    {React.Children.map(children, (child, index) =>
      React.cloneElement(child, { 
        isActive: activeTab === index,
        onClick: () => setActiveTab(index)
      })
    )}
  </div>
);

// Usage
<Tabs defaultTab={0}>
  <Tabs.TabList>
    <Tabs.Tab>Profile</Tabs.Tab>
    <Tabs.Tab>Settings</Tabs.Tab>
  </Tabs.TabList>
  <Tabs.Panels>
    <Tabs.Panel>Profile Content</Tabs.Panel>
    <Tabs.Panel>Settings Content</Tabs.Panel>
  </Tabs.Panels>
</Tabs>
      </code></pre>

      <h3>2. Custom Hooks for Logic Reuse</h3>
      <pre><code class="language-jsx">function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  return [storedValue, setValue];
}

// Usage in component
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current theme: {theme}
    </button>
  );
}
      </code></pre>

      <h2>⚡ Performance Optimization Techniques</h2>

      <h3>React.memo & useMemo</h3>
      <pre><code class="language-jsx">const ExpensiveComponent = React.memo(({ data, filter }) => {
  const filteredData = useMemo(() => 
    data.filter(item => item.name.includes(filter)),
    [data, filter]
  );
  
  return (
    <div>
      {filteredData.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
});
      </code></pre>

      <p><strong>🎯 Key Takeaways:</strong></p>
      <ul>
        <li>Use compound components for flexible, reusable UI patterns</li>
        <li>Leverage custom hooks to extract and reuse stateful logic</li>
        <li>Optimize performance with React.memo, useMemo, and useCallback</li>
        <li>Choose useReducer for complex state management scenarios</li>
        <li>Write comprehensive tests for components and custom hooks</li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'project-showcase-detailed',
    title: 'Featured Project: E-Commerce Platform',
    content: `
      <h1>🛒 Full-Stack E-Commerce Platform</h1>
      <p><strong>A comprehensive e-commerce solution built with modern web technologies</strong></p>

      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; border-radius: 12px; margin: 2rem 0;">
        <h2 style="color: white; margin-bottom: 1rem;">Project Overview</h2>
        <p><strong>Duration:</strong> 6 months (2023)</p>
        <p><strong>Team Size:</strong> 4 developers</p>
        <p><strong>My Role:</strong> Full-Stack Developer & Technical Lead</p>
        <p><strong>Status:</strong> Production-ready, serving 10K+ users</p>
      </div>

      <h2>🎯 Key Features Implemented</h2>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
        <div>
          <h3>🛍️ Customer Features</h3>
          <ul>
            <li>Product catalog with advanced filtering</li>
            <li>Shopping cart with real-time updates</li>
            <li>Secure checkout with multiple payment options</li>
            <li>User authentication and profiles</li>
            <li>Order tracking and history</li>
            <li>Wishlist and product reviews</li>
            <li>Responsive design for all devices</li>
          </ul>
        </div>
        
        <div>
          <h3>⚙️ Admin Features</h3>
          <ul>
            <li>Product management dashboard</li>
            <li>Inventory tracking and alerts</li>
            <li>Order management system</li>
            <li>Customer support tools</li>
            <li>Analytics and reporting</li>
            <li>Content management system</li>
            <li>Role-based access control</li>
          </ul>
        </div>
      </div>

      <h2>🏗️ Technical Architecture</h2>
      
      <h3>Frontend Stack</h3>
      <div style="border-left: 4px solid #61dafb; padding-left: 1rem; margin: 1rem 0;">
        <p><strong>React 18</strong> with TypeScript for type safety</p>
        <p><strong>Next.js 13</strong> for SSR and performance optimization</p>
        <p><strong>Tailwind CSS</strong> for responsive styling</p>
        <p><strong>Redux Toolkit</strong> for state management</p>
        <p><strong>React Query</strong> for server state and caching</p>
      </div>

      <h2>💡 Technical Challenges & Solutions</h2>

      <h3>Challenge 1: Real-time Inventory Management</h3>
      <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
        <p><strong>Problem:</strong> Preventing overselling when multiple users purchase the same item simultaneously.</p>
        <p><strong>Solution:</strong> Implemented optimistic locking with database transactions and real-time inventory updates using WebSockets.</p>
        
        <pre><code class="language-javascript">// Inventory update with optimistic locking
async function updateInventory(productId, quantity) {
  const result = await db.product.updateMany({
    where: { 
      id: productId, 
      stock: { gte: quantity },
      version: currentVersion 
    },
    data: { 
      stock: { decrement: quantity },
      version: { increment: 1 }
    }
  });
  
  if (result.count === 0) {
    throw new Error('Insufficient stock or concurrent update');
  }
  
  // Broadcast inventory update
  websocket.broadcast('inventory-update', { productId, newStock });
}
        </code></pre>
      </div>

      <h2>📊 Performance Metrics & Results</h2>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; margin: 2rem 0;">
        <div style="text-align: center; padding: 1rem; border: 1px solid #dee2e6; border-radius: 8px;">
          <h4>🚀 Performance</h4>
          <p style="font-size: 2rem; font-weight: bold; color: #28a745;">1.8s</p>
          <p>Initial Load Time</p>
        </div>
        
        <div style="text-align: center; padding: 1rem; border: 1px solid #dee2e6; border-radius: 8px;">
          <h4>👥 Users</h4>
          <p style="font-size: 2rem; font-weight: bold; color: #007bff;">10K+</p>
          <p>Active Users</p>
        </div>
        
        <div style="text-align: center; padding: 1rem; border: 1rem; border: 1px solid #dee2e6; border-radius: 8px;">
          <h4>💰 Conversion</h4>
          <p style="font-size: 2rem; font-weight: bold; color: #ffc107;">3.2%</p>
          <p>Conversion Rate</p>
        </div>
      </div>

      <blockquote style="border-left: 4px solid #6c757d; padding-left: 1rem; font-style: italic; color: #6c757d; margin: 2rem 0;">
        "This project taught me the importance of scalable architecture and the value of thorough planning in complex applications."
      </blockquote>
    `,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center'
  }
];
