class AdminPreferencesView extends React.Component {
  constructor() {
    super()
    this.state = {
      pitches: [],
      students: []
    }
    this.state.pitches.push({
      id: '1',
      title: "weather stuff",
      author: "josh marantz",
      preference_count: {
        1: '3',
        2: '5',
        3: '1'
      }
    })
    this.state.pitches.push({
      id: '2',
      title: "richie stuff",
      author: "rachael miller",
      preference_count: {
        1: '2',
        2: '4',
        3: '3'
      }
    })
    this.state.students.push({
      id: '1',
      name: 'josh marantz',
      preferences: {
        1: 'weather stuff',
        2: 'other stuff',
        3: 'richie stuff'
      }
    })
    this.state.students.push({
      id: '2',
      name: 'richie eatstoes',
      preferences: {
        1: 'richie stuff',
        2: 'richie stuff 2',
        3: 'richie stuff 3'
      }
    })

    this.pitchRows = this.pitchRows.bind(this)
  }
  //possibly write a preference_count method on the pitch model
  pitchRows() {
    result = this.state.pitches.map( (pitch, key) => (
        <tr className="pitch" key={key}>
          <td>{pitch.title}</td>
          <td>{pitch.author}</td>
          <td>{pitch.preference_count["1"]}</td>
          <td>{pitch.preference_count["2"]}</td>
          <td>{pitch.preference_count["3"]}</td>
        </tr>
      )
    )
    return (<tbody>
      {result}
    </tbody>)
  }

  studentRows() {
    result = this.state.students.map( (student, key) => (
        <tr className="pitch" key={key}>
          <td>{student.name}</td>
          <td>{student.preferences["1"]}</td>
          <td>{student.preferences["2"]}</td>
          <td>{student.preferences["3"]}</td>
        </tr>
      )
    )
    return (<tbody>
      {result}
    </tbody>)
  }

  render() {
    return(
      <div>
        <table>
          <thead className="pitch">
            <tr>
              <th>Pitch Title:</th>
              <th>Team Leader:</th>
              <th>1st Places</th>
              <th>2nd Places</th>
              <th>3rd Places</th>
            </tr>
          </thead>
          {this.pitchRows()}
        </table>

<br></br><br></br><br></br>

        <table>
          <thead className="student">
            <tr>
              <th>Student:</th>
              <th>1st:</th>
              <th>2nd:</th>
              <th>3rd:</th>
            </tr>
          </thead>
          {this.studentRows()}
          </table>

      </div>
    )
  }
}
