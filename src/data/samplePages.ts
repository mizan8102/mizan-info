import { BookPage } from '../hooks/useBookPagination';

export const samplePages: BookPage[] = [
  {
    id: 'page-1',
    title: 'The Village Times',
    content: `
     <div class="newspaper-header">
  <h1 class="newspaper-title">The Village Times</h1>
  <p class="newspaper-subtitle">ESTABLISHED 1852 • SERVING THE COMMUNITY</p>
  <p class="newspaper-date">SUNDAY, NOVEMBER 20TH, 1964 • ISSUE N° 73 • PRICE 5 CENTS</p>
</div>

<h1>THE MYSTERIES OF INDIA</h1>
<div class="article-meta">By Our Special Correspondent • 3 minutes read</div>

<!-- Image for Taj Mahal -->
<img src="https://images.unsplash.com/photo-1601758123927-0a8d55f4f64b?crop=entropy&cs=tinysrgb&fit=max&w=800" alt="Taj Mahal" style="width:100%; max-width:600px; margin:10px 0; display:block;">

<p><span class="drop-cap">I</span>n the heart of the subcontinent lies a land of ancient wonders and timeless mysteries. The Taj Mahal, that magnificent marble mausoleum, stands as a testament to eternal love and architectural brilliance. Built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this UNESCO World Heritage Site continues to captivate visitors from around the globe.</p>

<p>The monument's perfect symmetry and intricate craftsmanship represent the pinnacle of Mughal architecture. Its white marble facade changes color throughout the day, from soft pink at dawn to brilliant white at noon, and golden at sunset. The reflecting pool creates a stunning mirror effect, doubling the monument's beauty.</p>

<h2>PROPOSED LOCOMOTIVE LINE EXPANSION</h2>
<div class="article-meta">Transportation News • 2 minutes read</div>

<!-- Image for Train / Railway -->
<img src="https://images.unsplash.com/photo-1509228627158-1f8a02116d99?crop=entropy&cs=tinysrgb&fit=max&w=800" alt="Train" style="width:100%; max-width:600px; margin:10px 0; display:block;">

<p><span class="drop-cap">T</span>he village council has announced plans for a major expansion of the local railway network. The proposed line will connect our community with three neighboring towns, promising improved trade and travel opportunities for all residents.</p>

<p>Mayor Johnson stated, "This expansion represents a significant investment in our community's future. We expect construction to begin next spring and be completed within two years."</p>

<blockquote>
  "The railway will bring prosperity and opportunity to our village, connecting us with the wider world while preserving our small-town charm."
</blockquote>

<h3>VILLAGE FETE ON WEDNESDAY</h3>
<div class="article-meta">Community Events • 1 minute read</div>

<!-- Image for Village Fete -->
<img src="https://treasuretripin.com/wp-content/uploads/2023/12/SECRETS-TO-EXPERIENCE-IN-TAJ-MAHAL.png" alt="Village Fete" style="width:100%; max-width:600px; margin:10px 0; display:block;">

<p><span class="drop-cap">T</span>his Wednesday, the annual Village Fete will take place in the town square. The event promises entertainment for all ages, including:</p>

<ul>
  <li>Traditional folk music and dancing</li>
  <li>Local crafts and produce stalls</li>
  <li>Children's games and activities</li>
  <li>Homemade cakes and refreshments</li>
</ul>

<p>The fete begins at 2:00 PM and continues until 8:00 PM. All proceeds will go toward the village school fund.</p>

<div class="advertisement">
  <h4>FARMER'S MARKET</h4>
  
  <!-- Image for Farmer's Market -->
  <img src="https://images.unsplash.com/photo-1592928300291-77eb4f7f6f1b?crop=entropy&cs=tinysrgb&fit=max&w=600" alt="Farmer's Market" style="width:100%; max-width:400px; margin:10px 0; display:block;">
  
  <p>Fresh Fruits & Vegetables</p>
  <p>Radish - $0.25 | Tomato - $0.50</p>
  <p>Lettuce - $0.30 | Cabbage - $0.40</p>
  <p>Pumpkin - $1.00 | Corn - $0.35</p>
  <p><strong>BLOCK B, CENTRE LANE</strong></p>
</div>

    `,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'page-2',
    title: 'Local News & Events',
    content: `
      <h1>MAYOR'S ADDRESS TO THE COMMUNITY</h1>
      <div class="article-meta">Government News • 4 minutes read</div>
      
      <p><span class="drop-cap">L</span>ast evening, Mayor Johnson delivered his annual address to the community at the Town Hall. Speaking before a packed audience of concerned citizens, the mayor outlined his vision for the coming year and addressed several pressing issues facing our village.</p>
      
      <p>"We stand at a crossroads," declared the mayor, "where tradition meets progress. Our challenge is to embrace the future while preserving the values that have made our community strong for over a century."</p>
      
      <h2>CRAS NON IPSUM - A NEW BEGINNING</h2>
      <div class="article-meta">Editorial • 2 minutes read</div>
      
      <p><span class="drop-cap">A</span>s we look toward the future, we must remember that change is not the enemy of tradition, but rather its natural evolution. The challenges we face today are not unlike those our forefathers encountered when they first settled this land.</p>
      
      <p>The key to our success lies in our ability to adapt while maintaining the core values that define us as a community. We must be willing to embrace new ideas while holding fast to the principles that have served us well.</p>
      
      <h3>CORN HARVEST BEGINNING</h3>
      <div class="article-meta">Agricultural News • 1 minute read</div>
      
      <p><span class="drop-cap">T</span>he annual corn harvest has begun across the county, with farmers reporting excellent yields despite the challenging weather conditions earlier in the season. Local agricultural experts attribute the success to improved farming techniques and favorable late-summer weather.</p>
      
      <p>Farmers are optimistic about this year's harvest, with early estimates suggesting a 15% increase over last year's production. The harvest is expected to continue for the next three weeks.</p>
      
      <div class="advertisement">
        <h4>NEIGHBORHOOD PUB</h4>
        <p>EST. 1996</p>
        <p>Draft Beer - $0.75</p>
        <p>Bottled Domestics - $0.85</p>
        <p>Bottled Imports - $1.25</p>
        <p>Wine - $1.50</p>
        <p>Cocktails - $2.00</p>
        <p><strong>2174 CENTRE STREET</strong></p>
      </div>
      
      <h3>DUIS LATET NUNC - HIDDEN TRUTHS</h3>
      <div class="article-meta">Opinion • 3 minutes read</div>
      
      <p><span class="drop-cap">S</span>ometimes the most important stories are not the ones that make headlines, but those that unfold quietly in the background of our daily lives. These hidden narratives shape our community in ways we may not immediately recognize.</p>
      
      <blockquote>
        "The true measure of a community is not in its grand achievements, but in the small acts of kindness and cooperation that happen every day."
      </blockquote>
      
      <p>As we continue to grow and evolve, let us not forget the simple values that have brought us this far. The strength of our community lies not in any single individual, but in our collective commitment to one another.</p>
    `,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'page-3',
    title: 'Classifieds & Advertisements',
    content: `
      <h1>24 HOUR ROADSIDE DINER</h1>
      <div class="article-meta">Advertisement • Since 1802</div>
      
      <div class="advertisement">
        <h4>PANCAKE BREAKFAST SPECIAL $2.49</h4>
        <p>Fresh pancakes served with real maple syrup</p>
        <p>Available 6 AM - 11 AM daily</p>
      </div>
      
      <h2>DAILY BREAKFAST MENU</h2>
      <div class="article-meta">Restaurant Specials • All Day Service</div>
      
      <p><span class="drop-cap">O</span>ur diner has been serving the community for over 160 years, providing hearty meals and warm hospitality to travelers and locals alike. Our commitment to quality and tradition has made us a beloved institution in the area.</p>
      
      <ul>
        <li>Bacon - $1.25</li>
        <li>Ham - $1.50</li>
        <li>Eggs (any style) - $0.75</li>
        <li>Pan Fries - $0.95</li>
        <li>French Fries - $0.85</li>
        <li>Toast - $0.50</li>
        <li>Coffee - $0.35</li>
        <li>Tea - $0.30</li>
        <li>Orange Juice - $0.65</li>
        <li>Apple Juice - $0.60</li>
        <li>Soda Pop - $0.45</li>
        <li>Milkshake - $1.25</li>
      </ul>
      
      <p><strong>OPEN 7 DAYS A WEEK</strong></p>
      
      <h3>JOHNSON LINIMENT</h3>
      <div class="article-meta">Health & Wellness • Trusted Since 1895</div>
      
      <div class="advertisement">
        <h4>RELIEF FOR ACHING MUSCLES</h4>
        <p>Made with natural ingredients</p>
        <p>Available at all local pharmacies</p>
        <p>Money-back guarantee</p>
      </div>
      
      <p><span class="drop-cap">F</span>or over 70 years, Johnson Liniment has been the trusted choice for families seeking relief from muscle aches and pains. Our time-tested formula combines the best of traditional medicine with modern quality standards.</p>
      
      <blockquote>
        "When my back aches after a long day in the fields, Johnson Liniment is the only thing that brings me relief. It's been in my family for generations." - Local Farmer
      </blockquote>
      
      <p>Available in three convenient sizes: 4 oz ($1.25), 8 oz ($2.00), and 16 oz ($3.50). Ask for it by name at your local pharmacy or general store.</p>
    `,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'page-4',
    title: 'The Art of Typography',
    content: `
      <h2>The Beauty of Letters</h2>
      <p>Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. In our digital book, we honor this ancient craft.</p>
      
      <p>The serif fonts we use—Georgia and Times New Roman—echo the elegance of traditional book printing, while maintaining excellent readability on digital screens.</p>
      
      <h3>Typography Principles Applied:</h3>
      <ol>
        <li><strong>Hierarchy:</strong> Clear distinction between headings and body text</li>
        <li><strong>Contrast:</strong> Sufficient color contrast for accessibility</li>
        <li><strong>Spacing:</strong> Generous line height for comfortable reading</li>
        <li><strong>Alignment:</strong> Justified text for a classic book appearance</li>
      </ol>
      
      <blockquote>
        "Typography is the craft of endowing human language with a durable visual form." — Robert Bringhurst
      </blockquote>
      
      <p>Every character, every space, every line break has been carefully considered to create the most pleasant reading experience possible.</p>
    `,
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'page-5',
    title: 'The Journey Continues',
    content: `
      <h2>Adventures in Digital Storytelling</h2>
      <p>As we venture deeper into this digital realm, we discover new possibilities for storytelling that were unimaginable to the scribes of old.</p>
      
      <p>Interactive elements, animations, and responsive design allow us to create reading experiences that adapt to each reader's preferences and device capabilities.</p>
      
      <h3>Modern Features, Timeless Appeal:</h3>
      <ul>
        <li>🌙 Dark mode support for comfortable night reading</li>
        <li>📱 Mobile-first responsive design</li>
        <li>⌨️ Full keyboard navigation support</li>
        <li>🎨 Customizable themes and colors</li>
        <li>♿ Comprehensive accessibility features</li>
      </ul>
      
      <p>The future of reading is here, and it combines the best of both worlds—the tactile pleasure of traditional books with the convenience and interactivity of digital technology.</p>
      
      <p>As you continue through these pages, remember that every great story begins with a single word, and every great journey starts with a single step.</p>
    `,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'page-6',
    title: 'The End... or Beginning?',
    content: `
      <h2>Epilogue: A New Chapter</h2>
      <p>And so we reach the end of this particular tale, but as every reader knows, the end of one story is often the beginning of another.</p>
      
      <p>The <strong>Old Book Reader</strong> component you've just experienced represents more than just a technical achievement—it's a bridge between the past and the future, between tradition and innovation.</p>
      
      <h3>What You've Discovered:</h3>
      <ul>
        <li>The power of thoughtful design</li>
        <li>The importance of accessibility</li>
        <li>The beauty of smooth animations</li>
        <li>The value of responsive layouts</li>
        <li>The magic of user experience</li>
      </ul>
      
      <blockquote>
        "The best way to predict the future is to invent it." — Alan Kay
      </blockquote>
      
      <p>As you close this digital book, remember that every great innovation starts with a simple idea and the determination to see it through. The future of reading is in your hands.</p>
      
      <p><em>Thank you for joining us on this journey through the digital pages of time.</em></p>
    `,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center'
  }
];
