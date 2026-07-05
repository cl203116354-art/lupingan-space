const capabilities = [
  {
    title: '平安守护',
    text: '守护游客与景区秩序',
    icon: 'assets/icon-police-shield.png',
    tone: 'yellow',
  },
  {
    title: '景区巡逻',
    text: '把安全带到西湖沿线',
    icon: 'assets/icon-westlake-mark.png',
    tone: 'blue',
  },
  {
    title: '反诈宣传',
    text: '让重要提醒更好理解',
    icon: 'assets/icon-chat-alert.png',
    tone: 'orange',
  },
  {
    title: '互动陪伴',
    text: '用亲和方式回应大家',
    icon: 'assets/icon-emergency-phone.png',
    tone: 'yellow',
  },
]

export default function CharacterIntro() {
  return (
    <section className="character section shell" id="character" aria-labelledby="character-title">
      <div className="character-poster reveal">
        <div className="character-poster-top">
          <div className="character-signature">
            <img src="assets/icon-police-shield.png" alt="" />
            <span>
              西湖旅游公安
              <small>IP CHARACTER</small>
            </span>
          </div>
          <span className="character-badge">CHARACTER PROFILE</span>
          <div className="character-motto">
            <strong>一路平安</strong>
            <span>守西湖，也守护你</span>
          </div>
        </div>

        <div className="character-hero">
          <div className="character-copy">
            <p className="character-hello">HELLO!</p>
            <h2 id="character-title">
              <span>I&apos;M</span>
              <strong>鹭平安</strong>
            </h2>
            <p className="character-intro">
              <span>以西湖常见鸟类夜鹭为原型</span>
              把巡逻的可靠感与日常的亲切感放进同一个角色。
            </p>
            <p className="character-location">西湖景区旅游警察的平安搭档</p>
          </div>

          <figure className="character-portrait">
            <div className="character-portrait-field">
              <img
                src="assets/pose-guide.png"
                alt="正在介绍安全知识的鹭平安"
                width="557"
                height="470"
                loading="lazy"
              />
            </div>
            <figcaption>守护，是鹭平安的超能力</figcaption>
          </figure>
        </div>

        <div className="character-capabilities" aria-label="角色能力">
          <div className="capabilities-title">
            <span>WHAT</span>
            <strong>我在做什么</strong>
          </div>
          {capabilities.map((item) => (
            <article key={item.title}>
              <div className={`capability-icon capability-icon-${item.tone}`}>
                <img src={item.icon} alt="" loading="lazy" />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
