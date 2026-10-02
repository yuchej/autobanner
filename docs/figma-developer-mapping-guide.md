# AutoBanner Figma → JSON Mapping

| Figma source | Transformation | JSON destination | Origin |
| --- | --- | --- | --- |
| Banner frame width/height | Round to integer px | `canvas.width`, `canvas.height` | Visual |
| `safe_zone` bounds | Relative to banner; derive four insets | `safe_zone.*` | Visual + metadata |
| `content_area` bounds | Relative to banner | `content_area.{x,y,width,height}` | Visual |
| Content clipping | Boolean | `content_area.clip_content` | Visual |
| Banner fill | CSS color string | `content_area.background` | Visual |
| Role node bounds | Relative to banner, rounded | `layouts.*.variants.*.<role>` | Visual |
| `category` | Preserve | Template collection key | Plugin metadata |
| `format_id` | Preserve | Format key | Plugin metadata |
| `layout` | Preserve | `layouts` key | Plugin metadata |
| `variant` | Preserve | `variants` key | Plugin metadata |
| Typography size | Traffic Driver: 1:1 px; otherwise renderer-owned | `font_size_pt` or rules | Visual + global rule |
| Alignment | Map Figma text alignment to lowercase | `align` | Visual |
| CTA fixed sizing | Compare authored bounds to component contract | `fixed_size`, `width`, `height` | Metadata + calculated |
| Layout constraints | Preserve JSON rule object | `layout_rules` | Plugin metadata |
| Reference provenance | Figma node ID | `reference_node_id` | Calculated |

## Intermediate model

The exporter separates Figma API reads from serialization:

- `BannerTemplate`: category and format identity.
- `BannerLayout`: layout identity and inherited rules.
- `BannerVariant`: one selectable composition.
- `BannerElement`: semantic role and canvas-relative geometry.
- `BannerRules`: non-visual constraints retained from source metadata.

Validation runs against this semantic model. The serializer never depends on arbitrary visible layer names.

## Compatibility note

The current single-file web application hardcodes its template database and Traffic Driver geometry; it does not load these JSON files dynamically. Exported JSON is therefore structurally and geometrically compatible, but application ingestion requires wiring the existing database construction to the exported schema. That change is intentionally not made implicitly because it would alter runtime behavior outside the requested Figma workflow.
