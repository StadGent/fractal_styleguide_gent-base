# Color sections

In the style guide of Ghent there are 5 color sections (or schemes) available.
These are named after the content sections.

- **Default:** The default content region (white background, gray text)
- **Inverse:** An inverse region to visualise a different content region (light
  blue background, gray text)
- **Highlighted:** A content region in need of the attention of the end-user.
  For example an emergency warning. (orange background, gray text)
- **Accent:** An accent region mostly used for Stad Gent branded services like
  Ghent info. (blue background, white text)
- **Wrapper:** Used as header and footer. (dark blue background, white text)

## Custom color sections

All components are dependent on a section context. This means that you always
need a wrapper section, and that components will change their theming based on
this wrapper section. If no wrapper is explicitly defined, a default section is
assumed.

When inspecting individual components like a heading 1 atom, you will see that
the SASS code uses one particular mixin to define theming of components based on
their wrapper.

```scss
themify()
```

More technical information on this mixin can be found in the chapter about
mixins, where it is fully documented.

To create more sections in your subtheme we provide a SASS map
`$overwrite-themes`. This variable needs to be structured like the `$themes`
variable. SASS will then merge these two maps into 1 themes map to define all
the basic sections with your own custom sections.
