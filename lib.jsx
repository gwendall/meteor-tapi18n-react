TAP = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      text: TAPi18n.__(this.props.label, this.props.options || {})
    };
  },
  render() {

    var additionalProps = _.omit(this.props, [
      'tag',
      'label',
      'options',
      'renderHTML'
    ]);

    if (this.props.tag) {
      if (this.props.renderHTML) {
        return React.createElement(
          this.props.tag,
          _.extend(additionalProps, {
            dangerouslySetInnerHTML: {__html: this.data.text}
          })
        );
      } else {
        return React.createElement(
          this.props.tag,
          additionalProps,
          this.data.text
        );
      }
    } else {
      if (this.props.renderHTML) {
        return (
          <span
            {...additionalProps}
            dangerouslySetInnerHTML={{
              __html: this.data.text
            }}>
          </span>
        );
      } else {
        return <span {...additionalProps}>{this.data.text}</span>;
      }
    }
  }
});
