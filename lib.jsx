TAP = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      text: TAPi18n.__(this.props.label, this.props.options)
    }
  },
  render() {
    return <span>{this.data.text}</span>
  }
});
