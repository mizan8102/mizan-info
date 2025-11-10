export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'modern-javascript-es6-features',
    title: 'Modern JavaScript ES6+ Features Every Developer Should Know',
    excerpt: 'A comprehensive guide to essential ES6+ features that will make you a more effective JavaScript developer.',
    date: '2024-03-15',
    category: 'Technical Tutorial',
    tags: ['JavaScript', 'ES6', 'Web Development'],
    readTime: '8 min read',
    content: `
      <h1>Modern JavaScript ES6+ Features Every Developer Should Know</h1>
      
      <p>JavaScript has evolved significantly since ES6 (ECMAScript 2015). Here are the essential features that every modern developer should master:</p>
      
      <h2>1. Arrow Functions</h2>
      <pre><code>// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// With single parameter
const square = x => x * x;

// With no parameters
const greet = () => console.log('Hello!');</code></pre>
      
      <h2>2. Destructuring Assignment</h2>
      <pre><code>// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// Object destructuring
const { name, age, email } = user;

// With default values
const { theme = 'light' } = settings;</code></pre>
      
      <h2>3. Template Literals</h2>
      <pre><code>const name = 'John';
const age = 30;

// Multi-line strings with interpolation
const message = \`Hello, my name is \${name}
and I am \${age} years old.\`;

// Tagged template literals
const styled = css\`
  color: \${props => props.primary ? 'blue' : 'black'};
\`;</code></pre>
      
      <h2>4. Promises and Async/Await</h2>
      <pre><code>// Promise-based approach
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Async/await approach
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}</code></pre>
      
      <h2>5. Modules (Import/Export)</h2>
      <pre><code>// Named exports
export const PI = 3.14159;
export function calculateArea(radius) {
  return PI * radius * radius;
}

// Default export
export default class Calculator {
  add(a, b) { return a + b; }
}

// Importing
import Calculator, { PI, calculateArea } from './math.js';</code></pre>
      
      <h2>6. Spread and Rest Operators</h2>
      <pre><code>// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>These ES6+ features are fundamental to modern JavaScript development. They make code more readable, maintainable, and efficient. Practice using them in your daily development to become a more effective JavaScript developer.</p>
    `
  },
  {
    id: 'react-performance-tips',
    title: 'React Performance Optimization: Best Practices',
    excerpt: 'Learn essential techniques to optimize React applications for better performance and user experience.',
    date: '2024-03-10',
    category: 'React',
    tags: ['React', 'Performance', 'Optimization'],
    readTime: '12 min read',
    content: `
      <h1>React Performance Optimization: Best Practices</h1>
      
      <p>Performance is crucial for user experience. Here are proven techniques to optimize your React applications:</p>
      
      <h2>1. Use React.memo for Component Memoization</h2>
      <pre><code>const ExpensiveComponent = React.memo(({ data, onUpdate }) => {
  return (
    <div>
      {data.map(item => (
        <Item key={item.id} item={item} onUpdate={onUpdate} />
      ))}
    </div>
  );
});

// With custom comparison
const MyComponent = React.memo(({ user }) => {
  return <div>{user.name}</div>;
}, (prevProps, nextProps) => {
  return prevProps.user.id === nextProps.user.id;
});</code></pre>
      
      <h2>2. Optimize Re-renders with useMemo and useCallback</h2>
      <pre><code>function UserList({ users, searchTerm }) {
  // Memoize expensive calculations
  const filteredUsers = useMemo(() => {
    return users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);
  
  // Memoize callback functions
  const handleUserClick = useCallback((userId) => {
    // Handle user click
    console.log('User clicked:', userId);
  }, []);
  
  return (
    <div>
      {filteredUsers.map(user => (
        <UserCard 
          key={user.id} 
          user={user} 
          onClick={handleUserClick}
        />
      ))}
    </div>
  );
}</code></pre>
      
      <h2>3. Code Splitting with React.lazy</h2>
      <pre><code>// Lazy load components
const Dashboard = React.lazy(() => import('./Dashboard'));
const Profile = React.lazy(() => import('./Profile'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </Router>
  );
}</code></pre>
      
      <h2>4. Virtualization for Large Lists</h2>
      <pre><code>import { FixedSizeList as List } from 'react-window';

const VirtualizedList = ({ items }) => {
  const Row = ({ index, style }) => (
    <div style={style}>
      <Item data={items[index]} />
    </div>
  );
  
  return (
    <List
      height={600}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </List>
  );
};</code></pre>
      
      <h2>5. Optimize Bundle Size</h2>
      <pre><code>// Tree shaking with named imports
import { debounce } from 'lodash-es';

// Dynamic imports for conditional loading
const loadChart = async () => {
  if (shouldShowChart) {
    const { Chart } = await import('./Chart');
    return Chart;
  }
};</code></pre>
      
      <h2>Performance Monitoring</h2>
      <p>Use React DevTools Profiler to identify performance bottlenecks and measure the impact of your optimizations.</p>
    `
  },
  {
    id: 'laravel-best-practices',
    title: 'Laravel Development Best Practices for Scalable Applications',
    excerpt: 'Essential Laravel patterns and practices for building maintainable and scalable web applications.',
    date: '2024-03-05',
    category: 'Laravel',
    tags: ['Laravel', 'PHP', 'Best Practices'],
    readTime: '15 min read',
    content: `
      <h1>Laravel Development Best Practices for Scalable Applications</h1>
      
      <p>Laravel is a powerful framework, but following best practices is crucial for building scalable applications. Here are the essential patterns and practices:</p>
      
      <h2>1. Follow Repository Pattern</h2>
      <pre><code>// UserRepository Interface
interface UserRepositoryInterface
{
    public function find(int $id): ?User;
    public function create(array $data): User;
    public function update(int $id, array $data): bool;
}

// Implementation
class UserRepository implements UserRepositoryInterface
{
    public function find(int $id): ?User
    {
        return User::find($id);
    }
    
    public function create(array $data): User
    {
        return User::create($data);
    }
}</code></pre>
      
      <h2>2. Use Service Classes for Business Logic</h2>
      <pre><code>class UserService
{
    public function __construct(
        private UserRepositoryInterface $userRepository,
        private EmailService $emailService
    ) {}
    
    public function createUser(array $userData): User
    {
        $user = $this->userRepository->create($userData);
        
        $this->emailService->sendWelcomeEmail($user);
        
        return $user;
    }
}</code></pre>
      
      <h2>3. Implement Proper Validation</h2>
      <pre><code>class CreateUserRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
        ];
    }
    
    public function messages(): array
    {
        return [
            'email.unique' => 'This email is already registered.',
        ];
    }
}</code></pre>
      
      <h2>4. Use Eloquent Relationships Efficiently</h2>
      <pre><code>// Eager loading to prevent N+1 queries
$users = User::with(['posts', 'comments'])->get();

// Lazy eager loading
$users = User::all();
$users->load('posts.comments');

// Conditional loading
$users = User::when($includeComments, function ($query) {
    return $query->with('comments');
})->get();</code></pre>
      
      <h2>5. Implement Caching Strategy</h2>
      <pre><code>class PostService
{
    public function getPopularPosts(): Collection
    {
        return Cache::remember('popular_posts', 3600, function () {
            return Post::where('views', '>', 1000)
                      ->orderBy('views', 'desc')
                      ->take(10)
                      ->get();
        });
    }
    
    public function clearPostCache(): void
    {
        Cache::forget('popular_posts');
        Cache::tags(['posts'])->flush();
    }
}</code></pre>
      
      <h2>6. Use Events and Listeners</h2>
      <pre><code>// Event
class UserRegistered
{
    public function __construct(public User $user) {}
}

// Listener
class SendWelcomeEmail
{
    public function handle(UserRegistered $event): void
    {
        Mail::to($event->user->email)
            ->send(new WelcomeEmail($event->user));
    }
}

// In EventServiceProvider
protected $listen = [
    UserRegistered::class => [
        SendWelcomeEmail::class,
        CreateUserProfile::class,
    ],
];</code></pre>
      
      <h2>7. Database Optimization</h2>
      <pre><code>// Use database indexes
Schema::table('posts', function (Blueprint $table) {
    $table->index(['user_id', 'created_at']);
    $table->index('status');
});

// Optimize queries
$posts = Post::select(['id', 'title', 'slug'])
             ->where('status', 'published')
             ->orderBy('created_at', 'desc')
             ->paginate(15);</code></pre>
      
      <h2>Conclusion</h2>
      <p>Following these best practices will help you build Laravel applications that are maintainable, scalable, and performant. Remember to always consider the specific needs of your application and adapt these patterns accordingly.</p>
    `
  }
];
