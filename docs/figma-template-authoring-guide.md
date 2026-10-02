# AutoBanner Figma Template Authoring Guide

## File structure

The template file uses one page per product category, plus `00 — README` and `01 — Components`. Each banner variant is a top-level section containing one exact-size banner frame.

## Authoring workflow

1. Duplicate the closest existing variant inside the correct category page.
2. Rename the banner frame as `format-id / variant-id`.
3. Keep the banner frame metadata intact: `kind`, `category`, `format_id`, `layout`, `variant`, and `template`.
4. Keep exactly one node for each applicable runtime role: `logo`, `headline`, `subhead`, and `cta`.
5. Preserve the locked `safe_zone` guide and the clipping `content_area` frame.
6. Adjust visual geometry in canvas-relative pixels.
7. Run **AutoBanner Template Exporter → Validate**.
8. Resolve all errors, review warnings, then copy or export JSON.

## Semantic roles

- `safe_zone`: editing guide only; never runtime creative content.
- `content_area`: exact runtime content boundary and clipping region.
- `background`: full-canvas visual background when explicitly authored.
- `logo`: brand-logo placeholder or instance.
- `headline`: primary campaign text.
- `subhead`: secondary campaign text.
- `cta`: fixed-size call-to-action container.

Roles are stored as shared plugin metadata in the `autobanner` namespace. Visible names help designers, but export does not rely on names alone.

## Geometry and typography

- Node bounds are measured relative to the banner canvas.
- Figma pixels serialize as JSON `x`, `y`, `width`, and `height` values.
- Traffic Driver fields historically named `font_size_pt` are rendered by the web app as pixels; keep the numeric value unchanged.
- Other current categories are rule-driven in the web renderer. Their rule source remains metadata until the web app adopts exported fixed geometry.

## Safe editing rules

- Do not detach or delete semantic metadata.
- Do not place runtime content outside the canvas.
- Do not stretch fixed-size CTAs.
- Do not add a role that the variant composition does not support.
- Prefer absolute positioning when Auto Layout would change required geometry.
