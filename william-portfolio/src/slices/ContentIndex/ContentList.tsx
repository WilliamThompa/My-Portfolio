import { Content } from "@prismicio/client"
import React from 'react'

type ContentListProps = {
    items: Content.HobbyPostsDocument[] | Content.ProjectsDocument[]
    contentType: Content.ContentIndexSlice["primary"]["content_type"]
    fallbackItemImage: Content.ContentIndexSlice["primary"]["fallback_item_image"]
    viewMoreText: Content.ContentIndexSlice["primary"]["view_more_text"]
}

export default function ContentList({items, contentType, fallbackItemImage, viewMoreText = "Read More"}: ContentListProps) {
  return (
    <div>
        <ul className="grid border-b border-b-yellow-400">
            {items.map((item, index) => (
                <li key={index} className="list-item opacity-0f">
                <a href='' className="flex flex-col justify-between border-t border-t-yellow-400 py-10 text-white md:flex-row">
                    <div>
                        <span>{item.data.title}</span>
                        <div>
                            {item.tags.map((tag, index) => (
                                <span key={index}>{tag}</span>
                            ))}
                        </div>
                    </div>
                    <span>{viewMoreText}</span>
                </a>
            </li>
            ))}
        </ul>
    </div>
  )
}
