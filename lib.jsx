TAP = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      text: TAPi18n.__(this.props.label, this.props.options || {})
    };
  },
  render() {
    if (this.props.tag) {
      return React.createElement(
        this.props.tag,
        { className: this.props.className },
        this.data.text
      );
    } else {
      return <span className={this.props.className}>{this.data.text}</span>
    }
  }
});
