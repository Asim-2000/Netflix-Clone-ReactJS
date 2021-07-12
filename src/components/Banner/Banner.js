import "./Banner.css"
export function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div className="banner__description">
          {truncate(
            `Test Description loer asdfjasdf adsfasdfas dfasd fasdfasd fa sdfjasdfas dfa sdf asd fa sdf asd fa sdf as dfa sdf as df asdf as df asdf asd f asdf asd fa sdf asd fa sdf asd fas df asd fa sdf `,
            150
          )}
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  )
}
