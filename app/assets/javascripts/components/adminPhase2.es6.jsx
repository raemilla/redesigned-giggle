class AdminPhase2Main extends React.Component {
  render(){
    return(
      <section>
        <h1>admin phase 2 yo</h1>

        <AdminPreferencesView pitches={this.props.pitches} students={this.props.students}/>

        <p>Insert Admin Submit teams form </p>

        <form method="get" action="/flows/continue">
          <input type="submit" value="close second round voting and begin team selection"/>
        </form>
      </section>
    )
  }
}
