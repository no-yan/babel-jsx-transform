function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const props = {
  key: 11
};

const X = () => /*#__PURE__*/React.createElement("div", _extends({
  key: 12
}, props), "hoge");

const Icon = () => /*#__PURE__*/React.createElement(Pic, {
  text: "My Dog"
});

class Square extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("button", {
      className: "square"
    }, this.props.value);
  }

}