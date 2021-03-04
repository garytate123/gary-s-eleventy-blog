---
layout: layouts/post.njk
title: CMS Blog
description: "This is a post about the CMS sessions "
tags:
  - CMS
  - "Netlify "
date: 2021-03-04T18:34:30.276Z
thumbnail: /images/uploads/gary-tate-.jpg
---
<!--StartFragment-->

\- {

          label: "Layout",

          name: "layout",

          widget: "hidden",

          default: "layouts/post.njk",

        }

\- { label: "Title", name: "title", widget: "string" }

\- { label: "Description", name: "description", widget: "string" }

\- {

          label: "Tags",

          name: "tags",

          widget: "list",

          default: "post",

          field: { label: "Tag", name: "tag_name", widget: "string" },

        }

\- { label: "Publish Date", name: "date", widget: "datetime" }

\- { label: "Featured Image", name: "thumbnail", widget: "image" }

\- { label: "Rating (scale of 1-5)", name: "rating", widget: "hidden" }

\- { label: "Body", name: "body", widget: "markdown" }

<!--EndFragment-->