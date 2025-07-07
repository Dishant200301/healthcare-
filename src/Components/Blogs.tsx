import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  slug: string;
  imageUrl: string;
  imageSrcSet: string;
}

interface BlogSectionProps {
  posts?: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts = defaultPosts }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/67738a6edfb9a1be9200f6b4_ic-title.svg"
                loading="lazy"
                alt="Title Icon"
                className="w-6 h-6"
              />
              <div className="text-blue-600 font-medium">News</div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Articles</h2>
          </div>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 mt-4 sm:mt-0"
          >
            <span>View All</span>
            <img
              src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/67738f0efaeb04f5025bdc32_link-arrow.svg"
              loading="lazy"
              alt="Arrow"
              className="w-4 h-4"
            />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="group">
              <Link
                to={`/blog-posts/${post.slug}`}
                className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={post.imageUrl}
                    loading="lazy"
                    alt="Post Image"
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, (max-width: 991px) 46vw, 47vw"
                    srcSet={post.imageSrcSet}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        <span>{post.date}</span>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <span>{post.category}</span>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 line-clamp-2">
                        {post.title}
                      </h4>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 self-start">
                      <span>Read More</span>
                      <img
                        src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/67738f0efaeb04f5025bdc32_link-arrow.svg"
                        loading="lazy"
                        alt="Arrow"
                        className="w-4 h-4"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Default posts data
const defaultPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The comprehensive guide to understanding and managing chronic illnesses',
    date: 'Jan 16, 2025',
    category: 'Diagnosis',
    slug: 'the-comprehensive-guide-to-understanding-and-managing-chronic-illnesses',
    imageUrl: 'https://cdn.prod.website-files.com/6788aacf1dded3938b3b6b90/6788ec483c0699772b7cfa71_blog-thumb-06.jpg',
    imageSrcSet: 'https://cdn.prod.website-files.com/6788aacf1dded3938b3b6b90/6788ec483c0699772b7cfa71_blog-thumb-06-p-500.jpg 500w, https://cdn.prod.website-files.com/6788aacf1dded3938b3b6b90/6788ec483c0699772b7cfa71_blog-thumb-06-p-800.jpg 800w, https://cdn.prod.website-files.com/6788aacf1dded3938b3b6b90/6788ec483c0699772b7cfa71_blog-thumb-06-p-1080.jpg 1080w, https://cdn.prod.website-files.com/6788aacf1dded3938b3b6b90/6788ec483c0699772b7cfa71_blog-thumb-06.jpg 1256w'
  },
  {
    id: '2',
    title: 'Navigating emergency medical situations tips for staying prepared',
    date: 'Jan 16, 2025',
    category: 'Healthy Living',
    slug: 'navigating-emergency-medical-situations-tips-for-staying-prepared',
    imageUrl: 'https://cdn.prod.website-files.com/6788aacf1dded3938b3b6b90/6788ec33a954621466ac5243_blog-thumb-05.jpg',
    imageSrcSet: 'https://cdn.prod.website-files.com/6788aacf1dded3938b3b6b90/6788ec33a954621466ac5243_blog-thumb-05-p-500.jpg 500w, https://cdn.prod.website-files.com/6788aacf1dded3938b3b6b90/6788ec33a954621466ac5243_blog-thumb-05-p-800.jpg 800w, https://cdn.prod.website-files.com/6788aacf1dded3938b3b6b90/6788ec33a954621466ac5243_blog-thumb-05-p-1080.jpg 1080w, https://cdn.prod.website-files.com/6788aacf1dded3938b3b6b90/6788ec33a954621466ac5243_blog-thumb-05.jpg 1256w'
  },
    {
    id: '3',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    date: 'Feb 16, 2025',
    category: 'Diagnosis',
    slug: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    imageUrl: 'https://imgs.search.brave.com/876Cna7uOJ0Z7GmSyRv1-RVKqhu32zH7rZMw8TNd7ZM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDUu/ZGVwb3NpdHBob3Rv/cy5jb20vNDU3NjQw/NTgvNjY0OTYvaS80/NTAvZGVwb3NpdHBo/b3Rvc182NjQ5Njg1/ODItc3RvY2stcGhv/dG8taGVhbHRoY2Fy/ZS1jb25jZXB0LWhl/YXJ0LXNoYXBlZC1o/YW5kLmpwZw',
    imageSrcSet: 'https://imgs.search.brave.com/876Cna7uOJ0Z7GmSyRv1-RVKqhu32zH7rZMw8TNd7ZM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDUu/ZGVwb3NpdHBob3Rv/cy5jb20vNDU3NjQw/NTgvNjY0OTYvaS80/NTAvZGVwb3NpdHBo/b3Rvc182NjQ5Njg1/ODItc3RvY2stcGhv/dG8taGVhbHRoY2Fy/ZS1jb25jZXB0LWhl/YXJ0LXNoYXBlZC1o/YW5kLmpwZw'
  }
];

export default BlogSection;