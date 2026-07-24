# Service Page Image System

Each service page discovers files automatically after they are added to its matching folder. No React or configuration change is needed. Rebuild before deployment so the service routes and Open Graph metadata can discover the new files.

Supported formats: AVIF, WebP, JPG/JPEG, and PNG. The resolver prefers AVIF, then WebP, then JPG/JPEG, then PNG when multiple versions exist.

For every service folder (`roofing`, `siding`, `gutters`, `soffit-fascia`, `storm-damage`, `insurance-claims`), use these conventions:

| Location | File name | Recommended dimensions | Notes |
| --- | --- | --- | --- |
| `hero/` | `background.<format>` | 2560 × 1440 | Hero and social-preview source; keep the important subject away from the extreme edges. |
| `backgrounds/` | `background.<format>` | 2400 × 1600 | Optional atmospheric image used behind content sections. |
| `gallery/` | `project-1` through `project-6` | 1800 × 1200 or larger | Add as many as approved; images are lazy-loaded and open in the gallery lightbox. |
| `before-after/` | `before.<format>` and `after.<format>` | Matching 2000 × 1300 | Use the same framing and aspect ratio for the comparison control. |

Target 250–700 KB per image after optimization. WebP is the recommended default. When no valid file exists, the page retains its designed CSS gradient placeholder and never sends a broken image request.
