# AutoBanner Template Exporter

Local Figma plugin for building, validating, and exporting the AutoBanner template system.

1. In Figma Desktop, open **Plugins → Development → Import plugin from manifest**.
2. Select `figma-plugin/manifest.json`.
3. Run **AutoBanner Template Exporter** and choose **Build all templates**.
4. Use **Validate**, then **Copy JSON** or **Export JSON**.

The plugin writes deterministic semantic metadata in the `autobanner` shared-plugin-data namespace. Coordinates are canvas-relative pixels. Traffic Driver fields historically named `font_size_pt` are represented 1:1 as pixels to match the current renderer.

## Adding a new banner format

Duplicate an existing banner section on the correct category page, then rename the section using `Format Name / variant-name`. For example:

- `Reels Cover / default-text`
- `Reels Cover / quote-text`

During Scan or Export, the current category page, section name, canvas dimensions, safe-zone geometry, element geometry, and text styles are read from Figma. Both examples above export under the new `reels-cover` format with two variants.

For a newly drawn template, name editable layers `logo`, `headline`, `subhead`, `cta`, `safe_zone`, and `content_area` as applicable. A layer can be omitted when that variant intentionally does not use it.
