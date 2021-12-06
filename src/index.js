const props = { key: 11 };
const X = () => (
  <div key={12} {...props}>
    hoge
  </div>
);

const Icon = () => <Pic text={"My Dog"} />;

class Square extends React.Component {
  render() {
    return <button className="square">{this.props.value}</button>;
  }
}
