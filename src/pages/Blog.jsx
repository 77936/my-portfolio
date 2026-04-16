import computervision from '../assets/computervision.png';
import gta from '../assets/gta.png';
import pokemon from '../assets/pokemon.png';

function Blog() {
  return (
    <main className="section">
      <h2>My Blog</h2>
      
      <article className="blog-post">
        <h3>Spring Break 2026: Stuck working</h3>
        <img 
          src={computervision} 
          alt= "Computer Vision" 
          style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }}
        />
        <p>
          I really didn't do too much during spreak break. I spent a good chunk of time working on my Capstone Project as I needed to finish setting up
          and training a YOLO computer vision model. The Capstone project we were given was a soccer robot.
          Given a TurboPi model, we needed to set it up to play soccer against other TurboPis.
          Time was winding down on all my classes and I definitely had to make sure that model was working at least somewhat.
        </p>
        <br></br>
        <p>
          I had to take and annotate a ton of photos of the robot and the soccer goal to train the model.
          The balls we had to train on were basic colored balls, so I just added the photos of a generic ball dataset.
          However, the TurboPi and 3D printed soccer goals were decently unique, meaning I had to make the dataset myself.
        </p>
        <br></br>
        <p>
          I was worried at first, since my first model performed pretty badly. When I first tested it with my webcam,
          it detected the pillow on my bed as a robot. I eventually found out that an autolabeler function I used was
          labeling small clumps of pixels as an entire robot, which I believe was the reason for my model
          performing poorly. After going through the dataset and fixing everything, my model was able
          to perform at an acceptable level for me to focus on other things before maybe improving the model
          if I have time later.
        </p>
      </article>
      
      <article className="blog-post">
        <h3>Spring Break 2026: Some free time</h3>
        <img 
          src={gta} 
          alt="GTA Server Github" 
          style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }}
        />
        <p>
          Whenever I did have free time, I spent it playing games with my friends.
          There was originally going to be a GTA RP server that we were going to set up to play on, but
          the person who was setting it up wasn't a very technical person so there were a lot of issues.
          I ended up helping him set up a lot of the mods as there were a good amount of conflicts but after fixing
          a lot of issues, we ended up shelving the server at least until maybe around summer when more people had
          more free time to play.
        </p>
        <br></br>
        <p>
          Since we ended up shelving the server, we started playing regular GTA online all together.
          A lot of them have actually played it before, but personally, I had only ever played the story.
          Since I was a little lost trying to figure out what to do in GTA Online, I spent a lot of time just
          doing small jobs and missions until I managed to get a couple of my closer friends and my girlfriend
          together so we could do the original GTA online heists together, as they required 4 players.
        </p>
        <br></br>
        <p>
          Lastly, I did spend some time playing some other games by myself or with my girlfriend. One thing we ended up playing
          together was Slay the Spire 2. Neither of us had played the first one, but it was fun learning the game
          together despite me making terrible decisions out of curiosity. By myself, I found myself seeing a lot
          of videos on Pokemon games. Because I had only ever played Pokemon Platinum, I decided to set up an emulator
          on my phone to play Pokemon White, which I had heard had a good story.
        </p>
        <br></br>
        <div style={{ textAlign: 'center' }}>
          <img
            src={pokemon} 
            alt="Pokemon White" 
            style={{ 
              width: '25%', 
              borderRadius: '8px', 
              marginBottom: '1rem',
              display: 'inline-block',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          />
      </div>
      </article>
    </main>
  );
}

export default Blog;
