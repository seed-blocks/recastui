# @reptil/system

Framework-agnostic Styled API for creating atomic, theme-aware component styling.

## Installation

```sh
yarn add @reptil/system

# or

npm i @reptil/system

# or

pnpm add @reptil/system
```

## Features

- Add style props that hook into your own theme
- Quickly set responsive font-size, margin, padding, width, and more with props
- Influenced by constraint-based design system principles
- Typographic scale
- Spacing scale for margin and padding
- Works with any color palette
- Works with most css-in-js libraries, including [styled-components](https://styled-components.com), [emotion](https://emotion.sh) & [solid-styled-components](https://github.com/solidjs/solid-styled-components)

## Usage

```jsx
// Example uses styled-components, but styled-system works with most other css-in-js libraries as well
import styled from 'styled-components'
import { space, layout, typography, color } from '@reptil/system'

// Add styled-system functions to your component
const Box = styled.div`
  ${space}
  ${layout}
  ${typography}
  ${color}
`
```

Each style function exposes its own set of component props
that handle styles based on values defined in a theme.

```jsx
// width: 50%
<Box width={1/2} />

// font-size: 20px (theme.fontSizes[4])
<Box fontSize={4} />

// margin: 16px (theme.space[2])
<Box m={2} />

// padding: 32px (theme.space[3])
<Box p={3} />

// color
<Box color='tomato' />

// color: #333 (theme.colors.gray[0])
<Box color='gray.0' />

// background color
<Box bg='tomato' />
```

## Responsive Style Props

Set responsive width, margin, padding, font-size, and other properties with a shorthand array syntax.
[Read more](https://styled-system.com/responsive-styles)

```jsx
// responsive width
<Box width={[ 1, 1/2, 1/4 ]} />

// responsive font-size
<Box fontSize={[ 2, 3, 4 ]} />

// responsive margin
<Box m={[ 1, 2, 3 ]} />

// responsive padding
<Box p={[ 1, 2, 3 ]} />
```

To learn more, see the [Getting Started](https://styled-system.com/getting-started) guide or read the docs.

## Credits
This package is a fork of https://github.com/spicy-ui/styled-system and is inspired by https://github.com/styled-system/styled-system

