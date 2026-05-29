import { tracks } from "@/data/tracks.data";

export default function Content() {
  return (
    <div className="content">
      <div className="track-list">
        {tracks.map((track) => (
          <div key={track.id} className="track-item">
            <img
              src={track.icon}
              alt={track.track_name}
              className="track-icon"
            />
            <div className="track-info">
              <h3>{track.track_name}</h3>
              <p>{track.artist}</p>
            </div>
            <audio src={track.track_file} controls className="track-player" />
          </div>
        ))}
      </div>
    </div>
  );
}
