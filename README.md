# @haensl/react-json-schema

Simple [JSON+LD schema](https://schema.org/) React component.

[![NPM](https://nodei.co/npm/@haensl%2Freact-json-schema.png?downloads=true)](https://nodei.co/npm/@haensl%2Freact-json-schema/)

[![npm version](https://badge.fury.io/js/@haensl%2Freact-json-schema.svg)](http://badge.fury.io/js/@haensl%2Freact-json-schema)

[![CircleCI](https://circleci.com/gh/haensl/react-json-schema.svg?style=svg)](https://circleci.com/gh/haensl/react-json-schema)

Render JSON+LD structured data aka microdata into `<script>` tags. Works as [recommended by Next.js](https://nextjs.org/docs/app/building-your-application/optimizing/metadata#json-ld).

## Installation

### Via `npm`

```bash
$ npm install -S @haensl/react-json-schema
```

### Via `yarn`

```bash
$ yarn add @haensl/react-json-schema
```

## Usage


```javascript
import JSONSchema from '@haensl/react-json-schema';

const MyComponent = (props) => {
  const organization = {
    '@context': 'https://schema.org/',
    '@type': 'Organization',
    '@id': 'https://acme.com',
    url: 'https://acme.com',
    name: 'ACME'
  };

  return (
    <div>
      <JSONSchema json={ organization } />

      // your markup...
    </div>
  )
};

export default MyComponent;
```

## Synopsis

`@haensl/react-json-schema`

The component will not render (i.e. return `null`) when it is not given JSON data.

Refer to [https://schema.org](https://schema.org) for information on structured data.


```javascript
  import JSONSchema from '@haensl/react-json-schema'

  <JSONSchema
    // A JSON schema object.
    // See https://schema.org
    json={{
      '@context': 'https://schema.org/',
      '@type': 'Organization',
      '@id': 'https://acme.com',
      url: 'https://acme.com',
      name: 'ACME'
    }}
  />
```

Renders to

```html
<script type="application/ld+json">{
  "@context":"https://schema.org/",
  "@type":"Organization",
  "@id":"https://acme.com",
  "url":"https://acme.com",
  "name":"ACME"
}</script>
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
