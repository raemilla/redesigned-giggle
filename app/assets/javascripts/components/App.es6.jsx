class App extends React.Component {
  constructor() {
    this.getPhaseComponents = this.getPhaseComponents.bind(this)
  }

  getPhaseComponents() {
    [ phase, admin ] = [this.props.phase, this.props["admin?"]]
    switch (phase) {
      case "pre":
        return admin ? <adminPreMain />    : <studentPreMain />
      case "0":
        return admin ? <adminPhase0Main /> : <studentPhase0Main />
      case "1":
        return admin ? <adminPhase1Main /> : <studentPhase1Main />
      case "2":
        return admin ? <adminPhase2Main /> : <studentPhase2Main />
      case "3":
        return admin ? <adminPhase3Main /> : <studentPhase3Main />
    }
  }

  render() {
    return (
      <div>
        <pre><code>{JSON.stringify(this.props,null,2)}</code></pre>
        {this.getPhaseComponents()}
      </div>
    )
  }
}
