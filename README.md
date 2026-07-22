# AutoBanner

AutoBanner is a browser-based banner generator for quickly creating campaign banners across Website, App, Traffic Driver, Social Media, and Video Graphics formats.

The tool lets users input campaign copy, logo, background, and design elements once, then preview multiple banner layouts, fine-tune individual banners, approve selected outputs, and export them as a ZIP file.

## Who This Is For

- Campaign, marketing, product, social, and design teams who need fast banner mockups or production-ready layout exports.
- Teammates who need to create multiple banner sizes from the same campaign assets.
- Designers who want to fine-tune individual banner layouts without manually rebuilding every size.

## Open The Tool

Open the AutoBanner link shared by your team. For the best experience, use it on a desktop browser.

## Supported Banner Sets

| Banner set | Formats included |
| --- | --- |
| Website | Jumbotron Desktop, Jumbotron Mobile, SG Homepage Carousel / Listing / Article / Weekend / CN Tile, SG Homepage Topic Highlight |
| App | In App Banner, In App Message |
| Traffic Driver | Leaderboard, Mobile Leaderboard, IMU |
| Social Media | Facebook Cover, YouTube Cover, X Header, Instagram Post, Instagram Story, Instagram Link in Bio, plus logo variants where available |
| Video Graphics | Article Cover, YouTube Cover, Vertical YouTube / Instagram / TikTok Shorts Cover |

## Basic Workflow

1. Choose the banner set under `Create banners for:`.
2. Add or edit the global layers on the left:
   - Headline
   - Subhead
   - CTA text
   - Brand logo
   - Design elements
   - Background
3. Review the generated banner layouts in the preview panel.
4. Click a banner preview to fine-tune that specific layout.
5. Adjust the banner in the edit panel.
6. Click `Mark as Approved` on the banners you want to export.
7. Open `Review Approved`.
8. Enter the campaign name.
9. Click `Download ZIP Archive`.

## Main Functions

### Global Inputs

- Add headline and subhead copy.
- Add CTA text.
- Toggle CTA on or off.
- Upload a brand logo.
- Toggle brand logo visibility.
- Upload one or multiple design elements.
- Upload horizontal and vertical backgrounds.
- Turn safezone guides on or off.

### Background Handling

- Horizontal background is used by default.
- Vertical background is used by default for vertical formats such as In App Message and IG Story.
- If only one background is uploaded, the tool uses that background for all banners.
- Background can be moved, scaled, and rotated in the individual banner editor.

### Design Elements

- Upload multiple design elements at once.
- Design elements are auto-placed across the left and right sides of the banner.
- Select an element to edit its scale, rotation, and position.
- Omit an element from one banner without removing it globally.
- Restore omitted elements anytime.
- Edits in the individual panel only affect the selected banner or selected traffic-driver slide.

### Text Editing

- Headline and subhead can be aligned left, center, or right.
- Text can be moved with X / Y position sliders.
- Text can have border color, border thickness, and shadow settings.
- Long text auto-adjusts to avoid overlap or cropping where possible.

### Logo And CTA Editing

- Logo can be aligned left, center, or right.
- Logo scale can be adjusted up to 500%.
- CTA can be aligned left, center, or right.
- CTA scale can be adjusted.
- CTA button width follows the text width.
- One-character CTA text becomes a circular CTA button.
- Long CTA text is reduced to avoid cropping.

### Traffic Driver Slides

- Traffic Driver banners can have multiple slides.
- New slides start from the same content and layout as Slide 1.
- Each slide can have its own text, layout, logo visibility, CTA visibility, design elements, and display time.
- Slides can be added or deleted.
- Undo and redo are available per slide.
- Main preview shows the animated version once multiple slides are added.

### Export

- Approved banners are exported into one ZIP archive.
- Export filenames include the campaign name, banner name, and banner size.
- Example: `summer-sale-in-app-message-600x900.jpg`
- Website, App, and Traffic Driver exports include:
  - `original/`
  - `compressed/`
- Compressed Website, App, and Traffic Driver files target a maximum file size of 500KB per file.
- Traffic Driver exports:
  - 1 slide: static image
  - More than 1 slide: animated GIF
  - Includes original size and 2x size
- Social Media and Video Graphics export original files only.

## Dos

- Do use clear campaign names before exporting.
- Do use transparent PNG or SVG files for logos and design elements.
- Do upload both horizontal and vertical backgrounds when the campaign needs both wide and tall formats.
- Do check small banners carefully, especially when headline or CTA copy is long.
- Do use the omit function when one banner does not need a design element.
- Do approve only the banners that should be included in the final ZIP.
- Do preview traffic-driver slides before exporting GIFs.

## Don'ts

- Do not upload very large source images unless needed; they can slow down preview and export.
- Do not rely on one layout for every format without checking smaller banner sizes.
- Do not drag text directly on canvas; use the X / Y sliders in the text panel.
- Do not assume individual banner edits will update all banners.
- Do not expect Social Media or Video Graphics exports to include a compressed folder.

## Troubleshooting

- If the page is blank, refresh once and check your internet connection.
- If export does not work, refresh the page and try again.
- If images do not appear, re-upload the logo, background, or design elements.
- If the ZIP is too large, reduce source image sizes and use the compressed folder for delivery.
- If a banner looks crowded, shorten the copy or fine-tune that banner individually.
