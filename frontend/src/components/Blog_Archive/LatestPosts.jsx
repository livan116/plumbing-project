import React from 'react';

import pic1 from '../../assets/blogs/pic1.jpg';
import pic2 from '../../assets/blogs/pic2.jpg';
import pic3 from '../../assets/blogs/pic3.jpg';
import pic4 from '../../assets/blogs/pic4.jpg';
import pic5 from '../../assets/blogs/pic5.jpg';
import pic6 from '../../assets/blogs/pic6.jpg';

const LatestPosts = () => {
  // Post data
  const posts = [
    {
      id: 1,
      title: "The Benefits of Installing a Water Softener in Your Home",
      date: "October 1, 2024",
      image: pic1,
      url: "/benefits-water-softener"
    },
    {
      id: 2,
      title: "How to Detect Hidden Water Leaks and Save on Bills",
      date: "October 1, 2024",
      image: pic2,
      url: "/detect-water-leaks"
    },
    {
      id: 3,
      title: "Water Heater Maintenance: Simple Tips for Long-Lasting Performance",
      date: "October 1, 2024",
      image:pic3,
      url: "/water-heater-maintenance"
    },
    {
      id: 4,
      title: "Emergency Plumbing: What to Do Before Help Arrives",
      date: "October 1, 2024",
      image: pic4,
      url: "/emergency-plumbing"
    },
    {
      id: 5,
      title: "Pipe Installation: What Every Homeowner Should Know",
      date: "October 1, 2024",
      image: pic5,
      url: "/pipe-installation"
    },
    {
      id: 6,
      title: "The Ultimate Guide to Drain Cleaning: Tips from Expert Plumbers",
      date: "October 1, 2024",
      image: pic6,
      url: "/drain-cleaning-guide"
    }
  ];

  return (
    <div className="max-w-sm mx-auto bg-gray p-8">
      <h2 className="text-3xl font-medium textcolor1 mb-4 heading3">Latest Post</h2>
      
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="flex items-center space-x-3">
            {/* Post Image */}
            <div className="flex-shrink-0">
              <img 
                src={post.image} // Using placeholder for this demo
                alt={post.title}
                className="w-20 h-20 object-cover"
              />
            </div>
            
            {/* Post Content */}
            <div className="flex-1">
              <a 
                href={post.url}
                className="block textcolor1 font-lg"
              >
                {post.title}
              </a>
              <p className="textcolor3 text-sm heading3">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;