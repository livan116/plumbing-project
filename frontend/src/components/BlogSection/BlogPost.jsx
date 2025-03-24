import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import Sidebar from './SideBar'
import LatestPosts from "../Blog_Archive/LatestPosts"
import "../../styles/fonts.css";

// Import all blog images
import img1 from "../../assets/blogs/pic1.jpg";
import img2 from "../../assets/blogs/pic2.jpg";
import img3 from "../../assets/blogs/pic3.jpg";
import img4 from "../../assets/blogs/pic4.jpg";
import img5 from "../../assets/blogs/pic5.jpg";
import img6 from "../../assets/blogs/pic6.jpg";
import Navbar from "../Navbar";
import PipeoFooter from "../footer/PipeoFooter";
import LeaveForm from "../Blog_Archive/LeaveForm";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  // Our blog data (in a real app, this would come from an API or database)
  const allPosts = [
    {
      title:
        "Water Softener: The Benefits of Installing a Water Softener in Your Home",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste ut consequuntur, fugiat, dolores non debitis tempora, perferendis magni illum placeat totam dolorem nesciunt! Suscipit nulla recusandae hic sit modi dolorem facilis libero, voluptatem vitae, ut ab nihil aliquam. Dolore voluptates doloribus perferendis eos. Dicta nisi consequuntur quam veritatis hic.",
      image: img1,
      date: "October 1, 2024",
      comments: "No Comments",
      category: "Water Softener",
      para1: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>`,
      para2: `<h3>Key Benefits of Water Softeners</h3>
          
          <ul>
            <li>Extends the life of plumbing fixtures and appliances</li>
            <li>Reduces soap scum and mineral buildup</li>
            <li>Softer skin and hair after showering</li>
            <li>Brighter, softer laundry</li>
            <li>Reduced energy costs for water heating</li>
          </ul>`,
      para3: `
          <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
          
          <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
        `,
    },
    {
      title:
        "Leak Detection: How to Detect Hidden Water Leaks and Save on Bills",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste ut consequuntur, fugiat, dolores non debitis tempora, perferendis magni illum placeat totam dolorem nesciunt! Suscipit nulla recusandae hic sit modi dolorem facilis libero, voluptatem vitae, ut ab nihil aliquam. Dolore voluptates doloribus perferendis eos. Dicta nisi consequuntur quam veritatis hic.",
      image: img2,
      date: "October 1, 2024",
      comments: "No Comments",
      category: "Leak Detection",
      para1: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>`,
      para2: `Common Signs of Hidden Water Leaks
          
          <ul>
            <li>Unexplained increase in water bills</li>
            <li>Sound of running water when no fixtures are in use</li>
            <li>Damp or warped flooring</li>
            <li>Water stains on walls or ceilings</li>
            <li>Mold or mildew growth</li>
          </ul>`,
      para3: `
          <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
          
          <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
        `,
    },
    // Add the rest of your blog posts here
    {
      title:
        "Water Heater: Water Heater Maintenance: Simple Tips for Long-Lasting Performance",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste ut consequuntur, fugiat, dolores non debitis tempora, perferendis magni illum placeat totam dolorem nesciunt! Suscipit nulla recusandae hic sit modi dolorem facilis libero, voluptatem vitae, ut ab nihil aliquam. Dolore voluptates doloribus perferendis eos. Dicta nisi consequuntur quam veritatis hic.",
      image: img3,
      date: "October 1, 2024",
      comments: "No Comments",
      category: "Water Heater",
      para1: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>`,
      para2: `<h3>Water Heater Maintenance Checklist</h3>
          
          <ul>
            <li>Flush the tank annually to remove sediment</li>
            <li>Check the pressure relief valve</li>
            <li>Inspect the anode rod every 2-3 years</li>
            <li>Check for leaks around fittings and connections</li>
            <li>Insulate hot water pipes to improve efficiency</li>
          </ul>`,
      para3: `
          <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
          
          <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
        `,
    },
    {
      title: "Plumbing: Essential Plumbing Maintenance Tips for Homeowners",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste ut consequuntur, fugiat, dolores non debitis tempora, perferendis magni illum placeat totam dolorem nesciunt! Suscipit nulla recusandae hic sit modi dolorem facilis libero, voluptatem vitae, ut ab nihil aliquam. Dolore voluptates doloribus perferendis eos. Dicta nisi consequuntur quam veritatis hic.",
      image: img4,
      date: "October 1, 2024",
      comments: "No Comments",
      category: "Plumbing",
      para1: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>`,
      para2: `<h3>DIY Plumbing Maintenance</h3>
          
          <ul>
            <li>Regularly clean drain stoppers and strainers</li>
            <li>Check for leaks under sinks and around toilets</li>
            <li>Test water pressure and adjust if necessary</li>
            <li>Inspect visible pipes for corrosion or damage</li>
            <li>Know where your main water shutoff valve is located</li>
          </ul>`,
      para3: `
          <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
          
          <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
        `,
    },
    {
      title:
        "Water Filter: Choosing the Right Water Filtration System for Your Home",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste ut consequuntur, fugiat, dolores non debitis tempora, perferendis magni illum placeat totam dolorem nesciunt! Suscipit nulla recusandae hic sit modi dolorem facilis libero, voluptatem vitae, ut ab nihil aliquam. Dolore voluptates doloribus perferendis eos. Dicta nisi consequuntur quam veritatis hic.",
      image: img5,
      date: "October 1, 2024",
      comments: "No Comments",
      category: "Water Filter",
      para1: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>`,
      para2: `<h3>Types of Water Filtration Systems</h3>
          
          <ul>
            <li>Activated carbon filters - remove chlorine and improve taste</li>
            <li>Reverse osmosis systems - remove almost all contaminants</li>
            <li>UV filters - kill bacteria and viruses</li>
            <li>Whole-house systems - filter water at the point of entry</li>
            <li>Countertop and under-sink filters - point-of-use solutions</li>
          </ul>`,
      para3: `
          <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
          
          <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
        `,
    },
    {
      title:
        "Drainage: How to Prevent Clogged Drains and Maintain Proper Drainage",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste ut consequuntur, fugiat, dolores non debitis tempora, perferendis magni illum placeat totam dolorem nesciunt! Suscipit nulla recusandae hic sit modi dolorem facilis libero, voluptatem vitae, ut ab nihil aliquam. Dolore voluptates doloribus perferendis eos. Dicta nisi consequuntur quam veritatis hic.",
      image: img6,
      date: "October 1, 2024",
      comments: "No Comments",
      category: "Drainage",
      para1: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>`,
      para2: `<h3>Preventing Clogged Drains</h3>
          
          <ul>
            <li>Use drain strainers in all sinks and showers</li>
            <li>Never pour grease or oil down the drain</li>
            <li>Run hot water after each use</li>
            <li>Regularly clean drain stoppers</li>
            <li>Schedule professional drain cleaning annually</li>
          </ul>`,
      para3: `
          <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
          
          <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
        `,
    },
  ];

  // Helper function to create a slug from a title
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-");
  };

  // Find the post that matches the slug from URL
  useEffect(() => {
    const foundPost = allPosts.find((p) => createSlug(p.title) === slug);
    setPost(foundPost);

    // If post found, update page title
    if (foundPost) {
      document.title = foundPost.title;
    }

    // Scroll to top when navigating to blog post
    window.scrollTo(0, 0);
  }, [slug]);

  // If post not found
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold textcolor1">Blog Post Not Found</h1>
          <p className="mt-4">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Related posts (excluding current post)
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.title !== post.title)
    .slice(0, 3);

  // Categories for sidebar
  const categories = [
    { name: "Drain Cleaning", count: 5 },
    { name: "Water Softener", count: 8 },
    { name: "Water Heater", count: 6 },
    { name: "Pipe Installation", count: 4 },
    { name: "Leak Detection", count: 7 },
    { name: "Emergency Help", count: 3 },
  ];

  return (
    <div className="min-h-screen">
    <Navbar/>
      {/* Hero Banner */}
      <div className="relative h-70 gradient overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-24">
          <span className="inline-block w-40 flex items-center justify-center gradient2 text-white px-3 py-1 mb-4 heading2">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white heading1">
            {post.title.split(":")[1] || post.title}
          </h1>
          <div className="mt-4 flex items-center text-white/80 heading3">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.comments}</span>
          </div>
        </div>
      </div>

      {/* Content Area with Sidebar */}
      <div className="px-4 md:px-24 md:py-12">
        <div className="max-w-7xl">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="w-full md:w-3/4">
              <div className=" p-6 md:p-4 text-justify">
                <p
                  className="prose prose-lg max-w-none textcolor3 para1 mb-2"
                  dangerouslySetInnerHTML={{ __html: post.para1 }}
                ></p>
                {/* {post.para1} */}
                <div className="flex flex-col lg:flex-row gap-4 mb-2">
                  <img src={post.image} width="400" height="300" />
                  <p
                    className="textcolor3 para1"
                    dangerouslySetInnerHTML={{ __html: post.para2 }}
                  ></p>
                </div>
                <p
                  className="textcolor3 para1"
                  dangerouslySetInnerHTML={{ __html: post.para3 }}
                ></p>

                {/* Author Box */}
                <LeaveForm/>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold textcolor1 mb-6">
                    Related Posts
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost, index) => (
                      <ServiceCard key={index} {...relatedPost} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="w-full md:w-1/3">
              <Sidebar categories={categories} />
              <div className="mt-12" ><LatestPosts/></div>
            </div>
          </div>
        </div>
      </div>

      <PipeoFooter/>
    </div>
  );
};

export default BlogPost;
