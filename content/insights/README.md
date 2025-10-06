# Insights Content Management

This is a simple file-based content management system for the Photon Echo insights section.

## How to Add New Articles

### 1. Create a New Markdown File
Create a new `.md` file in this directory with the following structure:

```
---
title: "Your Article Title"
slug: "url-friendly-slug"
excerpt: "Brief description of your article for previews"
date: "2025-10-04"
author: "Author Name"
category: "Category Name"
featured: true/false
tags: ["Tag1", "Tag2", "Tag3"]
---

# Your Article Title

Your article content goes here in markdown format.

## Sections

You can use standard markdown formatting:

- **Bold text**
- *Italic text*
- Lists
- Links
- Images

## Conclusion

End your article with a strong conclusion.
```

### 2. Required Fields
- `title`: The article title
- `slug`: URL-friendly version (e.g., "3d-visualization-guide")
- `excerpt`: Brief description for previews
- `date`: Publication date (YYYY-MM-DD format)
- `author`: Author name
- `category`: Article category (e.g., "Case Study", "Technical Guide")
- `featured`: Set to `true` to feature on homepage
- `tags`: Array of relevant tags

### 3. File Naming
Name your files descriptively: `article-title.md`

### 4. Content Guidelines
- Use clear headings (H1, H2, H3)
- Include relevant images (store in public/images/)
- Write engaging excerpts (150-200 characters)
- Use relevant tags for better organization
- Include calls-to-action at the end

### 5. Publishing
Once you save the file:
1. The article will automatically appear on the insights page
2. It will be available at `/insights/your-slug`
3. Featured articles appear prominently
4. All articles are sorted by date (newest first)

## Example Categories
- Case Study
- Technical Guide
- Industry Trends
- Best Practices
- Product Updates

## Example Tags
- 3D Visualization
- CAD Design
- Engineering
- Manufacturing
- Cost Reduction
- Product Development

