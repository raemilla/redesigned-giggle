PrefsChoices = (props) => (
  <label>Choice {props.ranknum}
    <select defaultValue="header" name={`prefs[${props.ranknum}`}>
      <option value="header" disabled>Select a preference</option>
      {props.pitches.map((pitch) => <option key={pitch.id} value={pitch.id}>{pitch.title}</option>)}
    </select><br/>
  </label>
)
