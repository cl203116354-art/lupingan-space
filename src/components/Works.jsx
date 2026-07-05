import { gifWorks, videoWorks } from '../content'

export default function Works() {
  const [leadVideo, ...supportingVideos] = videoWorks

  return (
    <section className="works section" id="works" aria-labelledby="works-title">
      <div className="shell">
        <div className="works-heading reveal">
          <h2 id="works-title">影像与表情</h2>
          <p>角色不只停留在设定图里。动作、语气与每一次回应，共同组成鹭平安的真实个性。</p>
        </div>

        <article className="lead-work reveal">
          <div className="video-frame lead-video">
            <video controls playsInline preload="metadata" poster="assets/lupingan-web-hero.png">
              <source src={leadVideo.src} type="video/mp4" />
              浏览器暂时无法播放这段视频。
            </video>
          </div>
          <div className="work-caption">
            <h3>{leadVideo.title}</h3>
            <p>{leadVideo.description}</p>
          </div>
        </article>

        <div className="video-grid">
          {supportingVideos.map((work, index) => (
            <article className={`video-work video-work-${index + 1} reveal`} key={work.src}>
              <div className="video-frame">
                <video
                  controls
                  playsInline
                  muted
                  loop
                  preload="none"
                  poster="assets/lupingan-web-hero.png"
                >
                  <source src={work.src} type="video/mp4" />
                  浏览器暂时无法播放这段视频。
                </video>
              </div>
              <div className="work-caption">
                <h3>{work.title}</h3>
                <p>{work.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="gif-gallery-wrap">
        <div className="gif-gallery shell" aria-label="鹭平安动态表情作品">
          {gifWorks.map((work, index) => (
            <figure className={`gif-work gif-work-${index + 1} reveal`} key={work.src}>
              <img src={work.src} alt={`鹭平安动态表情：${work.title}`} loading="lazy" />
              <figcaption>{work.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
