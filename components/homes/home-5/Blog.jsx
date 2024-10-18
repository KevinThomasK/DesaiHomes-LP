import { blogs5 } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Blog() {
  return (
    <div className="container">
      <div className="row mb-70 mb-sm-50">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
          <h2 className="section-title mb-30 mb-sm-20">
            <span className="text-gray">Video</span> Testimonials
            <span className="text-gray">.</span>
          </h2>
          <div className="text-gray">
            Hear what our clients have to say about their experiences at Desai
            Homes!
          </div>
        </div>
      </div>
      <div className="row mt-n30">
        {/* Post Item */}
        {blogs5.map((post, index) => (
          <div
            key={index}
            className={`post-prev col-md-6 col-lg-4 mt-30 wow fadeInLeft`}
            data-wow-delay={`${post.delay}s`}
          >
            <div className="post-prev-container">
              <div className="post-prev-img">
                <Link href={`/elegant-blog-single/${post.id}`}>
                  <Image
                    src={post.imageSrc}
                    width={607}
                    height={358}
                    alt="Add Image Description"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
