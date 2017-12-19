/* Adapted from the react-svg module source code;
  - removes <divs>
  Original LiCENSE text:
  The MIT License (MIT)

  Copyright (c) 2014 Atomic

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

// See: https://github.com/webpack/react-starter/issues/37
const isBrowser = typeof window !== 'undefined';
const SVGInjector = isBrowser ? require('./svg-injector') : undefined;

export default class ReactSVG extends React.Component {
  static defaultProps = {
    callback: () => {},
    className: null,
    evalScripts: 'once',
  };

  static propTypes = {
    callback: PropTypes.func,
    evalScripts: PropTypes.oneOf(['always', 'once', 'never']),
    path: PropTypes.string.isRequired,
  };

  refCallback = container => {
    if (!container) {
      return;
    }

    this.container = container;
    this.renderSVG();
  };

  renderSVG(props = this.props) {
    var svgNode = this.container;
    const {callback: each, evalScripts, path, ...htmlProps} = props;

    //Update SVG element
    SVGInjector(svgNode, {
      evalScripts,
      each,
    });

    //SVGInjector will override the initial attributes set
    //by props. So we need to re apply them.
    if (svgNode && htmlProps) {
      Object.keys(htmlProps).reduce((svgNode, key) => {
        svgNode.setAttribute(key, htmlProps[key]);
        return svgNode;
      }, svgNode);
    }

  }

  render() {
    const {callback, evalScripts, path, ...props} = this.props
    return (
        <svg ref={this.refCallback} data-src={this.props.path} {...props} />
    );
  }
}