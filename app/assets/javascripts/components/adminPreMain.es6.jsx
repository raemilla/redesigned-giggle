class AdminPreMain extends React.Component {
  render(){
    return(
      <section>
        <h2>create a new flow</h2>
        <form method="post" action="/flows/new">
          <input id="start-button" type="submit" value="Start Process"/><br/>
          <label>Number of Teams:</label>
          <select name="number_teams" defaultValue="4">
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select><br/>
          <label>Number of pitches per student: </label>
          <select name="number_pitches" defaultValue="3">
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select><br/>
          <label>Number of top pitches to move onto round 2:</label>
          <select name="number_top_pitches" defaultValue="7">
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </form>
      </section>
    )
  }
}
