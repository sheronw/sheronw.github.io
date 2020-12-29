/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import BlogPostItem from "@theme/BlogPostItem";
import BlogPostPaginator from "@theme/BlogPostPaginator";
import BlogSidebar from "@theme/BlogSidebar";
import TOC from "@theme/TOC";
import IconEdit from "@theme/IconEdit";
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import { config } from "./config";
import md5 from "md5";

function BlogPostPage(props) {
  useEffect(() => {
    const node = document.createElement("div");
    node.setAttribute("id", "gitalk-container");
    document.getElementById("comment").appendChild(node);
    const gitalk = new Gitalk({
      clientID: "8a38f2dd6eab3ba97cf5",
      clientSecret: config.clientSecret,
      repo: "sheronw.github.io",
      owner: "sheronw",
      admin: ["sheronw"],
      id: md5(title),
      distractionFreeMode: false, // Facebook-like distraction free mode
    });
    gitalk.render("gitalk-container");
  }, []);
  const { content: BlogPostContents, sidebar } = props;
  const { frontMatter, metadata } = BlogPostContents;
  const { title, description, nextItem, prevItem, editUrl } = metadata;
  const { hide_table_of_contents: hideTableOfContents } = frontMatter;
  return (
    <Layout
      title={title}
      description={description}
      wrapperClassName="blog-wrapper"
    >
      {BlogPostContents && (
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--2">
              <BlogSidebar sidebar={sidebar} />
            </div>
            <main className="col col--8">
              <BlogPostItem
                frontMatter={frontMatter}
                metadata={metadata}
                isBlogPostPage
              >
                <BlogPostContents />
              </BlogPostItem>
              <div>
                {editUrl && (
                  <a href={editUrl} target="_blank" rel="noreferrer noopener">
                    <IconEdit />
                    Edit this page
                  </a>
                )}
              </div>
              {(nextItem || prevItem) && (
                <div className="margin-vert--xl">
                  <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
                </div>
              )}
              <div id="comment"></div>
            </main>
            {!hideTableOfContents && BlogPostContents.toc && (
              <div className="col col--2">
                <TOC toc={BlogPostContents.toc} />
              </div>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}

export default BlogPostPage;
