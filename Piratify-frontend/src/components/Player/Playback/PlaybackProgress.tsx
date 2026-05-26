import "./Playback.scss";

export default function PlaybackTimeline({ progress }: { progress: number }) {
  return (
    <div className="timeline">
      <div
        style={{ width: `${progress}%` }}
        className="timeline-progress"
      ></div>
    </div>
  );
}
