/* eslint jsx-a11y/alt-text: 0 */
// @flow
import * as React from 'react';
import omit from 'ramda/src/omit';
import PropTypes from 'prop-types';

export type Props = {
  src: string,
  onLoad: (image: HTMLImageElement) => Promise<void> | void,
};

class InputOnLoad extends React.Component<Props> {
  static propTypes = {
    src: PropTypes.string,
    onLoad: PropTypes.func.isRequired, // (image: HTMLImageElement) => Promise<void> | void,
  };
  componentDidMount() {
    const { onLoad } = this.props;
    const { image } = this;

    if (image && image.complete) {
      this.isLoaded = true;
      onLoad(image);
    }
  }
  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.src !== this.props.src) {
      this.isLoaded = false;
    }
  }
  componentWillUnmount() {
    this.isLoaded = false;
  }
  onLoad = (e: any) => {
    if (this.isLoaded) return;
    this.isLoaded = true;
    this.props.onLoad(e.target);
  };
  onRef = (image: HTMLImageElement) => {
    this.image = image;
  };
  image: ?HTMLImageElement;
  isLoaded: ?boolean;
  props: Props;
  render() {
    const { onRef, onLoad } = this;
    const otherProps: Object = omit(['onLoad'])(this.props);

    return <img ref={onRef} onLoad={onLoad} {...otherProps} />;
  }
}

export default InputOnLoad;
