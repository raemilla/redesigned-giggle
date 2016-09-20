class App extends React.Component {
  constructor() {
    super()
    this.getPhaseComponents = this.getPhaseComponents.bind(this)
  }

  getPhaseComponents() {
    [ phase, admin ] = [this.props.phase, this.props["admin?"]]
    switch (phase) {
      case "pre":
        return admin ? <AdminPreMain />    : <StudentPreMain />
      case "0":
        return admin ? <AdminPhase0Main pitches={this.props.pitches} students={this.props.students} /> : <StudentPhase0Main pitches={this.props.pitches} />
      case "1":
        return admin ? <AdminPhase1Main /> : <StudentPhase1Main />
      case "2":
        return admin ? <AdminPhase2Main /> : <StudentPhase2Main />
      case "3":
        return admin ? <AdminPhase3Main /> : <StudentPhase3Main />
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
