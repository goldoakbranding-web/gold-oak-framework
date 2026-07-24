# Gold Oak Framework Background Images

Each homepage background is discovered automatically. Add one file named `background` with a supported extension to the matching directory below, then restart development or rebuild for deployment. No React or configuration edits are required.

The resolver prefers formats in this order when more than one is present: `background.avif`, `background.webp`, `background.jpg`, `background.jpeg`, `background.png`.

Use `background.jpg` as the default naming convention. Keep each image decorative: content and text are already provided in the page.

| Section | Directory | Recommended dimensions | Aspect ratio | Target file size |
| --- | --- | --- | --- | --- |
| Hero | `hero/` | 2560 × 1440 | 16:9 | 350–700 KB |
| Services | `services/` | 2400 × 1600 | 3:2 | 300–650 KB |
| Gallery | `gallery/` | 2200 × 1400 | 11:7 | 300–600 KB |
| Roof System | `roof-system/` | 2400 × 1500 | 8:5 | 300–650 KB |
| Why Choose | `why-choose/` | 2400 × 1500 | 8:5 | 300–650 KB |
| Testimonials | `testimonials/` | 2200 × 1400 | 11:7 | 250–550 KB |
| Process | `process/` | 2400 × 1350 | 16:9 | 300–600 KB |
| Final CTA | `final-cta/` | 2560 × 1280 | 2:1 | 350–700 KB |
| Contact | `contact/` | 2200 × 1600 | 11:8 | 300–600 KB |

Supported formats are AVIF, WebP, JPG/JPEG, and PNG. WebP is the recommended balance of quality and compatibility; AVIF is ideal when the source has been carefully optimized. Avoid embedding text, logos, or essential details near image edges because every background uses `object-cover` cropping on mobile and desktop.

If a folder has no valid `background.*` file, the website deliberately keeps its existing CSS atmosphere. Hero and Final CTA also retain their current project-image fallback, so no broken image is ever requested.
