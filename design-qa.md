# AutoBanner design QA

- Source visual truth: `/Users/yuchen@sphnet.com.sg/Downloads/autobanner-preview.html` (Codex in-app Browser tab 2)
- Implementation: `http://127.0.0.1:8000/` (Codex in-app Browser tab 3)
- Reference capture: in-app Browser capture, 1280 × 720 px
- Implementation capture: in-app Browser capture, 1280 × 720 px
- CSS viewport: 1280 × 720 px
- Density normalization: both captures compared at the same 1× browser viewport and pixel dimensions
- State: desktop gallery, Website selected, no uploaded assets, no approved banners

## Findings

No actionable P0, P1, or P2 visual mismatches remain.

The implementation now follows the reference's primary composition: 76 px white header, 328 px shared-content rail, warm gray workspace, bordered channel selector, pink-tinted preview guidance, soft format panels, and two-column banner cards. Existing product-specific controls remain visible, including the safe-zone toggle and the complete layer stack.

## Required fidelity surfaces

- Fonts and typography: switched the application shell to an Arial/Noto Sans SC stack matching the reference's neutral UI type; restored the reference's heading scale, weights, and compact helper copy.
- Spacing and layout rhythm: matched the header, sidebar, workspace padding, 18 px panel radii, 12 px cards, and the reference's denser gallery rhythm.
- Colors and visual tokens: matched the pink accent, ink, muted text, line, soft pink, and workspace gray tokens.
- Image quality and asset fidelity: banner canvases and all user-uploaded/generated assets continue to use the original rendering pipeline; no image or logo assets were replaced.
- Copy and content: functional application copy and format names were preserved. Reference-only framing copy was added visually for “Campaign workspace,” “Design concept,” and the shared-content explanation.

## Full-view comparison evidence

Reference and implementation were captured together in one in-app Browser comparison at 1280 × 720. Header alignment, sidebar width, channel hierarchy, preview notice, format-panel geometry, and card density were compared in the same gallery state.

## Focused region comparison evidence

The header, shared-content rail, channel selector, preview notice, and first desktop format panel were readable in the full-view captures, so separate crops were not required. The editor was also opened and visually checked to confirm the style layer did not distort its canvas or property panel.

## Interaction and runtime checks

- Shared headline editing updated the banner preview.
- Banner approval updated the review count and approval state.
- Clicking a banner opened the existing editor.
- Returning from the editor restored the gallery.
- Horizontal and vertical logo files upload, preview, and clear independently.
- Landscape banners select the horizontal logo; portrait banners select the vertical logo.
- When one orientation is missing, the available logo is used as a fallback rather than leaving the banner blank.
- Sidebar layers can be dragged by their handles to reorder the stack; the top visible layer is rendered in front and the canvas hit-testing order follows the same z-index.
- Each layer now uses one lightweight card with a 46 px draggable header, compact FRONT badge, visible drop marker, and contained settings; the native drag preview is limited to the compact header rather than the full form.
- Dragging the first layer onto the second reordered the existing layer array correctly. Editing the headline afterward left the order unchanged, and no form controls are draggable.
- No browser console errors were reported. The only messages were the pre-existing Tailwind CDN production warning.

## Review workflow refinement

- Gallery cards now use sentence-case “Select for review” and a restrained pink “Selected for review” state; clicking the selected action again deselects it.
- The header uses the live pending-selection count and opens the existing Review Panel.
- Selection and approval are separate states: export remains disabled for pending selections, and “Approve for export” inside the Review Panel moves the layout into the green, locked, export-eligible state.
- Tested the complete unselected → selected → deselected → selected → approved flow. Counts changed from 0 to 1 and back correctly, and export enabled only after approval.
- Verified two simultaneous selections, unchanged preview-to-editor navigation, zero document overflow at 1280 px and 1024 px, and no runtime errors.
- Gallery cards are now the selection target themselves, with Enter/Space support and `aria-pressed`; visible variant-name footers, including “Headline Only,” were removed.
- Default cards keep their actions hidden. Hover/focus reveals compact “Select for review” and “Edit preview” overlays; selected and approved status badges remain persistently visible in pink and green respectively.
- Verified clicking the preview selects the card, keyboard selection toggles correctly, the edit overlay opens the existing editor without changing selection, and the separate approval flow remains functional.
- Follow-up refinement removed the large selection pill and remaining inner preview borders. Selection now uses a two-pixel pink card outline plus a compact top-left “Selected” check label.
- Every rendered layout card exposes a permanent 32 px top-right pencil button; clicking it opens the editor without changing `aria-pressed` or the review count.
- Updated guidance to “Choose a layout” / “Select a design for review, or edit it first.” Hover exposes only the lightweight “Select” hint.
- Rechecked all 19 Website layout edit controls at 1024 px: controls remained visible and document overflow stayed at zero.
- Hover refinement: unselected cards now receive a two-pixel pink outline and reveal a compact pink “Select for review” action; verified computed hover opacity, outline colour, selection click, and zero runtime errors.
- Centered-hover refinement replaces the pink CTA with a 36 px neutral rectangular action, positioned at the mathematical center of the preview. A 7% dark overlay fades in underneath it while the permanent edit icon stays above the overlay.
- Geometry checks across desktop and mobile Jumbotron cards reported zero-pixel horizontal and vertical center deviation. Selected cards remove the hover action, Edit remains selection-neutral, and the page retains zero overflow.

## Traffic Driver editor refinement

- Removed the standalone Slide Layout card from the right properties sidebar and moved the existing per-slide variant selector into every slide header.
- The inline header now contains the active Slide chip, labelled Layout select, compact duration field, and delete icon for non-first slides. It continues to write each slide's existing `variantId` through `updateTrafficSlideState`.
- Verified Slide 2 could change from `headline-only` to `headline-subhead` while Slide 1 remained `headline-only`; switching and rendering used each slide's own value.
- Confirmed duration editing, adding up to the existing slide flow, first-slide delete protection, deleting Slide 2, text inspector availability, disabled undo/redo semantics, and zero overflow at 1440 px and 1100 px.
- Simplified the compact Traffic Driver canvas toolbar to “Select and move elements” with neutral 32 px undo/redo controls. No non-Traffic layout or state logic was changed.

## Comparison history

1. Initial comparison found the header too short, the sidebar visually fragmented into heavy cards, channel controls too compact, and gallery panels too dense.
2. Applied a presentation-only style layer and small CSS hook classes; no application functions or state handlers were changed.
3. Post-fix comparison found channel controls wrapping across two rows at the target viewport.
4. Changed the channel group to a single flexible row and restored the reference's “Design concept” label.
5. Final same-state comparison found no remaining P0/P1/P2 issue.

## Follow-up polish

- P3: Existing layer names and approval actions remain uppercase because those labels belong to the current functional UI rather than the supplied design concept.
- P3: The functional safe-zone control remains in the channel bar even though it is absent from the reference.

final result: passed
