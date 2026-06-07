export default function MusicPlayer() {
  return (
    <audio
      id="wedding-audio"
      loop
      preload="auto"
    >
      <source
        src="/wedding-song2.mp3"
        type="audio/mpeg"
      />
    </audio>
  );
}