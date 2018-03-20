# react-image-onload

> React Image onLoad event.  
> This is a workaround for `onLoad` event not being triggered in SSR [case](https://stackoverflow.com/questions/39777833/image-onload-event-in-isomorphic-universal-react-register-event-after-image-is).

[![Travis][build-badge]][build]
[![Codecov Status][codecov-badge]][codecov]
[![npm package][npm-badge]][npm]
[![npm downloads][npm-downloads]][npm]

[![Dependency Status][dependency-badge]][dependency]
[![devDependency Status][devdependency-badge]][devdependency]
[![peerDependency Status][peerdependency-badge]][peerdependency]

[![prettier][prettier-badge]][prettier]
[![license][license-badge]][license]

## Installation

```sh
$ yarn add react-image-onload
```

## Demo

* https://react-image-onload.netlify.com/

## Usage

```js
import ImageOnLoad from 'react-image-onload';

<ImageOnLoad
  onLoad={({ width, height }: HTMLImageElement) => {}}
  src="image"
  alt="background image"
/>;
```

## API

```js
type Props = {
  onLoad: (image: HTMLImageElement) => Promise<void> | void,
};
```

## Development

### Requirements

* node >= 9.8.0
* yarn >= 1.5.1

```sh
$ yarn install --pure-lockfile
$ yarn start
```

## Test

```sh
$ yarn run format
$ yarn run eslint
$ yarn run flow
$ yarn run test:watch
$ yarn run build
```

---

## CONTRIBUTING

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull requests must be accompanied by passing automated tests.

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

MIT: [http://michaelhsu.mit-license.org](http://michaelhsu.mit-license.org)

[build-badge]: https://img.shields.io/travis/evenchange4/react-image-onload/master.svg?style=flat-square
[build]: https://travis-ci.org/evenchange4/react-image-onload
[npm-badge]: https://img.shields.io/npm/v/react-image-onload.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-image-onload
[codecov-badge]: https://img.shields.io/codecov/c/github/evenchange4/react-image-onload.svg?style=flat-square
[codecov]: https://codecov.io/github/evenchange4/react-image-onload?branch=master
[npm-downloads]: https://img.shields.io/npm/dt/react-image-onload.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/react-image-onload.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/
[dependency-badge]: https://david-dm.org/evenchange4/react-image-onload.svg?style=flat-square
[dependency]: https://david-dm.org/evenchange4/react-image-onload
[devdependency-badge]: https://david-dm.org/evenchange4/react-image-onload/dev-status.svg?style=flat-square
[devdependency]: https://david-dm.org/evenchange4/react-image-onload#info=devDependencies
[peerdependency-badge]: https://david-dm.org/evenchange4/react-image-onload/peer-status.svg?style=flat-square
[peerdependency]: https://david-dm.org/evenchange4/react-image-onload#info=peerDependencies
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
